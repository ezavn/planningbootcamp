import React from "react";
import Heading from "./common/Heading";
import Slider from "react-slick";

const coaches = [
  {
    id: 1,
    img: "images/leo.png",
    nickname: "LEO",
    name: "VÕ THÁI LÂM",
    coach: "BUSINESS COACH",
  },
  {
    id: 2,
    img: "images/kaka.png",
    nickname: "KAKA",
    name: "LÊ NGỌC ĐĂNG",
    coach: "BUSINESS COACH",
  },
  {
    id: 3,
    img: "images/rita.png",
    nickname: "RITA",
    name: "TÔ QUÝ NGỌC CHÂU",
    coach: "BUSINESS COACH",
  },
  {
    id: 4,
    img: "images/tony.png",
    nickname: "TONY",
    name: "THÁI SƠN",
    coach: "BUSINESS COACH",
  },
  {
    id: 5,
    img: "images/tamy.png",
    nickname: "TAMY",
    name: "LÊ THỊ THẢO",
    coach: "BUSINESS COACH",
  },
];

const otherCoach = [
  {
    id: 1,
    img: "images/coach.png",
    nickname: "COACH",
    name: "NICKNAME",
    coach: "BUSINESS COACH",
  },
  {
    id: 2,
    img: "images/coach.png",
    nickname: "COACH",
    name: "NICKNAME",
    coach: "BUSINESS COACH",
  },
  {
    id: 3,
    img: "images/coach.png",
    nickname: "COACH",
    name: "NICKNAME",
    coach: "BUSINESS COACH",
  },
  {
    id: 4,
    img: "images/coach.png",
    nickname: "COACH",
    name: "NICKNAME",
    coach: "BUSINESS COACH",
  },
  {
    id: 5,
    img: "images/coach.png",
    nickname: "COACH",
    name: "NICKNAME",
    coach: "BUSINESS COACH",
  },
  {
    id: 6,
    img: "images/coach.png",
    nickname: "COACH",
    name: "NICKNAME",
    coach: "BUSINESS COACH",
  },
];

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
  };
  return (
    <section id="coach" className="relative bg-darkBlue">
      <img
        className="z-[0] absolute top-[-200px] right-0"
        src="/images/hand-1.png"
        alt=""
      />
      <div className="page-container relative z-[1]">
        <div className="md:pt-section pt-sectionMB pb-[10px]">
          <Heading data-aos="fade-right" data-aos-duration="1000">
            CÁC DIỄN GIẢ CHÍNH CỦA PBC 26
          </Heading>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="hidden md:grid grid-cols-3 gap-x-[80px] gap-y-[30px]"
          >
            {coaches.map((item) => (
              <CoachItem key={item.id} item={item}></CoachItem>
            ))}
          </div>
          <div className="block coach-slide md:hidden">
            <Slider {...settings}>
              {coaches.map((item) => (
                <CoachItem key={item.id} item={item}></CoachItem>
              ))}
            </Slider>
          </div>
        </div>
        <div className="pt-section">
          <Heading data-aos="fade-up" data-aos-duration="1000">
            CÁC NHÀ HUẤN LUYỆN DOANH NGHIỆP <br />
            THAM GIA PHẦN CHIA SẺ ROUNDTABLE PBC 26
          </Heading>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="hidden md:grid grid-cols-3 gap-x-[80px] gap-y-[30px]"
          >
            {otherCoach.map((item) => (
              <CoachItem key={item.id} item={item}></CoachItem>
            ))}
          </div>
          <div className="coach-slide block md:hidden pb-[40px] md:pb-0">
            <Slider {...settings}>
              {otherCoach.map((item) => (
                <CoachItem key={item.id} item={item}></CoachItem>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

const CoachItem = ({ item: { img, nickname, name, coach } }) => {
  return (
    <div className="relative">
      <img className="object-cover w-full h-full" src={img} alt="" />
      <div className="absolute bottom-[20px] left-[20px]">
        <p className="text-[20px] font-bold">
          <span className="text-[40px] font-bold">{nickname}</span> {name}
        </p>
        <p className="font-bold">{coach}</p>
      </div>
    </div>
  );
};

export default Coach;
