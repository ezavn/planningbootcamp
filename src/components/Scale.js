import React from "react";
import Heading from "./common/Heading";

const Scale = () => {
  return (
    <section className="scale bg-[url('../public/images/scale-bg.png')] py-sectionMB md:py-section bg-center bg-no-repeat bg-cover">
      <div className="page-container">
        <Heading
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center"
        >
          QUY MÔ TỔ CHỨC{" "}
        </Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]">
          <ScaleItem
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="100"
            number="3"
          >
            <p className="font-bold leading-[1.4]">NGÀY LẬP KẾ HOẠCH</p>
          </ScaleItem>
          <ScaleItem
            data-aos="flip-left"
            data-aos-duration="1400"
            data-aos-delay="300"
            numberPlus="200+"
          >
            <p className="font-bold leading-[1.4]">
              CHỦ DOANH NGHIỆP <br /> THAM GIA
            </p>
          </ScaleItem>
          <ScaleItem
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="500"
            numberPlus="12+"
          >
            <p className="font-bold leading-[1.4]">
              NHÀ HUẤN LUYỆN <br /> DOANH NGHIỆP <br /> HÀNG ĐẦU VIỆT NAM
            </p>
          </ScaleItem>
          <ScaleItem
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="700"
          >
            <p className="font-bold leading-[1.2] text-[30px] md:text-[48px]">
              GALA DINNER
            </p>
          </ScaleItem>
        </div>
      </div>
    </section>
  );
};

const ScaleItem = ({ number, numberPlus, children, ...props }) => {
  return (
    <div
      {...props}
      className="bg-[url('../public/images/scale-border.png')] bg-center bg-no-repeat min-h-[150px] md:min-h-[246px] flex items-center justify-center flex-col text-center bg-contain w-full"
    >
      {number && (
        <p className="text-[40px] md:text-[128px] font-bold leading-[1] mb-[10px] md:mb-0">
          {number}
        </p>
      )}
      {numberPlus && (
        <p className="text-[30px] md:text-[90px] font-bold leading-[1] mb-[20px]">
          {numberPlus}
        </p>
      )}
      {children}
    </div>
  );
};

export default Scale;
