import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appop from "./razorapp";
import PaymentStatus from "./component/PaymentStatus";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/investapp" component={Appop} />
        <Route
          exact
          path="/payment/status/:paymentId"
          component={PaymentStatus}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
