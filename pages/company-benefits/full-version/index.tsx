import React from "react";
import CompanyBenefitHero from "../../../components/company-benefit/CompanyBenefitHero";
import CompanyBenefitsList from "../../../components/company-benefit/CompanyBenefitsList";
import LayoutHOC from "../../../layout/LayoutHOC";

type Props = {};

function BenefitFullVersion({}: Props) {
  return (
    <LayoutHOC>
      <div>
        <CompanyBenefitHero />
        <CompanyBenefitsList />
      </div>
    </LayoutHOC>
  );
}

export default BenefitFullVersion;
