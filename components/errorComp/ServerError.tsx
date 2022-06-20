import { Result } from "antd";
import React from "react";

type Props = {};

function ServerError({}: Props) {
  return (
    <Result
      status="error"
      title="Server Error"
      subTitle="Sorry, something went wrong."
    />
  );
}

export default ServerError;
