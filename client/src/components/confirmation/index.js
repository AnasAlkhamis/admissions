import React, { useState } from "react";
import "./style.css";
const Confirm = ({ show, setShow, email, addNewUser, code }) => {
  const [verifyCode, setVerifyCode] = useState("");
  const handleSubmit = () => {
    if (code === verifyCode) {
      addNewUser();
      setShow(!show);
    }
  };
  return (
    <>
      <div className="popup_box">
        <div className="poup_form">
          <h3>confirm your code sended to your email: {email} </h3>
          <div className="but_box">
            <div className="inputs">
              <input
                required
                type="text"
                maxLength="6"
                onChange={(e) => {
                  setVerifyCode(e.target.value);
                }}
              />
            </div>

            <button onClick={handleSubmit} className="cancel">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
