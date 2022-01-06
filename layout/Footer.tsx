import { Col, Row } from 'antd';
import React, { ReactElement } from 'react';

interface Props {}

function Footer({}: Props): ReactElement {
  return (
    <div className='bg-primary-color p-5 mt-10 px-10'>
      <Row className='container mx-auto pt-5' justify='space-between'>
        <Col>
          <ul className='text-white'>
            <li className='text-lg uppercase'>personal</li>
            <li className='text-md'>Staff Contact</li>
            <li className='text-md'>Calendar</li>
            <li className='text-md'>Birthday</li>
            <li className='text-md'>Holiday</li>
            <li className='text-md'>TA Online</li>
          </ul>
        </Col>
        <Col>
          <ul className='text-white'>
            <li className='text-lg uppercase'>service</li>
            <li className='text-md'>Meeting Room</li>
            <li className='text-md'>Request Service</li>
            <li className='text-md'>Repair Service</li>
            <li className='text-md'>Form / Flow</li>
            <li className='text-md'>Job Request</li>
          </ul>
        </Col>
        <Col>
          <ul className='text-white'>
            <li className='text-lg uppercase'>news</li>
            <li className='text-md'>Announcements</li>
            <li className='text-md'>IT Clinic</li>
            <li className='text-md'>Activities</li>
          </ul>
        </Col>
        <Col>
          <ul className='text-white'>
            <li className='text-lg uppercase'>company</li>
            <li className='text-md'>Profile</li>
            <li className='text-md'>Policy</li>
            <li className='text-md'>Benefit</li>
            <li className='text-md'>Privacy Policy</li>
            <li className='text-md'>Contact</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
