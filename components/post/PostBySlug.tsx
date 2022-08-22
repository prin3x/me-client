import { Breadcrumb, Col, Image, Row } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { imagePlaceholder } from "../../utils/placeholder.image";
import draftToHtml from "draftjs-to-html";
import { useRouter } from "next/router";
import Link from "next/link";
import { _readOnePost } from "../../services/news/news.service";
import { EditorState, convertFromHTML, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

type Props = {
  postData: any;
};

const urls = {
  announcement: "Announcement",
  itclinic: "IT Clinic",
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
    console.log(postData, "postData");
    if (postData.content) {
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
      <Row justify="end">
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
      <div className="mt-5">
        {/* <div
          dangerouslySetInnerHTML={{
            __html: `${draftToHtml(JSON.parse(postData?.content))}`,
          }}
        /> */}

        <Editor
          toolbar={false}
          readOnly={true}
          editorState={EditorState.createWithContent(
            textState.editorState.getCurrentContent()
          )}
        />
      </div>
    </div>
  );
}

export default PostBySlug;
