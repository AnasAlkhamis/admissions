import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Confirm from "../confirmation/index";
// ========================
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
const Register = () => {
  const history = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  const [values, setValues] = useState([]);

  // =================================================================

  const addNewUser = async () => {
    try {
      const result = await axios.post("http://localhost:5000/register", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      });
      if (result.data.success) {
        setStatus(true);
        setMessage("The user has been created successfully");
        history("/");
      } else throw Error;
    } catch (error) {
      setStatus(false);
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while register, please try again");
    }
  };
  const confirmEmail = async (values) => {
    setValues(values);
    try {
      const result = await axios.post("http://localhost:5000/email", {
        email: values.email,
      });
      console.log(result);
      if (result.data.success) {
        console.log(result);
        setShow(!show);
        setCode(result.data.code);
      } else throw Error;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
      setMessage("");
      setFirstName("");
      setLastName("");
    };
  }, []);

  // =================================================================
  const onFinish = (values) => {
    console.log(values);
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login_container">
      {show && (
        <Confirm
          addNewUser={addNewUser}
          email={email}
          show={show}
          setShow={setShow}
          code={code}
        />
      )}
      <div>
        <h2>Register:</h2>
      </div>
      <Form name="normal_login" className="login-form" onFinish={confirmEmail}>
        {" "}
        {/* ----------------------- */}
        <Form.Item
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your Firstname!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="First name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Item>{" "}
        <Form.Item
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your Last name!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Lastname"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Item>
        {/* -------------------------- */}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
    // <div className="form_container">
    //   {show && (
    //     <Confirm
    //       addNewUser={addNewUser}
    //       email={email}
    //       show={show}
    //       setShow={setShow}
    //       code={code}
    //     />
    //   )}
    //   <h2 className="Title">Register:</h2>
    //   <form onSubmit={confirmEmail}>
    //     <input
    //       required
    //       type="text"
    //       placeholder="First name"
    //       onChange={(e) => setFirstName(e.target.value)}
    //     />
    //     <input
    //       required
    //       type="text"
    //       placeholder="Last name"
    //       onChange={(e) => setLastName(e.target.value)}
    //     />
    //     <input
    //       required
    //       type="email"
    //       placeholder="Email"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <input
    //       required
    //       type="password"
    //       placeholder="Password"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />

    //     <button>Create Account</button>
    //   </form>
    //   {status
    //     ? message && <div className="SuccessMessage">{message}</div>
    //     : message && <div className="ErrorMessage">{message}</div>}
    // </div>
  );
};

export default Register;
