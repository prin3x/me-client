import { Breadcrumb, Col, Image, Row } from "antd";
import { EditorState, convertFromRaw } from "draft-js";
import moment from "moment";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { _readOnePost } from "../../services/news/news.service";
import { imagePlaceholder } from "../../utils/placeholder.image";
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

  const readPost = useCallback(() => {
    if (!postData) return;
    const { id, slug } = postData;

    if (!id) return;

    // TODO: uncomment this when we have a way to track user's reading history
    // const postKey = `post-${slug}`;
    // if (localStorage.getItem(postKey)) return;

    // localStorage.setItem(postKey, JSON.stringify(new Date().getTime()));
    _readOnePost(slug);
  }, [postData]);

  useEffect(() => {
    readPost();
  }, [readPost]);

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
      <Row justify="end">
        <Col>
          {moment(postData?.createdDate).format("DD MMMM yyyy | hh:mm A")}
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
