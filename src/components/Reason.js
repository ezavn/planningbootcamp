import React from "react";
import Heading from "./common/Heading";
import Slider from "react-slick";

const Reason = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="reason bg-[url('../public/images/reason-bg.png')] py-sectionMB md:py-section bg-center bg-no-repeat bg-cover">
      <div className="page-container--fluid">
        <Heading
          className="text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          7 LÝ DO <br /> ĐỂ CHỦ DOANH NGHIỆP & ĐỘI NGŨ THAM DỰ PBC 26
        </Heading>
        <div className="grid-cols-4 gap-[40px] md:grid hidden">
          <ReasonItem
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="0"
            icon="icons/reason-icon1.png"
            title="Lý do 1"
          >
            <p>
              Thiết lập Mục tiêu <br /> năm 2023.
            </p>
          </ReasonItem>
          <ReasonItem
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            icon="icons/reason-icon2.png"
            title="Lý do 2"
          >
            <p>
              Lập kế hoạch Hành động 90 <br /> ngày cho Quý I/ 2023.
            </p>
          </ReasonItem>
          <ReasonItem
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            icon="icons/reason-icon3.png"
            title="Lý do 3"
          >
            <p>
              Tìm được các BFOs mạnh <br /> mẽ để thực thi xuất sắc <br /> hoàn
              thành mục tiêu.
            </p>
          </ReasonItem>
          <ReasonItem
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            icon="icons/reason-icon4.png"
            title="Lý do 4"
          >
            <p>
              Phát triển các nhà lãnh đạo <br />
              tiềm năng trong doanh <br /> nghiệp, để mỗi nhân sự là <br /> một
              nhà lãnh đạo trong <br /> công việc của mình.
            </p>
          </ReasonItem>
        </div>
        <div className="max-w-[1160px] grid-cols-3 gap-[40px] mx-auto mt-[40px] hidden md:grid">
          <ReasonItem
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            icon="icons/reason-icon5.png"
            title="Lý do 5"
          >
            <p>
              Tăng cường vận hành đồng <br /> bộ giữa đội ngũ và chủ <br />{" "}
              doanh nghiệp.
            </p>
          </ReasonItem>
          <ReasonItem
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            icon="icons/reason-icon6.png"
            title="Lý do 6"
          >
            <p>
              Học hỏi kinh nghiệm từ <br />
              cộng đồng doanh chủ của <br />
              ActionCOACH CBD firm.
            </p>
          </ReasonItem>
          <ReasonItem
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            icon="icons/reason-icon7.png"
            title="Lý do 7"
          >
            <p>
              Cách thức Vận hành đồng <br /> bộ để thực thi xuất sắc.
            </p>
          </ReasonItem>
        </div>
        <div className="reason-slide block md:hidden relative z-[1]">
          <Slider {...settings}>
            <ReasonItem
              className="min-h-[428px]"
              icon="icons/reason-icon1.png"
              title="Lý do 1"
            >
              <p>
                Thiết lập Mục tiêu <br /> năm 2023.
              </p>
            </ReasonItem>
            <ReasonItem
              className="min-h-[428px]"
              icon="icons/reason-icon2.png"
              title="Lý do 2"
            >
              <p>
                Lập kế hoạch Hành động 90 <br /> ngày cho Quý I/ 2023.
              </p>
            </ReasonItem>
            <ReasonItem
              className="min-h-[428px]"
              icon="icons/reason-icon3.png"
              title="Lý do 3"
            >
              <p>
                Tìm được các BFOs mạnh <br /> mẽ để thực thi xuất sắc <br />{" "}
                hoàn thành mục tiêu.
              </p>
            </ReasonItem>
            <ReasonItem
              className="min-h-[428px]"
              icon="icons/reason-icon4.png"
              title="Lý do 4"
            >
              <p>
                Phát triển các nhà lãnh đạo <br />
                tiềm năng trong doanh <br /> nghiệp, để mỗi nhân sự là <br />{" "}
                một nhà lãnh đạo trong <br /> công việc của mình.
              </p>
            </ReasonItem>
            <ReasonItem
              className="min-h-[428px]"
              icon="icons/reason-icon5.png"
              title="Lý do 5"
            >
              <p>
                Tăng cường vận hành đồng <br /> bộ giữa đội ngũ và chủ <br />{" "}
                doanh nghiệp.
              </p>
            </ReasonItem>
            <ReasonItem
              className="min-h-[428px]"
              icon="icons/reason-icon6.png"
              title="Lý do 6"
            >
              <p>
                Học hỏi kinh nghiệm từ <br />
                cộng đồng doanh chủ của <br />
                ActionCOACH CBD firm.
              </p>
            </ReasonItem>
            <ReasonItem
              className="min-h-[428px]"
              icon="icons/reason-icon7.png"
              title="Lý do 7"
            >
              <p>
                Cách thức Vận hành đồng <br /> bộ để thực thi xuất sắc.
              </p>
            </ReasonItem>
          </Slider>
        </div>
      </div>
    </section>
  );
};

const ReasonItem = ({ icon, title, children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`bg-[rgba(17,75,138,0.5)] rounded-[30px] border-[3px] border-lightBlue1 !flex flex-col items-center pt-[82px] pb-[20px] ${className}`}
    >
      <div className="mb-[30px]">
        <img className="w-[130px] h-[130px]" srcSet={`${icon} 2x`} alt="" />
      </div>
      <h4 className="text-[24px] font-semibold text-lightBlue1 uppercase mb-[10px]">
        {title}
      </h4>
      <div className="text-center">{children}</div>
    </div>
  );
};

export default Reason;
