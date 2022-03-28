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
import Privacypage from '../src/pages/Privacy';
import TermsPage from '../src/pages/Terms';
import RiskPage from '../src/pages/Risk';
import RefundpolicyPage from '../src/pages/Refundpolicy';
import Dashboard from '../src/pages/Dashboard';
import Startups from "../src/pages/Startups/Internkhoj";
import Profile from "../src/component/Profile";

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
    { path: "/Privacy", component: Privacypage },
    { path: "/Terms", component: TermsPage },
    { path: "/Deals", component: Deal },
    { path: "/Risk", component: RiskPage },
    { path: "/Refundpolicy", component: RefundpolicyPage },
    { path: "/Dashboard", component: Dashboard },
    { path: "/Internkhoj", component: Startups },
    { path: "/startup/:id", component: Startups },
    { path: "/Profile", component: Profile },
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