import { LoadingOutlined } from "@ant-design/icons";
import { message, Spin } from "antd";
import React from "react";
import { useQuery } from "react-query";
import { IFormsRequest } from "../../services/formsRequest/forms-request.model";
import { FORMS_REQUEST } from "../../services/formsRequest/forms-request.queryKey";
import { _getFormRequestContent } from "../../services/formsRequest/forms-request.service";
import ServerError from "../errorComp/ServerError";
import FormRequestList from "./FormRequestList";

type Props = {};

function FormRequestFetcher({}: Props) {
  const { data, isLoading, isSuccess, isError } = useQuery(
    [FORMS_REQUEST],
    () => getContactServiceList()
  );

  async function getContactServiceList() {
    let res: IFormsRequest[] = [];
    try {
      res = await _getFormRequestContent();
    } catch (e) {
      message.error(e.error);
    }

    return res;
  }

  if (isLoading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
      </div>
    );

  if (isSuccess) return <FormRequestList data={data} />;

  if (isError) return <ServerError/>;
}

export default FormRequestFetcher;
