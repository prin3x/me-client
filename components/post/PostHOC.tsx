import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input, Pagination, Row, Skeleton } from "antd";
import React from "react";
import { POST_RESPOSE } from "../../services/news/news.model";
import PostList from "./PostList";

type Props = {
  setSearch: any;
  metaData: any;
  postList: POST_RESPOSE[];
  onChangePage: (page: number) => void;
  page: number;
};

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

function PostHOC({ setSearch, metaData, postList, onChangePage, page }: Props) {
  return (
    <div>
      <Row justify="end" className="mt-5">
        <Input
          style={{ width: 350 }}
          placeholder="SEARCH"
          className="ml-auto"
          onChange={(e) => setSearch(e.target.value)}
          prefix={
            <SearchOutlined
              style={{
                color: "#D8D8D8",
                marginLeft: "6rem",
              }}
            />
          }
        />
      </Row>
      {metaData.isLoading &&
        [1, 2, 3, 4, 5, 6].map((_post) => <Skeleton key={_post} />)}
      {postList.length > 0 && <PostList posts={postList} />}
      <Row justify="center">
        <Pagination
          total={metaData?.data?.total || 0}
          itemRender={itemRender}
          current={page}
          onChange={(cur) => onChangePage(cur)}
        />
      </Row>
    </div>
  );
}

export default PostHOC;
