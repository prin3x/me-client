import { Carousel, Col, Row, Image, Spin } from "antd";
import type { NextPage } from "next";
import LayoutHOC from "../layout/LayoutHOC";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";
import {
  ALL_RECENT_ANNCOUNCEMENT,
  ALL_RECENT_POST,
} from "../services/news/news.queryKey";
import {
  _getRecentActivity,
  _getRecentITClinic,
  _getRecentNews,
} from "../services/news/news.service";
import { useContext, useEffect, useState } from "react";
import {
  EPostCategory,
  ListQueryParamsForPost,
} from "../services/news/news.model";
import LazyLoad from "react-lazyload";
import { useRouter } from "next/router";
import { UserContext } from "../context/UserContext";
import { LoadingOutlined } from "@ant-design/icons";
import { imagePlaceholder } from "../utils/placeholder.image";
import Link from "next/link";
import { _getAllEnabledCarousel } from "../services/carousel/carousel.service";

const CarouselSlider = dynamic(
  () => import("../components/home/GlideComponent")
);

const Home: NextPage = () => {
  const { userInfo, getUser } = useContext(UserContext);
  const router = useRouter();
  const [queryStr, setQueryStr] = useState<ListQueryParamsForPost>({});
  const [carouselSet, setCarouselSet] = useState([]);
  const recentAnnouncementMeta = useQuery(
    [
      ALL_RECENT_ANNCOUNCEMENT,
      { limit: 10, categoryName: EPostCategory.ANNOUNCEMENT },
    ],
    () => _getRecentNews(queryStr)
  );
  const recentActivityMeta = useQuery(
    [ALL_RECENT_POST, { limit: 1, categoryName: EPostCategory.ACTIVITY }],
    () => _getRecentActivity(queryStr)
  );
  const recentItClinicMeta = useQuery(
    [ALL_RECENT_POST, { limit: 1, categoryName: EPostCategory.IT }],
    () => _getRecentITClinic(queryStr)
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

  async function getCarousel() {
    try {
      const res = await _getAllEnabledCarousel();
      setCarouselSet(res);
    } catch (e) {
      console.error("no carousel available");
    }
  }

  useEffect(() => {
    getUser();
    getCarousel();
  }, []);

  if (!userInfo)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
      </div>
    );

  return (
    <LayoutHOC>
      <>
        <Row justify="center" className="container mx-auto pt-10">
          <Col className="relative" span={24}>
            <Carousel
              afterChange={onChange}
              dots={{ className: "circle-dots" }}
              className="z-10 relative"
            >
              {carouselSet.map((_item) => (
                <div key={_item.id}>
                  <div className="h-72 bg-gray-300 rounded-xl">
                    <LazyLoad height={"300px"}>
                      <Image src={_item.imageUrl} preview={false} />
                    </LazyLoad>
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="absolute top-16 left-80 z-0">
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
            <Row className="container mx-auto pt-10" justify="end">
              <Col span={24}>
                <h2 className="font-bold heading-en text-primary-color uppercase mb-0">
                  Announcement
                </h2>
                <CarouselSlider
                  items={
                    recentAnnouncementMeta.isSuccess
                      ? recentAnnouncementMeta.data.items
                      : []
                  }
                />
              </Col>
              <Col>
                <Link href="/announcement" passHref>
                  <div className="text-lg cursor-pointer">More ...</div>
                </Link>
              </Col>
            </Row>
          )}
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Image
              src="/assets/service-contact-hero.png"
              preview={false}
              alt="service-contact"
            />
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Row justify="space-between">
              {recentItClinicMeta?.data?.items?.length > 0 && (
                <Col md={12} className="p-1">
                  <div className="heading-en  p-5 font-bold uppercase">
                    IT Clinic
                  </div>
                  <div
                    className="mask-on-hover cursor-pointer relative"
                    onClick={() => router.push("/itclinic")}
                  >
                    <LazyLoad height={"330px"}>
                      <Image
                        className="rounded-xl"
                        src={recentItClinicMeta?.data?.items?.[0]?.imageUrl}
                        preview={false}
                        fallback={imagePlaceholder}
                        alt=""
                        width="100%"
                        height={330}
                      />
                    </LazyLoad>

                    <div className="absolute bottom-2 rounded-b-lg w-full bg-slate-900 opacity-80 p-5 h-32 max-h-full">
                      <div className="heading-th text-white text-xl font-bold">
                        {recentItClinicMeta?.data?.items?.[0]?.title}
                      </div>
                      <div
                        className="text-white text-lg"
                        dangerouslySetInnerHTML={{
                          __html:
                            recentItClinicMeta?.data?.items?.[0]?.content?.slice(
                              0,
                              15
                            ) + "...",
                        }}
                      />
                    </div>
                  </div>
                  <Row justify="end">
                    <Link href="/itclinic" passHref>
                      <div className="text-lg cursor-pointer">More ...</div>
                    </Link>
                  </Row>
                </Col>
              )}
              {recentActivityMeta?.data?.items?.length > 0 && (
                <Col md={12} className="p-1">
                  <div className="heading-en  p-5 font-bold uppercase">
                    Activities
                  </div>
                  <div
                    className="mask-on-hover cursor-pointer relative"
                    onClick={() => router.push("/activity")}
                  >
                    <LazyLoad height={"330px"}>
                      <Image
                        className="rounded-xl"
                        src={recentActivityMeta?.data?.items?.[0]?.imageUrl}
                        preview={false}
                        fallback={imagePlaceholder}
                        alt=""
                        width="100%"
                        height={330}
                      />
                    </LazyLoad>

                    <div className="absolute bottom-2 rounded-b-lg w-full bg-slate-900 opacity-80 p-5 h-32 max-h-full">
                      <div className="heading-th text-white text-xl font-bold">
                        {recentActivityMeta?.data?.items?.[0]?.title}
                      </div>
                      <div
                        className="text-white text-lg"
                        dangerouslySetInnerHTML={{
                          __html:
                            recentActivityMeta?.data?.items?.[0]?.content?.slice(
                              0,
                              15
                            ) + "...",
                        }}
                      />
                    </div>
                  </div>
                  <Row justify="end">
                    <Link href="/activity" passHref>
                      <div className="text-lg cursor-pointer">More ...</div>
                    </Link>
                  </Row>
                </Col>
              )}
            </Row>
          </Col>
        </Row>
      </>
    </LayoutHOC>
  );
};

export default Home;
