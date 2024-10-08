import { Breadcrumb, Col, Image, Row } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { imagePlaceholder } from "../../utils/placeholder.image";
import draftToHtml from "draftjs-to-html";
import { useRouter } from "next/router";
import Link from "next/link";
import { _readOnePost } from "../../services/news/news.service";
import { EditorState, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
) as any;

type Props = {
  postData: any;
};

const urls = {
  announcement: "Announcement",
  lifestyle: "Lifestyle",
  activity: "Activity",
  undefined: "undefined",
};

function PostBySlug({ postData }: Props) {
  const [foundPath, setFoundPath] = useState("");
  const router = useRouter();
  const [textState, setTextState] = useState({
    editorState: EditorState.createEmpty(),
  });

  function findUrlInPathname() {
    const availableUrl = Object.keys(urls);
    const pathname = router.pathname.split("/")?.[1];

    const foundPath =
      availableUrl.find((_url) => _url === pathname) || "undefined";
    setFoundPath(foundPath);
  }

  useEffect(() => {
    if (!postData?.id) return;

    if (sessionStorage.getItem(`post-${postData?.id}`)) return;

    sessionStorage.setItem(
      `post-${postData?.id}`,
      JSON.stringify(new Date().getTime())
    );

    _readOnePost(postData?.id);
  }, [postData?._id]);

  useEffect(() => {
    findUrlInPathname();
  }, [router]);

  useEffect(() => {
    if (postData?.content) {
      const editorState = convertFromRaw(JSON.parse(postData.content));
      setTextState({ editorState: EditorState.createWithContent(editorState) });
    }
  }, [postData]);

  return (
    <div className="content">
      <Breadcrumb>
        <Breadcrumb.Item>News</Breadcrumb.Item>
        <Breadcrumb.Item className="cursor-pointer">
          <Link href={"/" + foundPath} passHref>
            <span>{urls[foundPath]}</span>
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{postData?.title}</Breadcrumb.Item>
      </Breadcrumb>
      <Row justify="space-between">
        <Col>
          <Row align="middle">
            <EyeOutlined />
            <span className="ml-2">{postData?.readers}</span>
          </Row>
        </Col>
        <Col>
          {moment(postData?.createdAt).format("DD MMMM yyyy | hh:mm A")}
        </Col>
      </Row>
      <Row justify="center" className="pt-10">
        <Col>
          <h1 className="heading text-4xl font-bold">{postData?.title}</h1>
        </Col>
      </Row>
      <div className="flex justify-center w-full bg-slate-200 rounded-md">
        <Image
          fallback={imagePlaceholder}
          src={postData?.imageUrl}
          alt={postData?.title}
          preview={false}
        />
      </div>
      {/* <div
          dangerouslySetInnerHTML={{
            __html: `${draftToHtml(JSON.parse(postData?.content))}`,
          }}
        /> */}
      <Row justify="center" className="mt-5">
        <Col lg={24} md={24} className="bg-white">
          <Editor
            toolbar={false}
            readOnly={true}
            editorState={textState.editorState}
          />
        </Col>
      </Row>
    </div>
  );
}

export default PostBySlug;
