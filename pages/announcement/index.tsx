import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import AnnouncementHero from "../../components/announcement/AnnouncementHero";
import PostHOC from "../../components/post/PostHOC";
import LayoutHOC from "../../layout/LayoutHOC";
import { ListQueryParamsForPost } from "../../services/news/news.model";
import { ALL_RECENT_ANNCOUNCEMENT } from "../../services/news/news.queryKey";
import { _getRecentNews } from "../../services/news/news.service";

interface Props {}

function AnnouncementPage({}: Props): ReactElement {
  const router = useRouter();
  const [queryStr, setQueryStr] = useState<ListQueryParamsForPost>();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (!router.query.tag) return;
    setQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
