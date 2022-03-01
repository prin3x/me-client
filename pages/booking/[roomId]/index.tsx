import { LoadingOutlined } from "@ant-design/icons";
import { Col, Image, Row, Spin } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ASSET_URL } from "../../../config";
import LayoutHOC from "../../../layout/LayoutHOC";
import {
  _getAllRooms,
  _getAllRoomsById,
} from "../../../services/meetingRoom/meeting-room.service";
import { imagePlaceholder } from "../../../utils/placeholder.image";

type Props = {};

function RoomId({}: Props) {
  const router = useRouter();
  const roomsMeta = useQuery(["rooms", router.query.roomId], () =>
    _getAllRoomsById(router.query.roomId)
  );

  if (!roomsMeta.isSuccess)
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 36 }} spin />} />
      </div>
    );

  return (
    <LayoutHOC>
      <div>
        <div className="text-primary-color text-2xl font-bold text-center mt-10">
          View Room Detail
        </div>
        <Row className="mt-10 gap-10" justify="center">
          <Col>
            <Image
              fallback={imagePlaceholder}
              className="rounded-md"
              src={ASSET_URL + roomsMeta?.data?.imageUrl}
              width={300}
              height={200}
              preview={false}
            />
          </Col>
          <Col className="">
            <div className="flex flex-col items-start justify-center max-w-xs">
              <div className="font-bold text-xl">
                Name Room :{" "}
                <span className="font-thin">{roomsMeta?.data?.name}</span>
              </div>
              <div className="font-bold text-xl mt-5">
                Description :{" "}
                <span className="font-thin">
                  {roomsMeta?.data?.description}
                </span>
              </div>
              <div className="font-bold text-xl mt-5">
                Capacity : <span className="font-thin">10 p</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default RoomId;
