import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Pagination, Row, Skeleton } from "antd";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import AnnouncementHero from "../../components/announcement/AnnouncementHero";
import PostList from "../../components/post/PostList";
import LayoutHOC from "../../layout/LayoutHOC";
import {
  EPostCategory,
  ListQueryParamsForPost,
} from "../../services/news/news.model";
import { ALL_RECENT_ANNCOUNCEMENT } from "../../services/news/news.queryKey";
import {
  _getPostByCategoryId,
  _getRecentNews,
} from "../../services/news/news.service";

interface Props {}

function AnnouncementPage({}: Props): ReactElement {
  const [queryStr, setQueryStr] = useState<ListQueryParamsForPost>({
    categoryName: EPostCategory.ANNOUNCEMENT,
  });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const announcementMeta = useQuery(
    [ALL_RECENT_ANNCOUNCEMENT, queryStr, search, page],
    () => _getRecentNews(queryStr)
  );
  const [announcementList, setAnnouncementList] = useState([]);

  function setQuery() {
    let set = {} as ListQueryParamsForPost;
    set.limit = 10;
    set.page = page;
    set.search = search;
    set.categoryName = EPostCategory.ANNOUNCEMENT;

    setQueryStr(set);
  }

  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return (
        <a>
          <DoubleLeftOutlined />
        </a>
      );
    }
    if (type === "next") {
      return (
        <a>
          <DoubleRightOutlined />
        </a>
      );
    }
    return originalElement;
  }

  useEffect(() => {
    if (announcementMeta.isSuccess) {
      setAnnouncementList(announcementMeta.data.items);
    }
  }, [announcementMeta.data]);

  useEffect(() => {
    setQuery();
  }, [page, search]);

  return (
    <LayoutHOC>
      <div>
        <AnnouncementHero />
        <Row justify="end" className="mt-5">
          <Input
            style={{ width: 250 }}
            placeholder="SEARCH"
            className="ml-auto"
            onChange={(e) => setSearch(e.target.value)}
            prefix={
              <SearchOutlined
                style={{
                  color: "#D8D8D8",
                  marginLeft: "4rem",
                }}
              />
            }
          />
        </Row>
        {announcementMeta.isLoading &&
          [1, 2, 3].map((_post) => <Skeleton key={_post} />)}
        {announcementList.length > 0 && <PostList posts={announcementList} />}
        <Row justify="center">
          <Pagination
            total={announcementMeta?.data?.total || 0}
            itemRender={itemRender}
            current={page}
            onChange={(cur) => setPage(cur)}
          />
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default AnnouncementPage;
