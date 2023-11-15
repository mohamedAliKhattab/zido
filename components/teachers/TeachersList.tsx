import { GLOBAL, HOME } from "@/constants/i18n/ar";
import { teachersList } from "@/constants/teachersList";
import { MainButton } from "@/utils/buttons";
import TeacherDetails from "@/utils/teachers/TeacherDetails";
import React, { useEffect, useState } from "react";
import Teacher from "@/components/teachers/Teacher";

const TeachersList = () => {
  const pageSize = 5;
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [teachersData, setTeachersData] = useState<any[]>([]);

  const getData = () => {
    const teachersLength = teachersList?.length || 0;
    setPagesCount(Math.ceil(teachersLength / pageSize));
    if (teachersList && teachersList?.length) {
      let allData: any[] = [];
      for (let i = 0; i < currentPage; i++) {
        const allDataList = teachersList;
        const selectedData = allDataList.slice(
          i * pageSize,
          pageSize * (i + 1)
        );
        allData.push(...selectedData);
      }
      setTeachersData([...allData]);
    }
  };

  useEffect(() => {
    getData();
  }, [currentPage]);
  return (
    <section className="teachersList">
      <div className="container">
        <div className="">
          {teachersData &&
            !!teachersData?.length &&
            teachersData.map((teacher) => (
              <div
                data-aos="fade-right"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                key={teacher.id}
              >
                <Teacher {...teacher} />
              </div>
            ))}

          {teachersData &&
            !!teachersData?.length &&
            pagesCount > currentPage && (
              <MainButton
                color="yellow"
                text={GLOBAL.VIEW_MORE}
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
                classNameList="mx-auto mt-12"
              />
            )}
        </div>
      </div>
    </section>
  );
};
export default TeachersList;
