import { Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Footers = () => {
  const { lstTask } = useSelector((state) => state.TaskReducer);
  const arrComplete = lstTask.filter((item) => item.completed);
  return (
    <Layout.Footer>
      {arrComplete.length}/{lstTask.length} Done Tasks
    </Layout.Footer>
  );
};

export default Footers;
