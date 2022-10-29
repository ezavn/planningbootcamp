import React from "react";
import Heading from "./common/Heading";

const Place = () => {
  return (
    <section id="place" className="flex flex-col md:flex-row bg-darkBlue">
      <div className="block md:flex items-start px-[15px] md:px-[20px] pt-[40px] md:pt-[80px] md:pb-[25px]">
        <img
          className="hidden md:block mr-[20px]"
          src="/images/place-1.png"
          alt=""
        />
        <div>
          <div className="ml-0 md:ml-[40px]">
            <Heading className="text-center md:text-left text-[32px] !mb-[15px] md:!mb-[30px]">
              ĐỊA ĐIỂM TỔ CHỨC
            </Heading>
            <p className="text-[12px] font-medium mb-[20px] md:mb-[50px]">
              <span className="font-bold text-[22px] md:text-[26px]">
                Hotel Fleur De Lys
              </span>{" "}
              <br /> 16 Nguyễn Huệ, Phường Lê Lợi, TP. Quy Nhơn, Bình Định
            </p>
          </div>
          <img className="hidden md:block" src="/images/place-2.png" alt="" />
        </div>
      </div>
      <div className="m-[15px] md:m-0">
        <img
          className="object-cover w-full h-full"
          src="/images/place-3.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Place;
