import React from "react";
import HomeLayout from "@/components/layouts/HomeLayout";
import TeachersList from "@/components/teachers/TeachersList";
import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { Breadcrumb } from "antd";
import Link from "next/link";

const TeachersPage = () => {
  return (
    <div>
      <HomeLayout navbarShadow={true} navbarStatic={true} redirectNavbar={true}>
        <div className="overflow-x-clip pb-[200px] pt-[30px]">
          <div className="container">
            <Breadcrumb
              className="custom-breadcrumb mb-8"
              items={[
                {
                  title: <Link href="/">{GLOBAL.NAVBAR.HOME}</Link>,
                },
                {
                  title: HOME.TEACHERS.TITLE,
                },
              ]}
            />

            <div className="page-title mb-12 text-2xl font-semibold text-maqraaDarkBlue">
              {HOME.TEACHERS.TITLE}
            </div>
          </div>
          <TeachersList />
        </div>
      </HomeLayout>
    </div>
  );
};
export default TeachersPage;
