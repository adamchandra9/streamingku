import { Button, Col, Form, Input, Layout, Row } from "antd";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import React from "react";

interface IProps {
  submitLogin;
}

const InputUsername = ({
  input,
  meta: { touched, error },
  placehoder,
  idComponent
}: any) => {
  return (
    <Form.Item>
      <Input placeholder="Username" {...input} />
    </Form.Item>
  );
};

const InputPassword = ({
  input,
  meta: { touched, error },
  placehoder,
  idComponent,
  autocomplete
}: any) => {
  return (
    <Form.Item>
      <Input.Password placeholder="Password" {...input} />
    </Form.Item>
  );
};

function LoginComponent(props: IProps & InjectedFormProps) {
  const { Content } = Layout;
  const { submitLogin } = props;
  const submitForm = (e: any) => {
    e.preventDefault();
    submitLogin();
  };
  return (
    <Content className="backgroundLoginComponent">
      <Row className="rowLogin">
        <Col span={12} className="colLoginLeft">
          <h1 className="titleLogin">Login</h1>
          <p className="descriptionLogin">Sign in to your account</p>
          <Form className="formLogin" onSubmit={submitForm}>
            <Field
              name="username"
              component={InputUsername}
              placeholder="Username"
            />
            <Field
              name="password"
              component={InputPassword}
              placeholder="Password"
            />
            <Form.Item>
              <Button
                block
                type="primary"
                className="btnLogin"
                htmlType="submit"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12} className="colLoginRight" />
      </Row>
    </Content>
  );
}

const WrappedLoginFormComponent = reduxForm({
  form: "loginForm"
})(LoginComponent);
export default WrappedLoginFormComponent;
