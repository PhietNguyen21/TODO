import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Headers from "./Layout/Headers";
import Footers from "./Layout/Footers";
const HomeTemplate = () => {
  return (
    <Layout>
      <Headers />
      <Layout.Content>
        <Outlet />
      </Layout.Content>
      <Footers />
    </Layout>
  );
};

export default HomeTemplate;
