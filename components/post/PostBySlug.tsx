import { Col, Image, Row } from "antd";
import moment from "moment";
import React from "react";
import { imagePlaceholder } from "../../utils/placeholder.image";
import draftToHtml from "draftjs-to-html";

type Props = {
  postData: any;
};

function PostBySlug({ postData }: Props) {
  return (
    <div className="content">
      <Row justify="center">
        <Col>
          <h1 className="heading text-xl font-bold">{postData?.title}</h1>
        </Col>
      </Row>
      <div className="flex justify-center w-full bg-slate-200 rounded-md">
        <Image
          fallback={imagePlaceholder}
          src={postData?.imageUrl}
          alt={postData?.title}
          width="100"
          preview={false}
        />
      </div>
      <div className="mt-5">
        <div
          dangerouslySetInnerHTML={{
            __html: `${draftToHtml(JSON.parse(postData.content))}`,
          }}
        />
      </div>
      <Row justify="end">
        <Col>{moment(postData.createdAt).format("DD MMMM yyyy | hh:mm A")}</Col>
      </Row>
    </div>
  );
}

export default PostBySlug;
