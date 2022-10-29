import React from "react";

const Slogan = () => {
  return (
    <div className="bg-[url('../public/images/slogan-bg.png')] bg-center bg-no-repeat bg-cover py-[30px]">
      <div className="page-container">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-bold text-justify md:text-center"
        >
          “Kinh doanh mà không có kế hoạch giống như leo núi mà không có bản đồ
          hay GPS. Bạn sẽ dần đi lạc và kiệt sức vì đói!” <br /> - Kevin J.
          Donaldson -
        </p>
      </div>
    </div>
  );
};

export default Slogan;
