// import Layout1 from "../src/pages/Layout1/Layout1";
import Layout1 from "./pages/Layout1/Layout1";
import Layout2 from "./pages/Layout2/Layout2";
import Layout3 from "../src/pages/Layout3/Layout3";
import Layout4 from "../src/pages/Layout4/Layout4";
import Layout5 from "../src/pages/Layout5/Layout5";
import Layout6 from "../src/pages/Layout6/Layout6";
import Login from "../src/component/Login";
import SignUp from "../src/component/SignUp";
import ForgotPassword from "../src/component/ForgotPassword";
import ContactUs from "./pages/ContactUs";
import Deal from "../src/pages/Deals";
import Privacy from '../src/pages/Privacy';
import Terms from '../src/pages/Terms';
import Startups from "../src/pages/Startups/Internkhoj";

///////////////////////////////////////////////////////////////
// import {
//   withRouter,
//   Route,
//   Switch,
//   BrowserRouter as Router,
// } from "react-router-dom";
const routes = [
  { path: "/About", component: Layout2 },
  { path: "/Match", component: Layout3 },
  { path: "/Invest", component: Layout4 },
  { path: "/Layout5", component: Layout5 },
  { path: "/Layout6", component: Layout6 },
  { path: "/Login", component: Login },
  { path: "/SignUp", component: SignUp },
  { path: "/ForgotPassword", component: ForgotPassword },
  { path: "/ContactUs", component: ContactUs },
  { path: "/Privacy", component: Privacy },
  { path: "/Terms", component: Terms },
  { path: "/Deals", component: Deal},
  { path: "/Internkhoj", component: Startups},
  { path: "/startup/:id", component: Startups},
  { path: "/", component: Layout1 },
];

// const Routes =()=>{
//   return(
//     <Router>
//       <Switch>
//         <Route path={"/"} component={Layout1}/>
//         <Route path={"/Routes2"} component={Routes2}/>
//         <Route path={"/Layout2"} component={Layout2}/>
//         <Route path={"/Layout3"} component={Layout3}/>
//         <Route path={"/Layout4"} component={Layout4}/>
//         <Route path={"/Layout5"} component={Layout5}/>
//         <Route path={"/Layout6"} component={Layout6}/>
//         <Route path={"/Login"} component={Login}/>
//         <Route path={"/SignUp"} component={SignUp}/>
//         <Route path={"/ForgotPassword"} component={ForgotPassword}/>
//       </Switch>
//     </Router>
//   );
// }

export default routes;
