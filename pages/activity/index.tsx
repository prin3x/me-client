import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import ActivityHero from "../../components/acitivities/ActivityHero";
import PostHOC from "../../components/post/PostHOC";
import LayoutHOC from "../../layout/LayoutHOC";
import { ListQueryParamsForPost } from "../../services/news/news.model";
import { ALL_RECENT_ACTIVITIES } from "../../services/news/news.queryKey";
import { _getRecentActivity } from "../../services/news/news.service";

interface Props {}

function ActivitiesPage({}: Props): ReactElement {
  const router = useRouter();
  const [queryStr, setQueryStr] = useState<ListQueryParamsForPost>({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const activityMeta = useQuery([ALL_RECENT_ACTIVITIES, queryStr, page], () =>
    _getRecentActivity(queryStr)
  );
  const [activities, setActivities] = useState([]);

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
    if (activityMeta.isSuccess) {
      setActivities(activityMeta.data.items);
    }
  }, [activityMeta]);

  useEffect(() => {
    setQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    if (!router.query.tag) return;
    setQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
