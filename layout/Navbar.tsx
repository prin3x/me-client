import { Col, Dropdown, Menu, Row } from "antd";
import React, { ReactElement, useContext, useEffect } from "react";
import { Image } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";

function Navbar(): ReactElement {
  const { userInfo,signOut,getUser } = useContext(UserContext);
  const router = useRouter();

  function signOutAndReturnToLogin() {
    signOut()
    router.push('/log-in')
  }


  useEffect(() => {
    getUser();
  }, []);

  const Personal = (
    <Menu className="bg-primary-color text-white">
      <Menu.Item>
        <Link href={"/staff-contact"}>
          <a className="cursor-pointer">
            <div className="text-white hover:text-black nav-item">Staff Contact</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/calendar"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Calendar</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/birthdays"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Birthday</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/holidays"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Holiday</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">TA Online</div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const Services = (
    <Menu className="bg-primary-color text-white">
      <Menu.Item className="text-white">
        <Link href={"/booking"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Meeting Room</div>
          </a>
        </Link>
      </Menu.Item>
      {/* <Menu.Item>
        <Link href={'/'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Request Service</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Repair Service</div>
          </a>
        </Link>
      </Menu.Item> */}
      <Menu.Item>
        <Link href={"/form-request"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Form / Flow</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/form-request"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Job Request</div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const News = (
    <Menu className="bg-primary-color text-white">
      <Menu.Item className="text-white">
        <Link href={"/announcement"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Announcement</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/itclinic"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">IT Clinic</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/activity"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Activities</div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const CompanyProfile = (
    <Menu className="bg-primary-color text-white">
      <Menu.Item className="text-white">
        <Link href={"/company-profile"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Profile</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/company-policy"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Policy</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/company-benefits"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Benefit</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/privacy-policy"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Privacy Policy</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={"/company-contact"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Contact</div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Row justify="end" align="middle">
        <Col lg={4} md={4}>
          <Link href={"/"} passHref>
            <div className="flex h-100 items-center cursor-pointer">
              <Image
                src="/assets/logo-m.svg"
                preview={false}
                width={125}
                className="p-3 cursor-pointer"
                alt="logo"
              />
            </div>
          </Link>
        </Col>
        <Col lg={18} md={18}>
          <div className="navbar bg-primary-color flex items-center px-10 h-full rounded-tl-full rounded-br-full">
            <ul className="navbar-ul flex items-center gap-5 mb-0 ">
              <Dropdown overlay={Personal}>
                <li className="text-white uppercase flex items-center gap-2">
                  personal <DownOutlined />
                </li>
              </Dropdown>
              <Dropdown overlay={Services}>
                <li className="text-white uppercase flex items-center gap-2">
                  service <DownOutlined />
                </li>
              </Dropdown>
              <Dropdown overlay={News}>
                <li className="text-white uppercase flex items-center gap-2">
                  news <DownOutlined />
                </li>
              </Dropdown>
              <Dropdown overlay={CompanyProfile}>
                <li className="text-white uppercase flex items-center gap-2">
                  company <DownOutlined />
                </li>
              </Dropdown>
              <li className="text-white uppercase flex items-center gap-3">
                <Avatar
                  shape="circle"
                  style={{ backgroundColor: "orange" }}
                  size={32}
                  src={
                    userInfo?.profilePicUrl
                      ? userInfo?.profilePicUrl
                      : undefined
                  }
                />
                <div
                  className="text-white"
                  style={{ marginLeft: 10, cursor: "pointer" }}
                  onClick={signOutAndReturnToLogin}
                >
                  Log Out
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
