import React from "react";
import Slider from "react-slick";

const shows = [
  {
    id: 1,
    img: "/images/pbc-1.png",
  },
  {
    id: 2,
    img: "/images/pbc-2.png",
  },
  {
    id: 3,
    img: "/images/pbc-3.png",
  },
  {
    id: 4,
    img: "/images/pbc-4.png",
  },
  {
    id: 5,
    img: "/images/pbc-5.png",
  },
  {
    id: 6,
    img: "/images/pbc-6.png",
  },
  {
    id: 7,
    img: "/images/pbc-7.png",
  },
  {
    id: 8,
    img: "/images/pbc-8.png",
  },
  {
    id: 9,
    img: "/images/pbc-9.png",
  },
  {
    id: 10,
    img: "/images/pbc-10.png",
  },
];

const SlideShow = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-darkBlue py-[45px] overflow-x-hidden">
      <div data-aos="fade-up" className="slide-show">
        <Slider {...settings}>
          {shows.map((item) => (
            <SlideShowItem key={item.id} img={item.img}></SlideShowItem>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SlideShowItem = ({ img }) => {
  return (
    <div className="mx-[15px] h-[300px]">
      <img className="w-[100%] h-[100%] object-cover" src={img} alt="" />
    </div>
  );
};

export default SlideShow;
