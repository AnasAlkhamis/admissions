import { useState } from "react";
import "./style.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
// ========================

const Login = () => {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const history = useNavigate();
  // ================================
  const login = async (values) => {
    console.log(values);
    try {
      const result = await axios.post("http://localhost:5000/login", {
        email: values.email,
        password: values.password,
      });
      if (result.data.success) {
        setStatus(true);
        setMessage("The user has been created successfully");
        setToken(result.data.token);
        history("/dashbord");
      } else throw Error;
    } catch (error) {
      setStatus(false);
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while register, please try again");
    }
  };

  // ==========================================
  return (
    <div className="login_container">
      <div>
        <h2>login:</h2>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={login}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* <Link to={"/"}>Forgot password</Link> */}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>{" "}
          Or <Link to={"/register"}> create new account</Link>
        </Form.Item>
      </Form>
    </div>
  );
  // return (
  //   <div className="form_container">
  //     <h2 className="Title">login:</h2>
  //     <form onSubmit={login}>
  //       <input
  //         type="email"
  //         placeholder="Email"
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <input
  //         type="password"
  //         placeholder="Password"
  //         onChange={(e) => setPassword(e.target.value)}
  //       />
  //       <button>Login</button>
  //     </form>
  //     <Link to={"/register"}>create new account</Link>
  //     {status
  //       ? message && <div className="SuccessMessage">{message}</div>
  //       : message && <div className="ErrorMessage">{message}</div>}
  //   </div>
  // );
};

export default Login;

const App = () => {};

// export default App;
