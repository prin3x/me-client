import { DoubleLeftOutlined, DoubleRightOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Pagination, Row, Skeleton } from "antd";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import ActivityHero from "../../components/acitivities/ActivityHero";
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
    if (activityMeta.isSuccess) {
      setActivities(activityMeta.data.items);
    }
  }, [activityMeta.data]);

  useEffect(() => {
    setQuery();
  }, [page, search]);

  return (
    <LayoutHOC>
      <div>
        <ActivityHero />
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
        {activityMeta.isLoading &&
          [1, 2, 3].map((_post) => <Skeleton key={_post} />)}
        {activities.length > 0 && <PostList posts={activities} />}
        <Row justify="center">
          <Pagination
            total={activityMeta?.data?.total || 0}
            itemRender={itemRender}
            current={page}
            onChange={(cur) => setPage(cur)}
          />
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default ActivitiesPage;
