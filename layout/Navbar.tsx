import { Col, Dropdown, Menu, Row } from "antd";
import React, { ReactElement, useContext, useEffect } from "react";
import { Image } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import Link from "next/link";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/router";
import { nanoid } from "nanoid";

function Navbar(): ReactElement {
  const { userInfo, signOut, getUser } = useContext(UserContext);
  const router = useRouter();

  function signOutAndReturnToLogin() {
    signOut();
    router.push("/log-in");
  }

  useEffect(() => {
    getUser();
  }, []);

  const Personal = (
    <Menu className="bg-primary-color text-white">
      <Menu.Item key={nanoid(5)}>
        <Link href={"/staff-contact"}>
          <a className="cursor-pointer">
            <div className="text-white hover:text-black nav-item">
              Staff Contact
            </div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/calendar"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Calendar</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/birthdays"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Birthday</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/holidays"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Holiday</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        key={nanoid(5)}
        className="text-white nav-item ta-sub-menu"
        title="TA Online"
      >
        <Menu className="bg-primary-color ta-tabs text-white left-0">
          <Menu.Item key={nanoid(5)}>
            <a className="cursor-pointer" href='http://203.154.66.203.8015/ME'>
              <div className="text-white hover:text-black nav-item">ME</div>
            </a>
          </Menu.Item>
          <Menu.Item key={nanoid(5)}>
            <a className="cursor-pointer" href='http://203.154.66.203.8015/MR'>
              <div className="text-white hover:text-black nav-item">MR</div>
            </a>
          </Menu.Item>
          <Menu.Item key={nanoid(5)}>
            <a className="cursor-pointer" href='http://203.154.66.203.8015/MY'>
              <div className="text-white hover:text-black nav-item">MY</div>
            </a>
          </Menu.Item>
          <Menu.Item key={nanoid(5)}>
            <a className="cursor-pointer" href='http://203.154.66.203.8015/FF'>
              <div className="text-white hover:text-black nav-item">FF</div>
            </a>
          </Menu.Item>
        </Menu>
      </Menu.SubMenu>
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
      {/* <Menu.Item key={nanoid(5)}>
        <Link href={'/'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Request Service</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={'/'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Repair Service</div>
          </a>
        </Link>
      </Menu.Item> */}
      <Menu.Item key={nanoid(5)}>
        <Link href={"/form-request"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Forms / Flow / Job Request</div>
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
      <Menu.Item key={nanoid(5)}>
        <Link href={"/itclinic"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">IT Clinic</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
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
      <Menu.Item key={nanoid(5)}>
        <Link href={"/company-policy"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Policy</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/company-benefits"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Benefit</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/privacy-policy"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item">Privacy Policy</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
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
      <Row align="middle">
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
        <Col lg={20} md={18}>
          <div className="navbar bg-primary-color flex items-center px-10 h-full rounded-tl-full rounded-br-full">
            <ul className="navbar-ul flex items-center gap-5 mb-0 ">
              <Dropdown overlay={Personal}>
                <li className="text-white uppercase flex items-center gap-2 ">
                  personal <DownOutlined />
                </li>
              </Dropdown>
              <Dropdown overlay={Services}>
                <li className="text-white uppercase flex items-center gap-2 ">
                  service <DownOutlined />
                </li>
              </Dropdown>
              <Dropdown overlay={News}>
                <li className="text-white uppercase flex items-center gap-2 ">
                  news <DownOutlined />
                </li>
              </Dropdown>
              <Dropdown overlay={CompanyProfile}>
                <li className="text-white uppercase flex items-center gap-2 ">
                  company <DownOutlined />
                </li>
              </Dropdown>
              <li className="text-white uppercase flex items-center gap-3">
                <Avatar
                  shape="circle"
                  style={{ backgroundColor: "orange", marginRight: "10px" }}
                  size={32}
                  src={
                    userInfo?.profilePicUrl
                      ? userInfo?.profilePicUrl
                      : undefined
                  }
                />
                <div className="text-white font-10">
                  Welcome... {userInfo?.name?.slice(0, 8)}
                </div>
                <div
                  className="text-white font-10"
                  style={{ marginLeft: 10, cursor: "pointer" }}
                  onClick={signOutAndReturnToLogin}
                >
                  Change Password
                </div>
                <div
                  className="text-white font-10"
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
