import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Pagination, Row, Skeleton } from "antd";
import { useRouter } from "next/router";
import React, { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import ITClinicHero from "../../components/itclinic/ITClinicHero";
import PostHOC from "../../components/post/PostHOC";
import PostList from "../../components/post/PostList";
import LayoutHOC from "../../layout/LayoutHOC";
import {
  EPostCategory,
  ListQueryParamsForPost,
} from "../../services/news/news.model";
import { ALL_RECENT_IT } from "../../services/news/news.queryKey";
import {
  _getPostByCategoryId,
  _getRecentITClinic,
  _getRecentNews,
} from "../../services/news/news.service";

interface Props {}

function ITClinic({}: Props): ReactElement {
  const router = useRouter();
  const [queryStr, setQueryStr] = useState<ListQueryParamsForPost>({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const itclinicMeta = useQuery([ALL_RECENT_IT, queryStr, page], () =>
    _getRecentITClinic(queryStr)
  );
  const [itclinic, setItclinic] = useState([]);

  function setQuery() {
    let set = {} as ListQueryParamsForPost;
    set.limit = 10;
    set.page = page;
    set.search = search;
    if (router.query.tag) {
      set.tag = router.query.tag as string;
    }

    setQueryStr(set);
  }

  function onChangePage(_currentPage: number) {
    setPage(_currentPage);
  }

  useEffect(() => {
    if (itclinicMeta.isSuccess) {
      setItclinic(itclinicMeta.data.items);
    }
  }, [itclinicMeta]);

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
        <ITClinicHero />
        <PostHOC
          setSearch={setSearch}
          page={page}
          onChangePage={onChangePage}
          postList={itclinic}
          metaData={itclinicMeta}
        />
      </div>
    </LayoutHOC>
  );
}

export default ITClinic;
