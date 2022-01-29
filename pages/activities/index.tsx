import { ClockCircleOutlined } from '@ant-design/icons';
import { Col, Divider, Image, List, Row, Tag } from 'antd';
import moment from 'moment';
import React, { ReactElement, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ActivityHero from '../../components/acitivities/ActivityHero';
import LayoutHOC from '../../layout/LayoutHOC';
import { GET_ANNOUNCEMENT } from '../../services/news/news.queryKey';
import { _getPostByCategoryId } from '../../services/news/news.service';

interface Props {}

function ActivitiesPage({}: Props): ReactElement {
  const announcementMeta = useQuery([GET_ANNOUNCEMENT], () =>
    _getPostByCategoryId(1)
  );
  const [announcementList, setAnnouncementList] = useState([]);

  useEffect(() => {
    if (announcementMeta.isSuccess) {
      setAnnouncementList(announcementMeta.data);
    }
  }, [announcementMeta.data]);
  return (
    <LayoutHOC>
      <div>
        <ActivityHero />
        <Row className='container mx-auto pt-10'>
          <List
            className='p-5'
            dataSource={announcementMeta.data}
            renderItem={(_announce: any) => (
              <List.Item key={_announce.id} className='w-full'>
                <Row className='w-full'>
                  <Col>
                    <Image preview={false} width={100} height={100} alt='' />
                  </Col>
                  <Col className='mx-2 mt-5'>
                    <div className='flex flex-col'>
                      <div className='text-lg'>
                        {' '}
                        แนะนำพนักงานใหม่ ประจำเดือน มิถุนายน 2564
                      </div>
                      <p className='text-slate-400'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dicta, quisquam?
                      </p>
                    </div>
                  </Col>
                  <Col>
                    <Divider type='vertical' className='bg-gray-400 h-full' />
                  </Col>
                  <Col className='flex flex-col items-center gap-2 mt-5'>
                    <div className='flex items-center gap-2'>
                      <ClockCircleOutlined className='text-slate-400' />
                      <p className='text-xs text-slate-400'>
                        {moment(_announce.updatedDate).format('LLL')}
                      </p>
                    </div>
                    <Tag className='rounded-2xl' color='blue'>
                      Tag 1 Long
                    </Tag>
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

export default ActivitiesPage;
