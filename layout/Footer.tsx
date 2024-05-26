import { Col, Row, Image } from "antd";
import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <div style={{marginTop: "3.5rem"}} className="footer bg-primary-color p-5 px-10 rounded-md">
      <Row className="main-container mx-auto pt-5" justify="space-between">
        <Col>
          <ul className="text-white">
            <li className="footer-header text-xl font-bold uppercase cursor-pointer">
              personal
            </li>
            <Link href={"/staff-contact"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Staff Contact</li>
            </Link>
            <Link href={"/calendar"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Calendar</li>
            </Link>
            <Link href={"/birthdays"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Birthday</li>
            </Link>
            <Link href={"/holidays"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Holiday</li>
            </Link>
            <li className="footer-nav-item text-lg cursor-pointer">TA Online</li>
          </ul>
        </Col>
        <Col>
          <ul className="text-white">
            <li className="footer-header text-xl font-bold uppercase mb-2">service</li>
            <Link href={"/booking"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Meeting Room</li>
            </Link>
            {/* <Link href={'/'} passHref>
              <li className='footer-nav-item text-lg cursor-pointer'>Request Service</li>
            </Link>
            <li className='footer-nav-item text-lg cursor-pointer'>Repair Service</li> */}
            <Link href={"/form-request"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">
                Forms / Flow / Job Request
              </li>
            </Link>
          </ul>
        </Col>
        <Col>
          <ul className="text-white">
            <li className="footer-header text-xl font-bold uppercase mb-2">News</li>
            <Link href={"/announcement"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Announcements</li>
            </Link>
            <Link href={"/lifestyle"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Lifestyle</li>
            </Link>
            <Link href={"/activity"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Activities</li>
            </Link>
          </ul>
        </Col>
        <Col>
          <ul className="text-white">
            <li className="footer-header text-xl font-bold uppercase mb-2">company</li>
            <Link href={"/company-profile"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Profile</li>
            </Link>
            <Link href={"/company-policy"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Policy</li>
            </Link>
            <Link href={"/company-benefits"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Benefit</li>
            </Link>
            <Link href={"/privacy-policy"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Privacy Policy</li>
            </Link>
            <Link href={"/company-contact"} passHref>
              <li className="footer-nav-item text-lg cursor-pointer">Contact</li>
            </Link>
          </ul>
        </Col>
      </Row>
      <img src="/assets/footer-cloud.svg" className="footer-cloud" />
    </div>
  );
}

export default Footer;
