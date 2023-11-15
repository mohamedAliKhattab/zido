import { quranAchievements } from "@/constants/achievementsList";
import { HOME } from "@/constants/i18n/ar";
import { TotalAchievements } from "@/utils/icons";
import { Col, Image, Row } from "antd";
import React from "react";

const QuranAchievements = () => {
  let total = 0;
  if (quranAchievements && !!quranAchievements?.length) {
    quranAchievements.map(({ total: quranTotal }) => {
      total += quranTotal;
    });
  }

  return (
    <div>
      <div className="rtl-element achievements-header mb-16 flex flex-col justify-center gap-2">
        <div className="total">
          <span>{total}+</span>
          <span>{HOME.ACHIEVEMENTS.QURAN_STUDENTS}</span>
        </div>
      </div>
      {quranAchievements && !!quranAchievements?.length && (
        <Row
          style={{ flex: 1 }}
          gutter={[24, 54]}
          justify="space-between"
          align="stretch"
          className="achievements-list rtl-element !justify-center"
        >
          {quranAchievements.map((quran) => (
            <Col
              style={{
                flexGrow: 1,
              }}
              key={quran.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="xl:max-w-[19.5%]"
            >
              <div className="achievement-card  flex min-h-[150px] flex-col items-center bg-transparent">
                <div className="achievement-total lg:text-4 relative flex min-h-[120px] min-w-[120px] items-center justify-center text-center text-2xl font-medium text-maqraaGray-100 md:text-2xl xl:text-4xl 2xl:min-h-[150px] 2xl:min-w-[150px] 2xl:text-[45px]">
                  <div className="absolute left-[50%] top-[50%] h-full w-full translate-x-[-50%] translate-y-[-50%]">
                    <Image
                      preview={false}
                      src="assets/achievements/circle-border.svg"
                      alt="bg"
                      wrapperClassName="h-full w-full"
                      className="h-full w-full object-scale-down object-center"
                    />
                  </div>
                  <span className="achievement-total-num relative z-[1] p-4">
                    {quran.total}
                  </span>
                </div>
                <div className="achievement-title">{quran.title}</div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
export default QuranAchievements;
