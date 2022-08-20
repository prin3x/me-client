import { LoadingOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row, Spin } from "antd";
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
        <div className="text-primary-color text-2xl font-bold text-center mt-20">
          View Room Detail
        </div>
        <Row className="mt-20 mb-32 gap-10 text-lg" justify="center" align="middle">
          <Col lg={10}>
            <Image
              fallback={imagePlaceholder}
              className="rounded-md"
              src={roomsMeta?.data?.imageUrl}
              width={400}
              height={300}
              preview={false}
              alt=""
            />
          </Col>
          <Col lg={10}>
            <Row  gutter={[0,40]}>
              <Col lg={8}>
                <div className="font-bold">Name Room :</div>
              </Col>
              <Col lg={16}>
                <div className="font-thin">{roomsMeta?.data?.name}</div>
              </Col>
              <Col lg={8}>
                <div className="font-bold">Description :</div>
              </Col>
              <Col lg={16}>
                <div className="font-thin">{roomsMeta?.data?.description}</div>
              </Col>

              <Col lg={8}>
                <div className="font-bold">Capacity :</div>
              </Col>
              <Col lg={16}>
                <div className="font-thin">{roomsMeta?.data?.capacity} p</div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify='end'>
          <Button type='primary' size="large" onClick={() => router.push(`/booking`)} style={{borderRadius: '8px'}}>Back</Button>
        </Row>
      </div>
    </LayoutHOC>
  );
}

export default RoomId;
