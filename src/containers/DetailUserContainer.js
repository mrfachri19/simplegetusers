import React, { Component } from "react";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { getUserDetail } from "../actions/userAction";
import DetailUserComponent from "../components/DetailUserComponent";

class DetailUsersContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.match.params.id));
  }
  render() {
    console.log(this.props.match.params.id);
    return (
      <div>
        <BackComponent />
        <h1>Detail User</h1>
        <DetailUserComponent />
      </div>
    );
  }
}

export default connect()(DetailUsersContainer);
