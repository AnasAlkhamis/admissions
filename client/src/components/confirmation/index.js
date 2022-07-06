import React, { useState } from "react";
import "./style.css";
import { TiInputChecked } from "react-icons/ti";
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
          <TiInputChecked className="icon" />
          <div className="but_box">
            <form className="inputs" onSubmit={handleSubmit}>
              <input
                pattern=".{6}"
                maxLength="6"
                required
                type="text"
                title="6 characters"
                // value="P8"
                onChange={(e) => {
                  setVerifyCode(e.target.value);
                }}
              />
              <button className="confirm">Confirm</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
