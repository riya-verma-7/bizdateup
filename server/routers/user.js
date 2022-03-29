const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const client = require("@mailchimp/mailchimp_marketing");

const {
  createOrder,
  getLogo,
  paymentCallback,
  getPayment,
} = require("../paymentControler");
const router = express.Router();

// const router = express.Router();

router.get("/createorder", createOrder);
router.post("/payment/callback", paymentCallback);
router.get("/payments/:paymentId", getPayment);
router.get("/logo", getLogo);
// module.exports = router;

router.post("/register", async (req, res) => {
  const { user_email, first_name, user_password } = req.body;

  let user = await User.findOne({ user_email });
  if (user) {
    return res.status(400).send("User with the provided email already exist.");
  }

  try {
    user = new User(req.body);
    console.log(user);
    user.user_password = await bcrypt.hash(user_password, 8);
    await user
      .save()
      .then(() => {
        //Adding member to mailchimp list
        const api = "82e98cbb9ffa6d786f3e9eb628db19aa-us14";
        const listID = "cfb2a5129e";

        client.setConfig({
          apiKey: api,
          server: "us14",
        });

        const run = async () => {
          await client.lists
            .addListMember(listID, {
              email_address: user_email,
              status: "subscribed",
              merge_fields: {
                FNAME: first_name,
              },
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        };

        run();
      })
      .catch((err) => console.log(err));

    res.status(201).send();
  } catch (e) {
    console.log(e);
    res.status(500).send("Something went wrong. Try again later.");
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ user_email: req.body.user_email });
    if (!user) {
      return res.status(400).send("User with provided email does not exist.");
    }

    const isMatch = await bcrypt.compare(
      req.body.user_password,
      user.user_password
    );

    if (!isMatch) {
      return res.status(400).send("Invalid credentials.");
    }
    const { user_password, ...rest } = user.toObject();

    return res.send(rest);
  } catch (error) {
    return res.status(500).send("Something went wrong. Try again later.");
  }
});

module.exports = router;
