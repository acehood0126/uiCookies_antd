import { useState } from "react";
import { Button, Col, Input, Row, Typography, Checkbox } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "antd/dist/reset.css";

import signUpImg from "./assets/signup-image.png";
const { Title } = Typography;

function App() {
  return (
    <Row justify={"center"} style={{ width: "100%", height: "100vh" }}>
      <Col
        lg={"12"}
        md={"24"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "end",
          padding: "50px 80px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <Title style={{ fontWeight: "800" }}> Sign Up </Title>
          <Input
            size="large"
            placeholder="Your Name"
            prefix={<FontAwesomeIcon icon={faUser} />}
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderColor: "black",
              borderRadius: "0px",
            }}
          />
          <Input
            size="large"
            placeholder="Your Email"
            prefix={<FontAwesomeIcon icon={faEnvelope} />}
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderColor: "black",
              borderRadius: "0px",
            }}
          />
          <Input
            size="large"
            placeholder="Password"
            prefix={<FontAwesomeIcon icon={faLock} />}
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderColor: "black",
              borderRadius: "0px",
            }}
          />
          <Input
            size="large"
            placeholder="Repeat your password"
            prefix={<FontAwesomeIcon icon={faLock} />}
            style={{
              borderWidth: "0px 0px 1px 0px",
              borderColor: "black",
              borderRadius: "0px",
            }}
          />
          <Checkbox>
            I agree all statements in{" "}
            <span style={{ textDecoration: "underline" }}>
              Terms of service
            </span>
          </Checkbox>
          <Button type="primary" style={{ width: "120px", height: "50px" }}>
            Register
          </Button>
        </div>
      </Col>
      <Col
        lg={"12"}
        md={"24"}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: "30px 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "80px",
          }}
        >
          <img src={signUpImg} alt="" />
          <p style={{ textDecoration: "underline", fontWeight: "500" }}>
            I am already member
          </p>
        </div>
      </Col>
    </Row>
  );
}

export default App;
