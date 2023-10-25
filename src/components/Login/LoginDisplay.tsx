import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { DotSpinner } from "@uiball/loaders";
import { LoginValues } from "../../assets/constants/interfaces";
import { login } from "../../assets/helpers/auxiliar";

const LoginDisplay: React.FC = () => {
  const [load, setLoad] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onFinish = async (values: LoginValues) => {
    setLoad(true);
    setError("");
    const response = await login(values);
    if (response.status === 200) {
      setLoad(false);
      window.localStorage.setItem("token", JSON.stringify(response.data));
      return navigate("/datamanagment");
    } else {
      setLoad(false);
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
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
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "var(--background)" }}
        >
          Iniciar sesión
        </Button>
        <div style={{ paddingLeft: "10%", paddingTop: "1rem" }}>
          {load && <DotSpinner size={25} speed={0.9} color="black" />}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginDisplay;
