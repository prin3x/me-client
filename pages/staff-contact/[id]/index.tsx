import { Col, Row, Image } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ASSET_URL } from "../../../config";
import LayoutHOC from "../../../layout/LayoutHOC";
import { IContact } from "../../../services/contact/contact.model";
import { SINGLE_CONTACT } from "../../../services/contact/contact.queryKey";
import { _getOneStaff } from "../../../services/contact/contact.service";
import { imagePlaceholder } from "../../../utils/placeholder.image";

interface Props {}

const INIT_CONTACT = {
  id: 0,
  profilePicUrl: "",
  name: "",
  nickname: "",
  company: "",
  department: "",
  division: "",
  section: "",
  ipPhone: "",
  email: "",
  position: "",
  staffId: "",
  status: "",
  birthDate: "",
  nameTH: "",
  createdBy: 0,
  createdDate: "",
  updatedDate: "",
};

function SingleCantactPage({}: Props): ReactElement {
  const router = useRouter();
  const staffContactMeta = useQuery([SINGLE_CONTACT, router.query.id], () =>
    _getOneStaff(router.query.id as "")
  );
  const [contactData, setContactData] = useState<IContact>(INIT_CONTACT);

  useEffect(() => {
    if (staffContactMeta.isSuccess) {
      setContactData(staffContactMeta.data);
    }
  }, [staffContactMeta.data]);

  return (
    <LayoutHOC>
      <div>
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Image
              fallback={imagePlaceholder}
              src="/assets/staff-contact.svg"
              preview={false}
              alt="staff-contact"
            />
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Col span={12}>
            <Row justify="center">
              <Image
                src={contactData?.profilePicUrl}
                preview={false}
                alt="staff-contact"
                fallback={imagePlaceholder}
                height={450}
                width={450}
              />
            </Row>
          </Col>
          <Col span={12}>
            <Row justify="start" gutter={[0,0]}>
              <Col className="flex w-full">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Name
                </div>
                <div className="">{contactData.name}</div>
              </Col>
              <Col className="flex w-full">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Name(TH)
                </div>
                <div className="">{contactData.nameTH}</div>
              </Col>
              <Col className="flex w-full">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Nickname
                </div>
                <div className="">{contactData.nickname}</div>
              </Col>
              <Col className="flex w-full mt-4">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Email
                </div>
                <div className="">{contactData.email}</div>
              </Col>
              <Col className="flex w-full">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  IP Phone
                </div>
                <div className="">{contactData.ipPhone}</div>
              </Col>
              <Col className="flex w-full mt-4">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Staff ID
                </div>
                <div className="">{contactData.staffId}</div>
              </Col>
              <Col className="flex w-full">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Company
                </div>
                <div className="">Mind Edge Recruitment</div>
              </Col>
              <Col className="flex w-full">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Department
                </div>
                <div className="">{contactData.department}</div>
              </Col>
              <Col className="flex w-full">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Division
                </div>
                <div className="">{contactData.section}</div>
              </Col>
              <Col className="flex w-full">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Position
                </div>
                <div className="">{contactData.position}</div>
              </Col>
              <Col className="flex w-full mt-4">
                <div className="label min-width-full w-36 text-primary-color font-bold">
                  Birthday
                </div>
                <div className="">{moment(contactData.birthDate).format('DD MMM')}</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default SingleCantactPage;
