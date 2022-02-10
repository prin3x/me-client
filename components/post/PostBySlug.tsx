import { Image } from "antd";
import React from "react";
import { ASSET_URL } from "../../config";

type Props = {
  postData: any;
};

function PostBySlug({ postData }: Props) {
  return (
    <div className="content">
      <div className="flex justify-center w-full bg-slate-200 rounded-md">
        <Image
          src={ASSET_URL + postData.imageUrl}
          alt={postData.title}
          width="100"
          preview={false}
        />
      </div>
      <div className="mt-5">
        <div dangerouslySetInnerHTML={{ __html: `${postData.content}` }} />
      </div>
    </div>
  );
}

export default PostBySlug;
