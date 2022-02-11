import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Col, Row, Spinner } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const columns = [
  {
    dataField: "id",
    text: " ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "name",
    text: " Nama",
    sort: true,
  },
  {
    dataField: "email",
    text: " Email",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mr-2">
              Detail
            </Button>
          </Link>

          {/* <Link to={"edit/" + row.id}>
            <Button color="dark" className="mr-2 ">
              Edit
            </Button>
          </Link>

          <Button color="dark" className="mr-2 ">
            Delete
          </Button> */}
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableComponent = (props) => {
  return (
    <div>
      {props.getUsersList ? (
        <>
          <div>
            <Row>
              <Col>
                {" "}
                <Link to={"/create"}>
                  <Button color="dark" className="mr-2">
                    Create User
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={props.getUsersList}
            columns={columns}
            defaultSorted={defaultSorted}
          />
        </>
      ) : (
        <div className="text-center">
          {props.errorUsersList ? (
            <h6>{props.errorUsersList}</h6>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

export default connect(mapStateToProps, null)(TableComponent);
