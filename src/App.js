import React, { Component, createContext, useReducer } from "react";
import routes from "../src/routes";
import Routesp from "../src/routesp";
// import routes2 from "../src/routes2";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import "./assets/css/materialdesignicons.min.css";

import "./assets/scss/themes.scss";

import { initialState, reducer } from "../src/reducer/usereducer";

export const UserContext = createContext(); 


  

const App = () =>  {
  
    const [state, dispatch] = useReducer(reducer,initialState);
    return (
      <UserContext.Provider value={{state, dispatch}}>
        {/* <usereducefun/> */}
        <React.Fragment>
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} component={route.component} key={idx} />
            ))}
            {/* <Route exact path={"/abcdfff"} component={routes2}/> */}
          </Switch>
        </Router>
       {/* <Routes/>  */}
       <Routesp/>
      </React.Fragment>
      </UserContext.Provider>
    );
  
}

export default withRouter(App);
