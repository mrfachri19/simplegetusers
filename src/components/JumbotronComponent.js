import React from "react";
import {
  Card,
  CardBody,
  CardText,
  CardSubtitle,
  CardTitle,
  Button,
} from "reactstrap";
import { connect } from "react-redux";

function JumbotronComponent(props) {
  return (
    <div>
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{props.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    title: state.users.title,
  };
};

export default connect(mapStateToProps, null)(JumbotronComponent);
