import React, { ReactElement } from "react";
import { Button, Col, Image, Row } from "antd";
import LayoutHOC from "../../layout/LayoutHOC";
import CompanyBenefitHero from "../../components/company-benefit/CompanyBenefitHero";
import CompanyBenefitsList from "../../components/company-benefit/CompanyBenefitsList";

interface Props {}

function CompanyBenefits({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <CompanyBenefitHero />
        <CompanyBenefitsList />
      </div>
    </LayoutHOC>
  );
}

export default CompanyBenefits;
