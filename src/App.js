import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from "./containers/HomeUserContainer";
import CreateUsersContainer from "./containers/CreateUserContainer";
import DetailUsersContainer from "./containers/DetailUserContainer";
import EditUsersContainer from "./containers/EditUserContainer";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <NavbarComponent />
        <JumbotronComponent />
        <Router>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/create" component={CreateUsersContainer} />
            <Route exact path="/detail/:id" component={DetailUsersContainer} />
            <Route exact path="/edit/:id" component={EditUsersContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}
