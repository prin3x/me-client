import { Col, Row,Image } from 'antd'
import React, { ReactElement } from 'react'


function AnnouncementHero(): ReactElement {
    return (
        <Row className='container mx-auto pt-10'>
        <Col span={24}>
          <Image
            src='/assets/announcement-hero.svg'
            preview={false}
            alt='calendar-hero'
          />
        </Col>
      </Row>
    )
}

export default AnnouncementHero
