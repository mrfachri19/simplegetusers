import React, { Component } from "react";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";

export default class CreateUsersContainer extends Component {
  handleSubmit(data) {
    console.log(data);
  }
  render() {
    return (
      <div>
        <BackComponent />
        <h1>Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </div>
    );
  }
}
