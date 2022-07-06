import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
// ========================

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  // ================================
  const login = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (result.data.success) {
        setStatus(true);
        setMessage("The user has been created successfully");
      } else throw Error;
    } catch (error) {
      setStatus(false);
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while register, please try again");
    }
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  // ==========================================

  return (
    <div className="form_container">
      <h2 className="Title">login:</h2>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <Link to={"/register"}>create new account</Link>
      {status
        ? message && <div className="SuccessMessage">{message}</div>
        : message && <div className="ErrorMessage">{message}</div>}

  
    </div>
  );
};

export default Login;
