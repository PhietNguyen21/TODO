import React, { useState } from "react";
import { Layout } from "antd";
import "./Headers.css";
import { useNavigate } from "react-router-dom";
const Headers = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const data = [
    {
      labels: (
        <span
          onClick={() => {
            navigate("/");
          }}
        >
          Test
        </span>
      ),
    },
    {
      labels: (
        <span
          onClick={() => {
            navigate("/todo");
          }}
        >
          Todo
        </span>
      ),
    },
  ];
  return (
    <Layout.Header style={{ backgroundColor: "white" }}>
      <div style={{ display: "flex" }}>
        <img style={{ width: 75, height: 75 }} src="./logoSVG.svg" alt="logo" />
        {data.map((item, index) => {
          return (
            <div
              onClick={() => {
                setActive(index);
              }}
              className={active === index ? "active" : ""}
              style={{ margin: "0 15px", cursor: "pointer" }}
            >
              {item.labels}
            </div>
          );
        })}
      </div>
    </Layout.Header>
  );
};

export default Headers;
