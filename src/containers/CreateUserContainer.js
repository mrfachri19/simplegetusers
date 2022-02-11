import React, { Component } from "react";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";

class CreateUsersContainer extends Component {
  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(postUserCreate(data));
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
export default connect()(CreateUsersContainer);
