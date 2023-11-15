import { Col, Image, Row } from "antd";
import React from "react";

type Description = { id: string; text: string };

type TeacherDetailsProps = {
  name: string;
  imageUrl?: string | null;
  description: Description[];
  gender?: string;
};
const TeacherDetails = ({
  name,
  imageUrl,
  description,
  gender,
}: TeacherDetailsProps) => {
  const teacherAvatarImage =
    gender && gender?.toUpperCase() === "FEMALE"
      ? "assets/teacher-female.png"
      : "assets/teacher-male.png";
  return (
    <Row className="teacher-row" dir="rtl" gutter={[24, 24]}>
      <Col xs={24} lg={12}>
        <div className="teacher-image relative ">
          <Image preview={false} src={teacherAvatarImage} alt={name} />
          <div className="arrow absolute hidden lg:block">
            <Image
              preview={false}
              src="assets/teachers-arrow.png"
              alt="arrow"
            />
          </div>
        </div>
      </Col>
      <Col xs={24} lg={12}>
        <div className="teacher-details mt-8">
          <div className="name mb-2 text-xl text-maqraaDarkBlue">{name}</div>
          <div className="details">
            <ul className="list-none">
              {description &&
                !!description?.length &&
                description?.map((detail) => <li>{detail.text}</li>)}
            </ul>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default TeacherDetails;
