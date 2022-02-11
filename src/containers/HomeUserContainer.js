import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { deleteUserDetail, getUsersList } from "../actions/userAction";

class HomeUsersContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteUserDetail());
  }

  render() {
    console.log(this.props.params);
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeUsersContainer);
