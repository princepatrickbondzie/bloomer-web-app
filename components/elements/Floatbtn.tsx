import React from "react";
import { FloatButton } from "antd";
import {
  QuestionCircleOutlined,
  SyncOutlined,
  CustomerServiceOutlined,
  CommentOutlined,
} from "@ant-design/icons";

export default function Floatbtn() {
  return (
    <FloatButton.Group
      //   shape="square"
      trigger="click"
      type="primary"
      style={{ right: 24 }}
      icon={<QuestionCircleOutlined />}
    >
      <FloatButton icon={<CommentOutlined />} />
      <FloatButton />
      <FloatButton icon={<SyncOutlined />} />
      <FloatButton.BackTop visibilityHeight={0} />
    </FloatButton.Group>
  );
}
