import React from "react";
import { Button, /* Checkbox,*/ Form, Input } from "antd";
import { useNavigate } from "react-router";
import axios from "axios";
import { DataCoes } from "../../assets/constants/dataCoes";

const LoginDisplay: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: string) => {
    // console.log("Success:", values);
    try {
      const response = await axios.post(DataCoes("auth/signIn"), values);
      if (response.status === 201) return navigate("/datamanagment");
      // console.log(response.status);
    } catch (error: any) {
      alert(JSON.parse(error.request.response).message);
    }

    // navigate("/home");
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
        rules={[{ required: true, message: "Por favor ingrese su email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[
          { required: true, message: "Por favor ingrese su contraseña!" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Iniciar sesión
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginDisplay;
