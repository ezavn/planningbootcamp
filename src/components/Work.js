import React from "react";
import Heading from "./common/Heading";

const Work = () => {
  return (
    <section className="relative work bg-darkBlue md:py-section py-sectionMB">
      <img
        className="md:block hidden absolute bottom-[30px] left-0 z-[0]"
        src="/images/hand-2.png"
        alt=""
      />
      <div className="page-container">
        <Heading
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center"
        >
          HOẠT ĐỘNG NỔI BẬT TẠI PBC 26
        </Heading>
        <div data-aos="fade-right" data-aos-duration="1000">
          <WorkItem
            className="mb-[40px] md:mb-[50px]"
            title="Hoạt động đi bộ buổi sáng & Miracle Morning"
            img="/images/work-1.jpg"
            desc="Đội ngũ Nhà huấn luyện Doanh nghiệp của CBD Firm cùng các Chủ doanh nghiệp & Đội ngũ tham gia hoạt động đi bộ buổi sáng & Miracle Morning."
          ></WorkItem>
        </div>
        <WorkItem
          reverse
          hasBTN
          className="mb-[40px] md:mb-[50px]"
          title="Roundtable"
          img="/images/work-2.png"
          desc="RoundTable là phần chia sẻ mang tính chuyên sâu, thực chiến của các Nhà Huấn luyện Doanh nghiệp của CBD Firm và các Chủ doanh nghiệp đang là khách hàng của CBD Firm về các vấn đề mà nhiều Doanh nghiệp đang phải đối mặt."
        ></WorkItem>
        <WorkItem
          className="mb-[40px] md:mb-[50px]"
          title='Chuyên đề "Vận hành đồng bộ để thực thi xuất sắc"'
          img="/images/work-3.png"
          desc="Chia sẻ từ Nhà huấn luyện Doanh nghiệp của CBD Firm về tầm quan trọng cũng như cách thức Vận hành đồng bộ để thực thi xuất sắc - Bước đệm quan trọng để Doanh nghiệp sẵn sàng cho những Mục tiêu năm 2023"
        ></WorkItem>
        <WorkItem
          reverse
          title="Lập Mục tiêu 2023 & Xây dựng Kế hoạch Quý I/2023"
          img="/images/work-4.png"
          desc="Cập nhật BHAG & Mục tiêu 10 năm cho doanh nghiệp. Cũng như lập Mục tiêu 2023 & xây dựng Kế hoạch 90 ngày cho quý I/2023."
        ></WorkItem>
      </div>
    </section>
  );
};

const WorkItem = ({ title, desc, img, reverse, hasBTN, className }) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row items-center gap-[30px] md:gap-[80px] ${className} ${
        reverse ? "flex-col md:flex-row-reverse" : ""
      }`}
    >
      <div data-aos="fade-right" data-aos-duration="1000" className="flex-1">
        <h3 className="work-heading font-bold text-[24px] md:text-[32px] text-lightBlue1 leading-[1.2] md:mb-[30px] md:pb-[30px] mb-[15px] pb-[15px]">
          {title}
        </h3>
        <p>{desc}</p>
        {hasBTN && (
          <a
            className="mt-[20px] md:mt-[35px] gap-[10px] inline-flex items-center h-[47px] px-[25px] border border-lightBlue1 rounded-[6px]"
            href="/"
          >
            <span className="font-bold text-[20px]">Xem thêm</span>
            <img srcSet="/icons/arrow-icon.png 2x" alt="" />
          </a>
        )}
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="w-auto md:w-[614px] flex-shrink-0 rounded-[30px]"
      >
        <img className="rounded-[30px]" src={img} alt="" />
      </div>
    </div>
  );
};

export default Work;
