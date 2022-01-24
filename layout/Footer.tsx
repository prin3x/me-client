import { Col, Row } from 'antd';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <div className='bg-primary-color p-5 mt-10 px-10'>
      <Row className='container mx-auto pt-5' justify='space-between'>
        <Col>
          <ul className='text-white'>
            <li className='text-lg uppercase cursor-pointer'>personal</li>
            <Link href={'/staff-contact'} passHref>
              <li className='text-md cursor-pointer'>Staff Contact</li>
            </Link>
            <Link href={'/calendar'} passHref>
              <li className='text-md cursor-pointer'>Calendar</li>
            </Link>
            <Link href={'/birthdays'} passHref>
              <li className='text-md cursor-pointer'>Birthday</li>
            </Link>
            <Link href={'/holidays'} passHref>
              <li className='text-md cursor-pointer'>Holiday</li>
            </Link>
            <li className='text-md cursor-pointer'>TA Online</li>
          </ul>
        </Col>
        <Col>
          <ul className='text-white'>
            <li className='text-lg uppercase'>service</li>
            <Link href={'/booking'} passHref>
              <li className='text-md cursor-pointer'>Meeting Room</li>
            </Link>
            <Link href={'/'} passHref>
              <li className='text-md cursor-pointer'>Request Service</li>
            </Link>
            <li className='text-md cursor-pointer'>Repair Service</li>
            <li className='text-md cursor-pointer'>Form / Flow</li>
            <Link href={'/form-request'} passHref>
              <li className='text-md cursor-pointer'>Job Request</li>
            </Link>
          </ul>
        </Col>
        <Col>
          <ul className='text-white'>
            <li className='text-lg uppercase'>news</li>
            <Link href={'/announcement'} passHref>
              <li className='text-md cursor-pointer'>Announcements</li>
            </Link>
            <Link href={'/it-clinic'} passHref>
              <li className='text-md cursor-pointer'>IT Clinic</li>
            </Link>
            <Link href={'/activities'} passHref>
              <li className='text-md cursor-pointer'>Activities</li>
            </Link>
          </ul>
        </Col>
        <Col>
          <ul className='text-white'>
            <li className='text-lg uppercase'>company</li>
            <Link href={'/company-profile'} passHref>
              <li className='text-md cursor-pointer'>Profile</li>
            </Link>
            <Link href={'/company-policy'} passHref>
              <li className='text-md cursor-pointer'>Policy</li>
            </Link>
            <Link href={'/company-benefits'} passHref>
              <li className='text-md cursor-pointer'>Benefit</li>
            </Link>
            <Link href={'/privacy-policy'} passHref>
              <li className='text-md cursor-pointer'>Privacy Policy</li>
            </Link>
            <Link href={'/company-contact'} passHref>
              <li className='text-md cursor-pointer'>Contact</li>
            </Link>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
