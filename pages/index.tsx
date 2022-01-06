import { Carousel, Col, Row, Image } from 'antd';
import type { NextPage } from 'next';
import LayoutHOC from '../layout/LayoutHOC';
import dynamic from 'next/dynamic';

const CarouselSlider = dynamic(
  () => import('../components/home/GlideComponent')
);

const Home: NextPage = () => {
  function onChange(a: any) {
    console.log(a);
  }
  return (
    <LayoutHOC>
      <>
        <Row justify='center' className='container mx-auto pt-10'>
          <Col className='relative' span={24}>
            <Carousel afterChange={onChange} dots className='z-10 relative'>
              <div>
                <div className='h-56 bg-gray-300 rounded-xl'></div>
              </div>
              <div>
                <div className='h-56 bg-gray-300 rounded-xl'></div>
              </div>
              <div>
                <div className='h-56 bg-gray-300 rounded-xl'></div>
              </div>
              <div>
                <div className='h-56 bg-gray-300 rounded-xl'></div>
              </div>
            </Carousel>
            <div className='absolute top-5 left-1/4 z-0'>
              <Image
                src='/assets/fluid-orange.svg'
                alt='fluid'
                preview={false}
              />
            </div>
          </Col>
        </Row>
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <h2 className='font-bold text-4xl text-primary-color'>NEWS</h2>
            <CarouselSlider />
          </Col>
        </Row>
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <Image src='/assets/service-contact.svg' preview={false} alt='service-contact' />
          </Col>
        </Row>
        <Row className='container mx-auto pt-10'>
          <Col span={24}>
            <Row justify='space-between'>
              <Col md={12} className='p-1'>
                <div className='h-56 bg-gray-300 rounded-xl'></div>
              </Col>
              <Col md={12} className='p-1'>
                <div className='h-56 bg-gray-300 rounded-xl'></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    </LayoutHOC>
  );
};

export default Home;
