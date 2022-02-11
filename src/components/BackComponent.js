import React from "react";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

const BackComponent = () => {
  return (
    <div>
      <Row className="mb-2">
        <Col>
          <Link to={"/"}>
            <Button color="dark" className="mr-2">
              Back
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default BackComponent;
