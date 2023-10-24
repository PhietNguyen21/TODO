import { Button, Divider, List, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUserActions } from "../../redux/actions/ManagerUserAction/ManagerUserAction";
import { getListTaskAction } from "../../redux/actions/ManagerTaskAction/ManagerTaskAction";

import InfiniteScroll from "react-infinite-scroll-component";
import {
  MinusSquareOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { DONE_TASK } from "../../redux/actions/types/types";
const Todo = () => {
  const { lstUser } = useSelector((state) => state.UserReducer);
  const { lstTask } = useSelector((state) => state.TaskReducer);
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListUserActions());
  }, []);
  const onChange = async (value) => {
    setLoading(true);
    await dispatch(getListTaskAction(value));
    setTimeout(() => {
      setLoading(false);
    }, [1000]);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const customArrUser = () => {
    return lstUser?.map((item, index) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
  };

  const arrSort = [...lstTask].sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    } else {
      return -1;
    }
  });
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <div style={{ padding: "0 30px" }}>
      <Divider orientation="left" orientationMargin={50}>
        User
      </Divider>

      <div style={{ margin: "0 30px" }}>
        <Select
          style={{ width: 160 }}
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          options={customArrUser()}
        />
      </div>
      <Divider orientation="left" orientationMargin={50}>
        Task
      </Divider>
      <div style={{ margin: "10px 30px" }}>
        <div
          id="scrollableDiv"
          style={{
            height: 400,
            overflow: "auto",
            padding: "0 16px",
            border: "1px solid rgba(140, 140, 140, 0.35)",
          }}
        >
          <InfiniteScroll dataLength={lstTask?.length}>
            <List
              loading={loading}
              dataSource={loading ? [] : arrSort}
              renderItem={(item) => (
                <List.Item key={item}>
                  <List.Item.Meta
                    title={
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {!item.completed ? (
                          <span>
                            <MinusSquareOutlined
                              style={{ color: "gold", marginRight: "10px" }}
                            />
                          </span>
                        ) : (
                          <CheckCircleOutlined
                            style={{ color: "green", marginRight: "10px" }}
                          />
                        )}

                        {item.title}
                      </div>
                    }
                  />
                  {!item.completed ? (
                    <Button
                      loading={loadingBtn === item.id}
                      size="small"
                      onClick={() => {
                        setLoadingBtn(item.id);
                        setTimeout(async () => {
                          await dispatch({
                            type: DONE_TASK,
                            taskId: item.id,
                          });
                          setLoadingBtn(null);
                        }, [1200]);
                      }}
                    >
                      Mark done
                    </Button>
                  ) : (
                    <div style={{ cursor: "pointer" }}>
                      <DeleteOutlined style={{ color: "red" }} />
                    </div>
                  )}
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Todo;
