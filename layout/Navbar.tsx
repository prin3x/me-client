import { Col, Dropdown, Menu, Row } from 'antd';
import React, { ReactElement } from 'react';
import { Image } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';

function Navbar(): ReactElement {
  const Personal = (
    <Menu className='bg-primary-color text-white'>
      <Menu.Item className='text-white'>
        <Link href={'/staff-contact'}>
          <a>Staff Contact</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/calendar'}>
          <a>Calendar</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/birthdays'}>
          <a>Birthday</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/holidays'}>
          <a>Holiday</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/ta-online'}>
          <a>TA Online</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const Services = (
    <Menu className='bg-primary-color text-white'>
      <Menu.Item className='text-white'>
        <Link href={'/booking'}>
          <a>Meeting Room</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/'}>
          <a>Request Service</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/'}>
          <a>Repair Service</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/form-request'}>
          <a>Form / Flow</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/form-request'}>
          <a>Job Request</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const News = (
    <Menu className='bg-primary-color text-white'>
      <Menu.Item className='text-white'>
        <Link href={'/announcement'}>
          <a>Announcement</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/it-clinic'}>
          <a>IT Clinic</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/activities'}>
          <a>Activities</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const CompanyProfile = (
    <Menu className='bg-primary-color text-white'>
      <Menu.Item className='text-white'>
        <Link href={'/company-profile'}>
          <a>Profile</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/company-policy'}>
          <a>Policy</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/company-benefits'}>
          <a>Benefit</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/privacy-policy'}>
          <a>Privacy Policy</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/company-contact'}>
          <a>Contact</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Row justify='end'>
        <Col lg={4} md={4}>
          <div className='flex h-100 items-center'>
            <Image
              src='/assets/logo-m.svg'
              preview={false}
              width={125}
              className='p-3'
              alt='logo'
            />
          </div>
        </Col>
        <Col lg={18} md={18}>
          <div className='bg-primary-color flex items-center px-10 h-full rounded-tl-full rounded-br-full'>
            <ul className='flex items-center gap-5 mb-0 '>
              <Dropdown overlay={Personal}>
                <li className='text-white uppercase flex items-center gap-2'>
                  personal <DownOutlined />
                </li>
              </Dropdown>
              <Dropdown overlay={Services}>
                <li className='text-white uppercase flex items-center gap-2'>
                  service <DownOutlined />
                </li>
              </Dropdown>
              <Dropdown overlay={News}>
                <li className='text-white uppercase flex items-center gap-2'>
                  news <DownOutlined />
                </li>
              </Dropdown>
              <Dropdown overlay={CompanyProfile}>
                <li className='text-white uppercase flex items-center gap-2'>
                  company <DownOutlined />
                </li>
              </Dropdown>
              <li className='text-white uppercase flex items-center gap-3'>
                <Avatar shape='circle' size={32} />
                <div className='text-white'>Log In</div>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;
