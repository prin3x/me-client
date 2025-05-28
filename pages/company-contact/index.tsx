import React, { ReactElement } from "react";
import { Button, Col, Divider, Image, Row } from "antd";
import LayoutHOC from "../../layout/LayoutHOC";
import PrivacyPolicyHero from "../../components/privacy-policy/PrivacyPolicyHero";
import CompanyContactHero from "../../components/company-contact/CompanyContactHero";
import Link from "next/link";
import { imagePlaceholder } from "../../utils/placeholder.image";

interface Props {}

function CompanyContactPage({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <CompanyContactHero />
        <Row className="container mx-auto text-primary-color">
          <Col span={24}>
            <Row justify="center" align="middle" className="pt-10">
              <Col lg={8} md={16}>
                <Image
                  preview={false}
                  src="/assets/me-logo.svg"
                  alt="mindedgelogo"
                  width={250}
                />
              </Col>
              <Col lg={8} md={16}>
                <div className="flex flex-col">
                  <h3 className="text-primary-color font-bold text-xl">
                    บริษัท มายด์เอจ อินโนเวชั่น จำกัด
                  </h3>
                  <div className="text-lg">ลขที่ 111 ถนน ประเสริฐมนูกิจ</div>
                  <div className="text-lg">
                    แขวง คลองกุ่ม เขต บึงกุ่ม กรุงเทพฯ 10240
                  </div>
                  <div className="text-lg">
                    โทร. 02-374-4484 , 02-374-4489 (Payment & Account){" "}
                  </div>
                  <div className="text-lg">
                    เลขประจำตัวผู้เสียภาษี : 01355 55014 758
                  </div>
                </div>
                <Row
                  justify="start"
                  align="middle"
                  gutter={25}
                  className="mt-4"
                >
                  <Col>
                    <Image
                      fallback={imagePlaceholder}
                      src="/assets/map.svg"
                      width={25}
                      preview={false}
                      alt="map"
                    />
                  </Col>
                  <Col>
                    <Link href={`/company-contact/mi`} passHref>
                      <Button
                        size="large"
                        type="primary"
                        style={{ borderRadius: "18px" }}
                      >
                        ภาพแผนที่
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <a
                      href="https://www.google.com/maps?q=mindedge+innovation&rlz=1C5CHFA_enTH990TH991&sxsrf=APq-WBs81-MILaSH6YbjtyBEm56ubxuDLw:1645846379722&gs_lcp=Cgdnd3Mtd2l6EAMYADILCC4QxwEQrwEQywEyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yAggmOgQIABBHOgcIABBHELADOgcIABCwAxBDOgoIABCxAxCDARBDOgQIABBDOgsILhCxAxDHARCjAjoICAAQsQMQgwE6CAguELEDEIMBOggIABCABBCxAzoLCAAQgAQQsQMQgwE6BQguEIAEOgQIIxAnOgUIABCRAjoHCAAQsQMQQzoLCC4QgAQQxwEQ0QM6CAguEIAEELEDOhEILhCABBCxAxDHARCjAhDUAjoHCC4QsQMQQzoOCC4QgAQQsQMQxwEQowI6DgguEIAEELEDEIMBENQCOggILhCABBDUAjoFCAAQywFKBAhBGABKBAhGGABQ3PaQAViSi5EBYKqWkQFoBHACeACAAWqIAc0HkgEDOS4ymAEAoAEByAEKwAEB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjHlp-1wJz2AhWATWwGHeukAjQQ_AUoA3oECAIQBQ"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider style={{ borderColor: "#0F52BA" }} />
            <Row justify="center" align="middle" className="pt-10">
              <Col lg={8} md={16}>
                <Image
                  fallback={imagePlaceholder}
                  preview={false}
                  src="/assets/mr-logo.png"
                  alt="mindedgelogo"
                  width={250}
                />
              </Col>
              <Col lg={8} md={16}>
                <div className="flex flex-col">
                  <h3 className="text-primary-color font-bold text-xl">
                    บริษัท จัดหางาน มายด์เอจ จำกัด
                  </h3>
                  <div className="text-lg">เลขที่ 111 ถนน ประเสริฐมนูกิจ</div>
                  <div className="text-lg">
                    แขวง คลองกุ่ม เขต บึงกุ่ม กรุงเทพฯ 10240
                  </div>
                  <div className="text-lg">
                    โทร. 02-374-4484 , 02-374-4489 (Payment & Account)
                  </div>
                  <div className="text-lg">
                    เลขประจำตัวผู้เสียภาษี : 01355 54007 286
                  </div>
                </div>
                <Row
                  justify="start"
                  align="middle"
                  gutter={25}
                  className="mt-4"
                >
                  <Col>
                    <Image
                      fallback={imagePlaceholder}
                      src="/assets/map.svg"
                      width={25}
                      preview={false}
                      alt="map"
                    />
                  </Col>
                  <Col>
                    <Link href={`/company-contact/me`} passHref>
                      <Button
                        size="large"
                        type="primary"
                        style={{ borderRadius: "18px" }}
                      >
                        ภาพแผนที่
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <a
                      href="https://www.google.com/maps?q=mindedge+innovation&rlz=1C5CHFA_enTH990TH991&sxsrf=APq-WBs81-MILaSH6YbjtyBEm56ubxuDLw:1645846379722&gs_lcp=Cgdnd3Mtd2l6EAMYADILCC4QxwEQrwEQywEyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yAggmOgQIABBHOgcIABBHELADOgcIABCwAxBDOgoIABCxAxCDARBDOgQIABBDOgsILhCxAxDHARCjAjoICAAQsQMQgwE6CAguELEDEIMBOggIABCABBCxAzoLCAAQgAQQsQMQgwE6BQguEIAEOgQIIxAnOgUIABCRAjoHCAAQsQMQQzoLCC4QgAQQxwEQ0QM6CAguEIAEELEDOhEILhCABBCxAxDHARCjAhDUAjoHCC4QsQMQQzoOCC4QgAQQsQMQxwEQowI6DgguEIAEELEDEIMBENQCOggILhCABBDUAjoFCAAQywFKBAhBGABKBAhGGABQ3PaQAViSi5EBYKqWkQFoBHACeACAAWqIAc0HkgEDOS4ymAEAoAEByAEKwAEB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjHlp-1wJz2AhWATWwGHeukAjQQ_AUoA3oECAIQBQ"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Divider style={{ borderColor: "#0F52BA" }} />
            <Row justify="center" align="middle" className="pt-10">
              <Col lg={8} md={16}>
                <Image
                  fallback={imagePlaceholder}
                  preview={false}
                  src="/assets/meu-logo.png"
                  alt="mindedgelogo"
                  width={200}
                />
              </Col>
              <Col lg={8} md={16}>
                <div className="flex flex-col">
                  <h3 className="text-primary-color font-bold text-xl">
                    บริษัท มี แอนด์ ยู เอ็นเตอร์เทนเมนท์ จำกัด
                  </h3>
                  <div className="text-lg">เลขที่ 111 ถนน ประเสริฐมนูกิจ</div>
                  <div className="text-lg">
                    แขวง คลองกุ่ม เขต บึงกุ่ม กรุงเทพฯ 10240{" "}
                  </div>
                  <div className="text-lg">
                    โทร. 02-374-4484 , 02-374-4489 (Payment & Account)
                  </div>
                  <div className="text-lg">
                    เลขประจำตัวผู้เสียภาษี : 01055 63093 882
                  </div>
                </div>
                <Row
                  justify="start"
                  align="middle"
                  gutter={25}
                  className="mt-4"
                >
                  <Col>
                    <Image
                      fallback={imagePlaceholder}
                      src="/assets/map.svg"
                      width={25}
                      preview={false}
                      alt="map"
                    />
                  </Col>
                  <Col>
                    <Link href={`/company-contact/my`} passHref>
                      <Button
                        size="large"
                        type="primary"
                        style={{ borderRadius: "18px" }}
                      >
                        ภาพแผนที่
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <a
                      href="https://www.google.com/maps?q=mindedge+innovation&rlz=1C5CHFA_enTH990TH991&sxsrf=APq-WBs81-MILaSH6YbjtyBEm56ubxuDLw:1645846379722&gs_lcp=Cgdnd3Mtd2l6EAMYADILCC4QxwEQrwEQywEyBQgAEIAEMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yAggmOgQIABBHOgcIABBHELADOgcIABCwAxBDOgoIABCxAxCDARBDOgQIABBDOgsILhCxAxDHARCjAjoICAAQsQMQgwE6CAguELEDEIMBOggIABCABBCxAzoLCAAQgAQQsQMQgwE6BQguEIAEOgQIIxAnOgUIABCRAjoHCAAQsQMQQzoLCC4QgAQQxwEQ0QM6CAguEIAEELEDOhEILhCABBCxAxDHARCjAhDUAjoHCC4QsQMQQzoOCC4QgAQQsQMQxwEQowI6DgguEIAEELEDEIMBENQCOggILhCABBDUAjoFCAAQywFKBAhBGABKBAhGGABQ3PaQAViSi5EBYKqWkQFoBHACeACAAWqIAc0HkgEDOS4ymAEAoAEByAEKwAEB&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjHlp-1wJz2AhWATWwGHeukAjQQ_AUoA3oECAIQBQ"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default CompanyContactPage;
