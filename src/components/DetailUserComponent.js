import React from "react";
import { connect } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { getUserDetail } from "../actions/userAction";
import { Table } from "reactstrap";

const DetailUserComponent = (props) => {
  console.log(props.getUserDetail);
  return (
    <div>
      <Table size="sm" striped>
        <tbody>
          <tr>
            <td width="200">Nama</td>
            <td width="20">:</td>
            <td>{props.getUserDetail.name}</td>
          </tr>
          <tr>
            <td width="200">Email</td>
            <td width="20">:</td>
            <td>{props.getUserDetail.email}</td>
          </tr>
          <tr>
            <td width="200">Phone</td>
            <td width="20">:</td>
            <td>{props.getUserDetail.phone}</td>
          </tr>
          <tr>
            <td width="200">username</td>
            <td width="20">:</td>
            <td>{props.getUserDetail.username}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

export default connect(mapStateToProps, null)(DetailUserComponent);
