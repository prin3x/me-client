import { Carousel, Col, Row, Image } from "antd";
import type { NextPage } from "next";
import LayoutHOC from "../layout/LayoutHOC";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import {
  ALL_RECENT_ANNCOUNCEMENT,
  ALL_RECENT_POST,
} from "../services/news/news.queryKey";
import { _getRecentNews } from "../services/news/news.service";
import { useState } from "react";
import {
  EPostCategory,
  ListQueryParamsForPost,
} from "../services/news/news.model";
import { ASSET_URL } from "../config";
import { useRouter } from "next/router";

const CarouselSlider = dynamic(
  () => import("../components/home/GlideComponent")
);

const Home: NextPage = () => {
  const router = useRouter();
  const [queryStr, setQueryStr] = useState<ListQueryParamsForPost>({});
  const recentAnnouncementMeta = useQuery(
    [ALL_RECENT_POST, { limit: 10, categoryName: EPostCategory.ANNOUNCEMENT }],
    () => _getRecentNews(queryStr)
  );
  const recentActivityMeta = useQuery(
    [ALL_RECENT_POST, { limit: 1, categoryName: EPostCategory.ACTIVITY }],
    () => _getRecentNews(queryStr)
  );
  const recentItClinicMeta = useQuery(
    [ALL_RECENT_POST, { limit: 1, categoryName: EPostCategory.IT }],
    () => _getRecentNews(queryStr)
  );
  function onChange(a: any) {
    console.log(a);
  }

  function setQuery() {
    let set = {} as ListQueryParamsForPost;
    set.limit = 10;
    set.categoryName = EPostCategory.ANNOUNCEMENT;

    setQueryStr(set);
  }

  return (
    <LayoutHOC>
      <>
        <Row justify="center" className="container mx-auto pt-10">
          <Col className="relative" span={24}>
            <Carousel afterChange={onChange} dots className="z-10 relative">
              <div>
                <div className="h-56 bg-gray-300 rounded-xl">
                  <Image src="/assets/Group_10.png" preview={false} />
                </div>
              </div>
              <div>
                <div className="h-56 bg-gray-300 rounded-xl">
                  <Image src="/assets/Group_10.png" preview={false} />
                </div>
              </div>
              <div>
                <div className="h-56 bg-gray-300 rounded-xl">
                  <Image src="/assets/Group_10.png" preview={false} />
                </div>
              </div>
              <div>
                <div className="h-56 bg-gray-300 rounded-xl">
                  <Image src="/assets/Group_10.png" preview={false} />
                </div>
              </div>
            </Carousel>
            <div className="absolute top-5 left-1/4 z-0">
              <Image
                src="/assets/fluid-orange.svg"
                alt="fluid"
                preview={false}
              />
            </div>
          </Col>
        </Row>
        {recentAnnouncementMeta.isSuccess &&
          recentAnnouncementMeta.data.items.length > 0 && (
            <Row className="container mx-auto pt-10">
              <Col span={24}>
                <h2 className="font-bold text-4xl text-primary-color">NEWS</h2>
                <CarouselSlider
                  items={
                    recentAnnouncementMeta.isSuccess
                      ? recentAnnouncementMeta.data.items
                      : []
                  }
                />
              </Col>
            </Row>
          )}
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Image
              src="/assets/service-contact.svg"
              preview={false}
              alt="service-contact"
            />
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Row justify="space-between">
              <Col md={12} className="p-1">
                <div className='mask-on-hover cursor-pointer' onClick={() => router.push("/itclinic")}>
                  <Image
                    className="rounded-xl"
                    src={
                      ASSET_URL + recentItClinicMeta?.data?.items?.[0].imageUrl
                    }
                    preview={false}
                    alt=""
                    height={330}
                  />
                </div>
              </Col>
              <Col md={12} className="p-1">
                <div className='mask-on-hover cursor-pointer' onClick={() => router.push("/activity")}>
                  <Image
                    className="rounded-xl"
                    src={
                      ASSET_URL + recentActivityMeta?.data?.items?.[0].imageUrl
                    }
                    preview={false}
                    alt=""
                    height={330}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    </LayoutHOC>
  );
};

export default Home;
