import React from "react";
import Heading from "./common/Heading";

const Intro = () => {
  return (
    <section className="intro bg-darkBlue md:py-section py-sectionMB">
      <div className="page-container">
        <Heading data-aos="fade-down" data-aos-duration="1000">
          GIỚI THIỆU PLANNING BOOTCAMP 26
        </Heading>
        <div className="flex flex-col-reverse md:flex-row gap-[30px]">
          <div
            data-aos="fade-down"
            data-aos-duration="1000"
            className="flex-1 text-justify text-lightBlue2"
          >
            <p className="mb-[20px]">
              Kinh doanh mà KHÔNG LẬP KẾ HOẠCH là lập kế hoạch cho sự THẤT BẠI.
              <br />
              Lập KẾ HOẠCH mà không có THỰC THI thì tất cả chỉ là ẢO TƯỞNG.
            </p>
            <p className="mb-[20px]">
              Đó chính là lý do mà ActionCOACH CBD Firm đã dành 4 kỳ Planning
              Bootcamp - Lập kế hoạch hành động 90 ngày gần đây nhất cho Chủ đề
              THỰC THI. Bởi có tới 90% Doanh nghiệp không thể đạt được mục tiêu
              do khâu thực thi yếu kém.
            </p>
            <IntroDesc>
              PBC 22 tổ chức vào Tháng 12/2021 tại TP.HCM với Chủ đề "Thực thi
              xuất sắc".
            </IntroDesc>
            <IntroDesc>
              PBC 23 tổ chức vào Tháng 3/2022 tại TP.HCM với Chủ đề "Tư duy thực
              thi xuất sắc".
            </IntroDesc>
            <IntroDesc>
              PBC 24 tổ chức vào Tháng 6/2022 tại Hà Nội với Chủ đề "6 chìa khóa
              để thực thi xuất sắc".
            </IntroDesc>
            <IntroDesc>
              PBC 25 tổ chức vào Tháng 9/2022 tại TP.HCM với Chủ đề "Gắn kết đội
              ngũ để thực thi xuất sắc".
            </IntroDesc>
            <p>
              Và tại Chương trình Lập kế hoạch Hành động 90 ngày - Planning
              Bootcamp 26 (PBC 26) do ActionCOACH CBD Firm tổ chức tại Thành phố
              Quy Nhơn, Bình Định cũng sẽ tiếp tục tập trung vào vấn đề THỰC THI
              với Chủ đề "VẬN HÀNH ĐỒNG BỘ ĐỂ THỰC THI XUẤT SẮC". Đây sẽ là
              Chương trình Lập kế hoạch Hành động cuối cùng của năm 2022.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="md:w-[570px] flex-shrink-0"
          >
            <img
              className="w-[100%] object-cover"
              src="/images/intro.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const IntroDesc = ({ children }) => {
  return (
    <div className="flex items-baseline gap-[10px]">
      <img
        className="w-[14px] h-[14px] object-cover"
        src="/icons/check-icon.png"
        alt=""
      />
      <p className="text-lightBlue2">{children}</p>
    </div>
  );
};

export default Intro;
