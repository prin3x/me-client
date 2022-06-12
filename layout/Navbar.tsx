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
    <Menu className="bg-primary-color text-white text-lg ">
      <Menu.Item key={nanoid(5)}>
        <Link href={"/staff-contact"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Staff Contact</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/calendar"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Calendar</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/birthdays"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Birthday</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/holidays"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Holiday</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.SubMenu
        key={nanoid(5)}
        className="text-white nav-item ta-sub-menu text-lg"
        title="TA Online"
      >
        <Menu className="bg-primary-color ta-tabs text-white left-0">
          <Menu.Item key={nanoid(5)}>
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href="http://203.154.66.203:8015/ME"
            >
              <div className="text-white hover:text-black nav-item text-lg ">
                ME
              </div>
            </a>
          </Menu.Item>
          <Menu.Item key={nanoid(5)}>
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href="http://203.154.66.203:8015/MR"
            >
              <div className="text-white hover:text-black nav-item text-lg ">
                MR
              </div>
            </a>
          </Menu.Item>
          <Menu.Item key={nanoid(5)}>
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href="http://203.154.66.203:8015/MY"
            >
              <div className="text-white hover:text-black nav-item text-lg ">
                MY
              </div>
            </a>
          </Menu.Item>
          <Menu.Item key={nanoid(5)}>
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href="http://203.154.66.203:8015/FB"
            >
              <div className="text-white hover:text-black nav-item text-lg ">
                FB
              </div>
            </a>
          </Menu.Item>
        </Menu>
      </Menu.SubMenu>
    </Menu>
  );

  const Services = (
    <Menu className="bg-primary-color text-white text-lg ">
      <Menu.Item   key={nanoid(5)} className="text-white">
        <Link href={"/booking"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Meeting Room</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item   key={nanoid(5)} className="text-white">
        <Link href={"/service-contact"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Service Contact</div>
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
            <div className="text-white nav-item text-lg ">
              Forms / Flow / Job Request
            </div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const News = (
    <Menu className="bg-primary-color text-white text-lg ">
      <Menu.Item className="text-white">
        <Link href={"/announcement"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Announcement</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/itclinic"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">IT Clinic</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/activity"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Activities</div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const CompanyProfile = (
    <Menu className="bg-primary-color text-white text-lg ">
      <Menu.Item className="text-white">
        <Link href={"/company-profile"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Profile</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/company-policy"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Policy</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/company-benefits"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Benefit</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/privacy-policy"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Privacy Policy</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key={nanoid(5)}>
        <Link href={"/company-contact"}>
          <a className="cursor-pointer">
            <div className="text-white nav-item text-lg ">Contact</div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Row className="navbar-container mx-auto" align="top">
      <Row align="top" wrap={false}>
        <Col>
          <Link href={"/"} passHref>
            <div className="nav-logo mt-4 flex h-100 items-center cursor-pointer">
              <Image
                src="/assets/logo-m.png"
                preview={false}
                width={150}
                className="cursor-pointer nav-logo"
                alt="logo"
              />
            </div>
          </Link>
        </Col>
        <Col>
          <div className="navbar bg-primary-color flex items-center h-full rounded-tl-full rounded-br-full">
            <ul className="navbar-ul flex  flex-wrap items-center gap-20 mb-0 ">
              <Dropdown overlay={Personal}>
                <li className="nav-li-item text-white uppercase flex items-center gap-2 font-24 font-bold">
                  personal <DownOutlined className="down-icon" />
                </li>
              </Dropdown>
              <Dropdown overlay={Services}>
                <li className="nav-li-item text-white uppercase flex items-center gap-2 font-24 font-bold ">
                  service <DownOutlined className="down-icon" />
                </li>
              </Dropdown>
              <Dropdown overlay={News}>
                <li className="nav-li-item text-white uppercase flex items-center gap-2 font-24 font-bold ">
                  news <DownOutlined className="down-icon" />
                </li>
              </Dropdown>
              <Dropdown overlay={CompanyProfile}>
                <li className="nav-li-item text-white uppercase flex justify-between items-center gap-2 font-24 font-bold">
                  <span>company</span> <DownOutlined className="down-icon" />
                </li>
              </Dropdown>
              <li className="nav-li-item text-white flex items-center gap-3 font-bold">
                <Link passHref href={`/staff-contact/${userInfo?.id}`}>
                  <Avatar
                    shape="circle"
                    style={{
                      backgroundColor: "orange",
                      marginRight: "10px",
                      minWidth: "50px",
                      height: "50px",
                    }}
                    size={48}
                    src={
                      userInfo?.profilePicUrl
                        ? userInfo?.profilePicUrl
                        : undefined
                    }
                  />
                </Link>
                <div className="user-info welcom-text text-white">
                  Welcome {userInfo?.nickname?.slice(0, 8)}
                </div>
                <div className="user-info user-action flex flex-col">
                  <div
                    className="text-white"
                    style={{ marginLeft: 10, cursor: "pointer" }}
                    onClick={signOutAndReturnToLogin}
                  >
                    Log Out
                  </div>
                  <div
                    className="user-info text-white"
                    style={{ marginLeft: 10, cursor: "pointer" }}
                    onClick={() => router.push("/change-password/")}
                  >
                    Change Password
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Row>
  );
}

export default Navbar;
