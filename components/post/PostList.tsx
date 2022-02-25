import { ClockCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Image, List, Row, Tag } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React from "react";
import { ASSET_URL } from "../../config";
import { _getPostByCategoryId } from "../../services/news/news.service";
type Props = {
  posts: any[];
};

function PostList({ posts }: Props) {
  const router = useRouter();
  return (
    <Row className="container mx-auto pt-5" justify="center">
      <List
        className="p-5 w-full"
        dataSource={posts}
        renderItem={(_post: any) => (
          <List.Item
            key={_post.id}
            className="w-full cursor-pointer"
            onClick={() => router.push(`/${_post.categoryName}/${_post.slug}/`)}
          >
            <Row className="w-full">
              <Col md={3}>
                <Image
                  src={ASSET_URL + _post.imageUrl}
                  preview={false}
                  width={100}
                  height={100}
                  alt=""
                />
              </Col>
              <Col md={12} className="mx-2 mt-5 ml-5">
                <div className="flex flex-col">
                  <div className="text-lg"> {_post.title}</div>
                  <p
                    className="text-slate-400 "
                    dangerouslySetInnerHTML={{
                      __html: `${_post.content.slice(0, 75) + " ..."}`,
                    }}
                  />
                </div>
              </Col>
              <Col md={1}>
                <Divider
                  type="vertical"
                  className="divider-h-full bg-gray-400 h-full"
                />
              </Col>
              <Col
                md={7}
                className="flex flex-col items-center gap-2 mt-5 justify-center"
              >
                <div className="flex items-start gap-2 justify-center">
                  <ClockCircleOutlined
                    style={{ color: "#eee", fontSize: 18 }}
                    className="text-slate-400"
                  />
                  <p className="text-xs text-slate-400">
                    {moment(_post.createdAt).format("DD MMMM yyyy | hh:mm A")}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Tag className="tag-round font-bold" color="blue">
                    {_post.tag}
                  </Tag>
                </div>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </Row>
  );
}

export default PostList;
