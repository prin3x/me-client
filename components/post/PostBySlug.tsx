import { Breadcrumb, Col, Image, Row } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { imagePlaceholder } from "../../utils/placeholder.image";
import draftToHtml from "draftjs-to-html";
import { useRouter } from "next/router";
import Link from "next/link";

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

  function findUrlInPathname() {
    const availableUrl = Object.keys(urls);
    const pathname = router.pathname.split("/")?.[1];
    console.log(pathname, "foundPath");

    const foundPath =
      availableUrl.find((_url) => _url === pathname) || "undefined";
    setFoundPath(foundPath);
  }

  useEffect(() => {
    findUrlInPathname();
  }, [router]);

  return (
    <div className="content">
      <Breadcrumb>
        <Breadcrumb.Item>News</Breadcrumb.Item>
        <Breadcrumb.Item className="cursor-pointer">
          <Link href={foundPath} passHref>
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
          width="100"
          preview={false}
        />
      </div>
      <div className="mt-5">
        <div
          dangerouslySetInnerHTML={{
            __html: `${draftToHtml(JSON.parse(postData?.content))}`,
          }}
        />
      </div>

    </div>
  );
}

export default PostBySlug;
