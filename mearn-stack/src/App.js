import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './components/login/login';
import DashBoard from './components/dashboard/dashboard';


class App extends React.Component {
  state={
    login:(sessionStorage.getItem("auth"))?true:false
  }

  cambiarLogin(login){
    console.log(login)
    this.setState({login})
  }

  render(){

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            {this.state.login?<Redirect to="/dashboard" />:<Login cambiarLogin={this.cambiarLogin.bind(this)} />}
          </Route>
          <Route path="/dashboard">
            {this.state.login?<DashBoard cambiarLogin={this.cambiarLogin.bind(this)} />:<Redirect to="/"/>}
          </Route>
        </Switch>
    </Router>
  );
  }
}



export default App;