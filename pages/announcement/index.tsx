import { Col, Image, List, Row, Tag } from 'antd';
import React, { ReactElement } from 'react';
import AnnouncementHero from '../../components/announcement/AnnouncementHero';
import LayoutHOC from '../../layout/LayoutHOC';

interface Props {}

function AnnouncementPage({}: Props): ReactElement {
  return (
    <LayoutHOC>
      <div>
        <AnnouncementHero />
        <Row className='container mx-auto pt-10'>
          <List
            className='p-5'
            dataSource={[
              {
                id: '1',
                desc: 'apisdfhaifia',
              },
            ]}
            renderItem={(_holiday) => (
              <List.Item key={_holiday.id}>
                <Row gutter={[32, 0]} className='w-full'>
                  <Col span={8}>
                    <Image preview={false} width={100} height={100} />
                  </Col>
                  <Col span={8}>
                    <div className='flex flex-col'>
                      <div> แนะนำพนักงานใหม่ ประจำเดือน มิถุนายน 2564</div>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dicta, quisquam?
                      </p>
                    </div>
                  </Col>
                  <Col span={8}>
                    <Tag>Tag 1</Tag>
                  </Col>
                </Row>
              </List.Item>
            )}
          />
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default AnnouncementPage;
