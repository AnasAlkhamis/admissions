import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import Confirm from "../confirmation/index";
// ========================

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  // =================================================================

  const addNewUser = async () => {
    try {
      const result = await axios.post("http://localhost:5000/register", {
        firstName,
        lastName,
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
  const confirmEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/email", {
        email,
      });

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

  return (
    <div className="form_container">
      {show && (
        <Confirm
          addNewUser={addNewUser}
          email={email}
          show={show}
          setShow={setShow}
          code={code}
        />
      )}
      <h2 className="Title">Register:</h2>
      <form onSubmit={confirmEmail}>
        <input
          required
          type="text"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          required
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Create Account</button>
      </form>
      {status
        ? message && <div className="SuccessMessage">{message}</div>
        : message && <div className="ErrorMessage">{message}</div>}
    </div>
  );
};

export default Register;
