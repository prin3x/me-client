import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Image } from "antd";
import { ASSET_URL } from "../../config";
import { useRouter } from "next/router";

const sliderConfiguration = {
  gap: 20,
  perView: 4,
  startAt: 0,
};

const CarouselSlider = (props: any) => {
  const router = useRouter();
  const { items } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slider = new Glide(".glide", sliderConfiguration);

  useEffect(() => {
    slider.mount();
  }, [slider]);

  return (
    <>
      {" "}
      <div className="glide relative">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {items.map((_post: any) => (
              <li
                key={_post.id}
                className="glide__slide slider cursor-pointer"
                onClick={() =>
                  router.push(`/${_post.categoryName}/${_post.slug}`)
                }
              >
                <Image
                  preview={false}
                  src={ASSET_URL + _post.imageUrl}
                  width={250}
                  height={300}
                  className="rounded-xl"
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          className="glide__arrows absolute top-20 w-full"
          data-glide-el="controls"
        >
          <button
            className="glide__arrow glide__arrow--prev absolute left-0"
            data-glide-dir="<"
          >
            <LeftOutlined style={{ fontSize: "3rem", color: "#eee" }} />
          </button>
          <button
            className="glide__arrow glide__arrow--next  absolute right-0"
            data-glide-dir=">"
          >
            <RightOutlined style={{ fontSize: "3rem", color: "#eee" }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselSlider;
