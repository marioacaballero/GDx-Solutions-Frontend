import React from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";

const RegisterDisplay: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: string) => {
    console.log("Success:", values);
    navigate("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="username"
        rules={[{ required: true, message: "Por favor ingrese un email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          { required: true, message: "Por favor ingrese una contraseña!" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Reingrese Contraseña"
        name="password2"
        rules={[{ required: true, message: "Por favor repita la contraseña!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Crear cuenta
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterDisplay;
