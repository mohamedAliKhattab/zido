import { GLOBAL } from "@/constants/i18n/ar";
import { teachersList } from "@/constants/teachersList";
import { MainButton } from "@/utils/buttons";
import TeacherDetails from "@/utils/teachers/TeacherDetails";
import { Col, Row, Image } from "antd";
import React, { useEffect, useState } from "react";

type Description = { id: string; text: string };
type TeacherProps = {
  name: string;
  imageUrl?: string | null;
  description: Description[];
  gender?: string;
};

const Teacher = (teacher: TeacherProps) => {
  const teacherAvatarImage =
    teacher.gender && teacher.gender?.toUpperCase() === "FEMALE"
      ? "assets/teacher-female.png"
      : "assets/teacher-male.png";
  return (
    <div
      className={`relative mb-8 flex min-h-[463px] flex-col justify-center overflow-x-clip p-4 py-10`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-full min-w-[1296px] bg-cover bg-center ${
          teacher?.gender && teacher?.gender?.toUpperCase() === "FEMALE"
            ? "bg-teacher-female"
            : "bg-teacher-male"
        }`}
      ></div>
      <Row className="teacher-row" dir="rtl" gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <div className="teacher-image relative ">
            <Image
              preview={false}
              src={teacherAvatarImage}
              alt={teacher?.name}
            />
          </div>
        </Col>
        <Col xs={24} lg={16}>
          <div className="teacher-details mt-8">
            <div className="name mb-2 text-xl text-maqraaDarkBlue">
              {teacher?.name}
            </div>
            <div className="details">
              <ul className="list-none">
                {teacher?.description &&
                  !!teacher?.description?.length &&
                  teacher?.description?.map((detail) => (
                    <li key={detail?.id}>{detail.text}</li>
                  ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Teacher;
