import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Pagination, Row, Skeleton } from "antd";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import AnnouncementHero from "../../components/announcement/AnnouncementHero";
import PostHOC from "../../components/post/PostHOC";
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
  const router = useRouter();
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
    set.page = 1;
    set.search = search;
    set.categoryName = EPostCategory.ANNOUNCEMENT;
    if(router.query.tag) {
      set.tag = router.query.tag as string;
    }

    setPage(1);
    setQueryStr(set);
  }

  function onChangePage(_currentPage: number) {
    setPage(_currentPage);
  }

  useEffect(() => {
    if (announcementMeta.isSuccess) {
      setAnnouncementList(announcementMeta.data.items);
    }
  }, [announcementMeta]);

  useEffect(() => {
    setQuery();
  }, [search]);

  useEffect(() => {
    if(!router.query.tag) return;
    setQuery();
  },[router.query])

  return (
    <LayoutHOC>
      <div>
        <AnnouncementHero />
        <PostHOC
          setSearch={setSearch}
          page={page}
          onChangePage={onChangePage}
          postList={announcementList}
          metaData={announcementMeta}
        />
      </div>
    </LayoutHOC>
  );
}

export default AnnouncementPage;
