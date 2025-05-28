import { LoadingOutlined } from "@ant-design/icons";
import { Col, Image, Row, Spin } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
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

  if (staffContactMeta.isLoading)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
      </div>
    );

  return (
    <LayoutHOC>
      <div>
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Image
              fallback={imagePlaceholder}
              src="/assets/staff-hero.png"
              preview={false}
              alt="staff-contact"
            />
          </Col>
        </Row>
        <Row className="container mx-auto pt-12">
          <Col span={12}>
            <Row justify="center">
              <Image
                src={contactData?.profilePicUrl}
                preview={false}
                alt="staff-contact"
                fallback={imagePlaceholder}
                height={375}
                width={375}
              />
            </Row>
          </Col>
          <Col span={12}>
            <Row justify="start" gutter={[0, 0]}>
              <Col
                lg={6}
                className="label min-width-full w-36 text-primary-color font-bold text-lg"
              >
                Name
              </Col>
              <Col lg={18} className="text-lg">
                {contactData.name}
              </Col>
              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold"
              >
                Name(TH)
              </Col>
              <Col lg={18} className="text-lg">
                {contactData.nameTH}
              </Col>

              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold"
              >
                Nickname
              </Col>
              <Col lg={18} className="text-lg">
                {contactData.nickname}
              </Col>

              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold mt-6"
              >
                Email
              </Col>
              <Col lg={18} className="text-lg mt-6">
                {contactData.email}
              </Col>

              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold "
              >
                IP Phone
              </Col>
              <Col lg={18} className="text-lg">
                {contactData.ipPhone}
              </Col>

              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold mt-6"
              >
                Staff ID
              </Col>
              <Col lg={18} className="text-lg mt-6">
                {contactData.staffId}
              </Col>

              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold"
              >
                Company
              </Col>
              <Col lg={18} className="text-lg">
                {contactData.company}
              </Col>

              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold"
              >
                Department
              </Col>
              <Col lg={18} className="text-lg">
                {contactData.department}
              </Col>

              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold"
              >
                Division
              </Col>
              <Col lg={18} className="text-lg">
                {contactData.division}
              </Col>

              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold"
              >
                Position
              </Col>
              <Col lg={18} className="text-lg">
                {contactData.position}
              </Col>

              <Col
                lg={6}
                className="label text-lg min-width-full w-36 text-primary-color font-bold  mt-6"
              >
                Birthday
              </Col>
              <Col lg={18} className="text-lg   mt-6">
                {moment(contactData.birthDate).format("DD MMM")}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default SingleCantactPage;
