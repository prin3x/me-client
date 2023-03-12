import { Skeleton } from "antd";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import PostBySlug from "../../../components/post/PostBySlug";
import LayoutHOC from "../../../layout/LayoutHOC";
import { POST_QUERY } from "../../../services/news/news.queryKey";
import { _getOnePost } from "../../../services/news/news.service";

type Props = {};

function ItClinicById({}: Props) {
  const router = useRouter();
  const postMeta = useQuery([POST_QUERY, router.query.id], () =>
    getOnePost(router.query.id as string)
  );

  function getOnePost(id: string) {
    if (!id) return;
    return _getOnePost(id);
  }

  return (
    <LayoutHOC>
      <div className="mt-5">
        {postMeta.isLoading ? (
          <Skeleton />
        ) : (
          <PostBySlug postData={postMeta.data} />
        )}
      </div>
    </LayoutHOC>
  );
}

export default ItClinicById;
