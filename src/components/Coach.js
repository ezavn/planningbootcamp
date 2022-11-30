import React from "react";
import Heading from "./common/Heading";
import Slider from "react-slick";

const Coach = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
  };
  return (
    <section id="coach" className="relative bg-darkBlue">
      <img
        className="z-[0] absolute top-[-200px] right-0"
        src="/images/hand-1.png"
        alt=""
      />
      <div className="page-container relative z-[1]">
        <div className="md:pt-section py-sectionMB">
          <Heading
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            CÁC NHÀ HUẤN LUYỆN DOANH NGHIỆP TẠI <br /> PLANNING BOOTCAMP 26
          </Heading>
          <div className="hidden md:grid grid-cols-3 gap-x-[80px] gap-y-[30px] mb-[30px]">
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              img="images/rita.png"
              nickname="RITA"
              name="TÔ QUÝ NGỌC CHÂU"
              coach="BUSINESS COACH"
            ></CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              img="images/leo.png"
              nickname="LEO"
              name="VÕ THÁI LÂM"
              coach="BUSINESS COACH"
            ></CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="400"
              img="images/kaka.png"
              nickname="KAKA"
              name="LÊ NGỌC ĐĂNG"
              coach="BUSINESS COACH"
            ></CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              img="images/tony.png"
              nickname="TONY"
              name="THÁI SƠN"
              coach="BUSINESS COACH"
            ></CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              img="images/tamy.png"
              nickname="TAMY"
              name="LÊ THỊ NGỌC THẢO"
              coach="BUSINESS COACH"
            ></CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="400"
              img="images/david.png"
              nickname="DAVID"
              name="TRẦN XUÂN HÒA"
              coach="BUSINESS COACH"
            ></CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              img="images/emmy.png"
              nickname="EMMY"
              name="LÊ THỊ HẢI"
              coach="BUSINESS COACH"
            ></CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              img="images/martin.png"
              nickname="MARTIN"
              coach="BUSINESS COACH"
              line2
            >
              <span className="leading-[1]">NGUYỄN HẢI ĐĂNG</span>
            </CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="400"
              img="images/neo.png"
              nickname="NEO"
              name="NGUYỄN ĐÌNH BẢO"
              coach="BUSINESS COACH"
            ></CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              img="images/theo.png"
              nickname="THEO"
              name="VŨ BÁ THẾ"
              coach="BUSINESS COACH"
            ></CoachItem>
            {/* <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="200"
              img="images/jolie.png"
              nickname="JOLIE"
              coach="BUSINESS COACH"
              line2
            >
              <span className="leading-[1]">NGUYỄN HỒNG NHẬT LÝ</span>
            </CoachItem> */}
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              img="images/vova.png"
              nickname="VOVA"
              name="LÊ VIỆT CHUẨN"
              coach="BUSINESS COACH"
            ></CoachItem>
            <CoachItem
              data-aos="flip-left"
              data-aos-duration="1000"
              img="images/tracy.png"
              nickname="TRACY"
              name="THANH HÀ"
              coach="BUSINESS COACH"
            ></CoachItem>
          </div>
          <div className="block coach-slide md:hidden">
            <Slider {...settings}>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/rita.png"
                nickname="RITA"
                name="TÔ QUÝ NGỌC CHÂU"
                coach="BUSINESS COACH"
              ></CoachItem>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/leo.png"
                nickname="LEO"
                name="VÕ THÁI LÂM"
                coach="BUSINESS COACH"
              ></CoachItem>
              <CoachItem
                data-aos="flip-left"
                img="images/kaka.png"
                nickname="KAKA"
                name="LÊ NGỌC ĐĂNG"
                coach="BUSINESS COACH"
              ></CoachItem>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/tony.png"
                nickname="TONY"
                name="THÁI SƠN"
                coach="BUSINESS COACH"
              ></CoachItem>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/tamy.png"
                nickname="TAMY"
                name="LÊ THỊ NGỌC THẢO"
                coach="BUSINESS COACH"
              ></CoachItem>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/david.png"
                nickname="DAVID"
                name="TRẦN XUÂN HÒA"
                coach="BUSINESS COACH"
              ></CoachItem>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/emmy.png"
                nickname="EMMY"
                name="LÊ THỊ HẢI"
                coach="BUSINESS COACH"
              ></CoachItem>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/martin.png"
                nickname="MARTIN"
                coach="BUSINESS COACH"
                line2
              >
                <span className="leading-[1]">NGUYỄN HẢI ĐĂNG</span>
              </CoachItem>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/neo.png"
                nickname="NEO"
                name="NGUYỄN ĐÌNH BẢO"
                coach="BUSINESS COACH"
              ></CoachItem>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/theo.png"
                nickname="THEO"
                name="VŨ BÁ THẾ"
                coach="BUSINESS COACH"
              ></CoachItem>
              {/* <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/jolie.png"
                nickname="JOLIE"
                coach="BUSINESS COACH"
                line2
              >
                <span className="leading-[1]">NGUYỄN HỒNG NHẬT LÝ</span>
              </CoachItem> */}
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/vova.png"
                nickname="VOVA"
                name="LÊ VIỆT CHUẨN"
                coach="BUSINESS COACH"
              ></CoachItem>
              <CoachItem
                data-aos="flip-left"
                data-aos-duration="1000"
                img="images/tracy.png"
                nickname="TRACY"
                name="THANH HÀ"
                coach="BUSINESS COACH"
              ></CoachItem>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoachItem = ({
  img,
  nickname,
  name,
  coach,
  children,
  line2,
  ...props
}) => {
  return (
    <div {...props} className="relative">
      <img className="object-cover w-full h-full" src={img} alt="" />
      <div className="absolute bottom-[20px] left-[20px]">
        <p
          className={`${
            line2 ? "items-center" : "items-baseline"
          } text-[20px] font-bold flex gap-[5px]`}
        >
          <span className="text-[40px] font-bold">{nickname}</span>{" "}
          {name || children}
        </p>
        <p className="font-bold">{coach}</p>
      </div>
    </div>
  );
};

export default Coach;
