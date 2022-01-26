import { Col, Dropdown, Menu, Row } from 'antd';
import React, { ReactElement } from 'react';
import { Image } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';

function Navbar(): ReactElement {
  const Personal = (
    <Menu className='bg-primary-color text-white'>
      <Menu.Item>
        <Link href={'/staff-contact'}>
          <a className='cursor-pointer'>
            <div className='text-white hover:text-black'>Staff Contact</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/calendar'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Calendar</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/birthdays'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Birthday</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/holidays'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Holiday</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/ta-online'}>
          <a className='cursor-pointer'>
            <div className='text-white'>TA Online</div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const Services = (
    <Menu className='bg-primary-color text-white'>
      <Menu.Item className='text-white'>
        <Link href={'/booking'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Meeting Room</div>
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
        <Link href={'/form-request'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Form / Flow</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/form-request'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Job Request</div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const News = (
    <Menu className='bg-primary-color text-white'>
      <Menu.Item className='text-white'>
        <Link href={'/announcement'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Announcement</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/it-clinic'}>
          <a className='cursor-pointer'>
            <div className='text-white'>IT Clinic</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/activities'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Activities</div>
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  const CompanyProfile = (
    <Menu className='bg-primary-color text-white'>
      <Menu.Item className='text-white'>
        <Link href={'/company-profile'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Profile</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/company-policy'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Policy</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/company-benefits'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Benefit</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/privacy-policy'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Privacy Policy</div>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={'/company-contact'}>
          <a className='cursor-pointer'>
            <div className='text-white'>Contact</div>
          </a>
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
              className='p-3 cursor-pointer'
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
