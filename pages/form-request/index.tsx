import React, { ReactElement } from "react";
import FormRequestFetcher from "../../components/form-request/FormRequestFetcher";
import FormRequestHero from "../../components/form-request/FormRequestHero";
import LayoutHOC from "../../layout/LayoutHOC";
import { _getFormRequestContent } from "../../services/formsRequest/forms-request.service";

interface Props {}

function FormRequest({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <>
        <FormRequestHero />
        <FormRequestFetcher />
      </>
    </LayoutHOC>
  );
}

export default FormRequest;
