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
              dots={{ className: "circle-dots" }}
              className="z-10 relative"
              autoplay
              autoplaySpeed={5000}
            >
              {carouselSet.map((_item) => (
                <div key={_item.id}>
                  {_item.linkOut && _item.linkOut !== "undefined" ? (
                    <a
                      href={"https://" + _item.linkOut.replace("https://", "")}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="h-[360px] min-h-full bg-gray-300 rounded-xl">
                        <Image
                          src={_item.imageUrl}
                          preview={false}
                          alt=""
                          width={1004}
                          height={360}
                          placeholder={true}
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="h-[360px] min-h-full bg-gray-300 rounded-xl">
                      <Image
                        src={_item.imageUrl}
                        preview={false}
                        alt=""
                        width={1004}
                        height={360}
                        placeholder={true}
                      />
                    </div>
                  )}
                </div>
              ))}
            </Carousel>
            <div className="absolute top-[9rem] left-80 z-0">
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
                <Link href={"/announcement"} passHref>
                  <h2 className="font-bold heading-en text-primary-color uppercase mb-0 cursor-pointer">
                    Announcement
                  </h2>
                </Link>
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
          <Col span={24} className="cursor-pointer">
            <Link href="/service-contact" passHref>
              <Image
                src="/assets/service-contact-hero.png"
                preview={false}
                alt="service-contact"
              />
            </Link>
          </Col>
        </Row>
        <Row className="container mx-auto pt-10">
          <Col span={24}>
            <Row justify="space-between">
              {recentItClinicMeta?.data?.items?.length > 0 && (
                <Col md={12} className="p-1">
                  <div className="heading-en  p-5 font-bold uppercase text-primary-color">
                    <Link href={"/lifestyle"} passHref>
                      <span className="cursor-pointer">Lifestyle</span>
                    </Link>
                  </div>
                  <div
                    className="mask-on-hover cursor-pointer relative"
                    onClick={() =>
                      router.push(
                        `/lifestyle/${recentItClinicMeta?.data?.items?.[0]?.slug}`
                      )
                    }
                  >
                    <Image
                      className="rounded-xl"
                      src={
                        recentItClinicMeta?.data?.items?.[0]?.homeImageUrl ||
                        recentItClinicMeta?.data?.items?.[0]?.imageUrl
                      }
                      preview={false}
                      fallback={imagePlaceholder}
                      alt=""
                      width="100%"
                      height={330}
                    />

                    <div className="absolute bottom-2 rounded-b-lg w-full bg-slate-900 opacity-80 p-5 h-32 max-h-full">
                      <div className="heading-th text-white text-xl font-bold truncate">
                        {recentItClinicMeta?.data?.items?.[0]?.title}
                      </div>
                      <div className="text-white text-lg truncate">
                        {recentItClinicMeta?.data?.items?.[0]?.description}
                      </div>
                    </div>
                  </div>
                  <Row justify="end">
                    <Link href="/lifestyle" passHref>
                      <div className="text-lg cursor-pointer">More ...</div>
                    </Link>
                  </Row>
                </Col>
              )}
              {recentActivityMeta?.data?.items?.length > 0 && (
                <Col md={12} className="p-1">
                  <div className="heading-en  p-5 font-bold uppercase text-primary-color">
                    <Link href={"/activity"} passHref>
                      <span className="cursor-pointer">Activities</span>
                    </Link>
                  </div>
                  <div
                    className="mask-on-hover cursor-pointer relative"
                    onClick={() =>
                      router.push(
                        `/activity/${recentActivityMeta?.data?.items?.[0]?.slug}`
                      )
                    }
                  >
                    <Image
                      className="rounded-xl"
                      src={
                        recentActivityMeta?.data?.items?.[0]?.homeImageUrl ||
                        recentActivityMeta?.data?.items?.[0]?.imageUrl
                      }
                      preview={false}
                      fallback={imagePlaceholder}
                      alt=""
                      width="100%"
                      height={330}
                    />

                    <div className="absolute bottom-2 rounded-b-lg w-full bg-slate-900 opacity-80 p-5 h-32 max-h-full">
                      <div className="heading-th text-white text-xl font-bold truncate">
                        {recentActivityMeta?.data?.items?.[0]?.title}
                      </div>
                      <div className="text-white text-lg truncate">
                        {recentActivityMeta?.data?.items?.[0]?.description}
                      </div>
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
