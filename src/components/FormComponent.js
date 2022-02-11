import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import UserValidation from "../validation/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readonly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readonly={readonly}
      ></Input>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <FormGroup>
            <Col md="6">
              <FormGroup>
                <Field
                  type="text"
                  name="name"
                  component={renderField}
                  label="Nama :"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  type="text"
                  name="email"
                  component={renderField}
                  label="email :"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  type="text"
                  name="username"
                  component={renderField}
                  label="Username :"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  type="text"
                  name="phone"
                  component={renderField}
                  label="Phone :"
                />
              </FormGroup>
              <FormGroup row className="my-8">
                <Col md="12">
                  <FormGroup>
                    <Button
                      color="dark"
                      type="submit"
                      disabled={this.props.submitting}
                    >
                      Submit
                    </Button>
                  </FormGroup>
                </Col>
              </FormGroup>
            </Col>
          </FormGroup>
        </form>
      </div>
    );
  }
}
FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect()(FormComponent);
