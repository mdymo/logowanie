import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "../components/App/App";
import SignIn from "../components/SignIn/SignIn";
import NotFound from '../components/NotFound/NotFound';
// import '../firebase/firebase'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} exact={true}/>
      <Route path='/sign' component={SignIn}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;