// import { InboxOutlined, UploadOutlined } from "icons";
// hearAUs,
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Date from "../date/index";
import { Button, Form, Radio, Rate, Select, Upload, Input } from "antd";
import React from "react";
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e?.fileList;
};

const Dashbord = () => {
  const [cuntries, setCuntries] = useState([]);
  const [key, setKey] = useState([]);
  const [flag, setFlag] = useState("");
  const getAllcuntries = async () => {
    const axiosrequest1 = axios.get(
      "https://restcountries.com/v3.1/lang/arabic"
    );

    const axiosrequest2 = axios.get("https://restcountries.com/v3.1/all");
    await axios
      .all([axiosrequest1, axiosrequest2])
      .then(
        axios.spread((res1, res2) => {
          setCuntries(res1.data);
          console.log(res1, res2);
          setKey(res2.data);
        })
      )
      .catch((error) => {});
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        onChange={(e) => {
          setFlag(e);
          console.log(e);
        }}
        style={{
          width: 100,
        }}
      >
        {key &&
          key.map((ele, index) => {
            return (
              <Option
                key={index}
                value={ele.idd.root + (ele.idd.suffixes && ele.idd.suffixes[0])}
              >
                <img src={ele.flags.png} className="flags" />
                {ele.idd.root + (ele.idd.suffixes && ele.idd.suffixes[0])}
              </Option>
            );
          })}
      </Select>
    </Form.Item>
  );
  useEffect(() => {
    getAllcuntries();
  }, []);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="form_box">
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          "input-number": 3,
          "checkbox-group": ["A", "B"],
          rate: 3.5,
        }}
      >
        <Form.Item label="join cohort ">
          <span className="ant-form-text">6</span>
        </Form.Item>
        <Form.Item
          name="select"
          label="Nationality"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your country!",
            },
          ]}
        >
          <Select placeholder="Please select a country">
            {cuntries &&
              cuntries.map((ele, index) => {
                return (
                  <Option key={index} value={ele.name.common}>
                    <img src={ele.flags.png} className="flags" />
                    {ele.name.common}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input
            addonBefore={prefixSelector}
            style={{
              width: "300px",
            }}
          />
        </Form.Item>
        <Date formItemLayout={formItemLayout} />
        <Form.Item name="radio-group" label="Spare time">
          <Radio.Group>
            <Radio value="09:00 AM - 01:00 PM">09:00 AM - 01:00 PM</Radio>
            <Radio value="07:00 PM - 11:00 PM">07:00 PM - 11:00 PM</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="rate" label="Rate">
          <Rate />
        </Form.Item>
        <Form.Item
          name="About MERAKI"
          label=" what do you know About Us"
          rules={[
            {
              message: "Please input Intro",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item
          name="fullName"
          label="Full Name"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Educational"
          label="Educational"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="scientificSpecialization"
          label="Scientific Specialization"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Image">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">{/* <InboxOutlined /> */}</p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
        </Form.Item>
        <Form.Item
          name="Address"
          label="Address"
          // tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="About"
          label="Tell us about you"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
              message: "Please select gender!",
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="Select"
          label="Select"
          rules={[
            {
              required: true,
              message: "Please select one of the  options!",
            },
          ]}
        >
          <Select placeholder="wher did you hear about us">
            <Option value="Facebook">Facebook</Option>
            <Option value="Linkedin">Linkedin</Option>
            <Option value="Twitter">Twitter</Option>
            <Option value="instgram">instgram</Option>
            <Option value="Frindes">Frindes</Option>
            <Option value="Others">Others</Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 16,
            offset: 4,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Dashbord;
