import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Pagination, Row, Skeleton } from "antd";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import ActivityHero from "../../components/acitivities/ActivityHero";
import PostHOC from "../../components/post/PostHOC";
import PostList from "../../components/post/PostList";
import LayoutHOC from "../../layout/LayoutHOC";
import {
  EPostCategory,
  ListQueryParamsForPost,
} from "../../services/news/news.model";
import { ALL_RECENT_ACTIVITIES } from "../../services/news/news.queryKey";
import {
  _getPostByCategoryId,
  _getRecentNews,
} from "../../services/news/news.service";

interface Props {}

function ActivitiesPage({}: Props): ReactElement {
  const router = useRouter();
  const [queryStr, setQueryStr] = useState<ListQueryParamsForPost>({
    categoryName: EPostCategory.ACTIVITY,
  });
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const activityMeta = useQuery([ALL_RECENT_ACTIVITIES, queryStr, page], () =>
    _getRecentNews(queryStr)
  );
  const [activities, setActivities] = useState([]);

  function setQuery() {
    let set = {} as ListQueryParamsForPost;
    set.limit = 10;
    set.page = page;
    set.search = search;
    set.categoryName = EPostCategory.ACTIVITY;
    if(router.query.tag) {
      set.tag = router.query.tag as string;
    }

    setQueryStr(set);
  }

  function onChangePage(_currentPage: number) {
    setPage(_currentPage);
  }

  useEffect(() => {
    if (activityMeta.isSuccess) {
      setActivities(activityMeta.data.items);
    }
  }, [activityMeta]);

  useEffect(() => {
    setQuery();
  }, [search]);

  useEffect(() => {
    if (!router.query.tag) return;
    setQuery();
  }, [router.query]);

  return (
    <LayoutHOC>
      <div>
        <ActivityHero />
        <PostHOC
          setSearch={setSearch}
          page={page}
          onChangePage={onChangePage}
          postList={activities}
          metaData={activityMeta}
        />
      </div>
    </LayoutHOC>
  );
}

export default ActivitiesPage;
