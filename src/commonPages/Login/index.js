import React, { Component } from "react";

import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import LoginHead from "src/assets/images/login-head.png";
import LoginHand from "src/assets/images/login-hand.png";
import "./style.scss";

function Login(props) {
  const { history } = props;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    history.push("/home");
  };

  const renderForm = () => {
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  };

  return (
    <div className="login-wrapper">
      <div className="login-top"></div>
      <div className="login-container">
        {/* icon */}
        <img src={LoginHead} className="login-head-image" alt="" />
        <img src={LoginHand} className="login-hand-image left" alt="" />
        <img src={LoginHand} className="login-hand-image right" alt="" />
        {renderForm()}
      </div>
    </div>
  );
}

export default Login;
