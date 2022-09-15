import React, { ReactElement } from "react";
import { Button, Col, Image, Row } from "antd";
import LayoutHOC from "../../layout/LayoutHOC";
import CompanyBenefitHero from "../../components/company-benefit/CompanyBenefitHero";
import CompanyBenefitsList from "../../components/company-benefit/CompanyBenefitsList";
import Link from "next/link";

interface Props {}

function CompanyBenefits({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <CompanyBenefitHero />
        <Row className="container mx-auto rounded-xl pt-5 mt-10 border-[3px] border-primary ">
          <Col span={24}>
            <Row>
              <Image
                src="/assets/Company_Benefit.png"
                alt="Company_Benefit"
                preview={false}
              />
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col span={24}>
            <Row justify="center">
              <Link href="/company-benefits/full-version" passHref>
                <Button
                  size="middle"
                  type="primary"
                  style={{
                    borderRadius: "36px",
                    width: "14rem",
                    lineHeight: 1.5,
                    fontWeight: "bold",
                    height: "2.5rem",
                  }}
                >
                  ฉบับเต็มคลิกที่นี่
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default CompanyBenefits;
