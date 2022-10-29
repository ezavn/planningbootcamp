import React from "react";
import Heading from "./common/Heading";

const Agenda = () => {
  return (
    <section
      id="agenda"
      className="bg-darkBlue md:pt-section pt-sectionMB pb-[10px]"
    >
      <div className="page-container">
        <Heading
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center"
        >
          LỊCH TRÌNH PLANNING BOOTCAMP 26
        </Heading>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="grid grid-cols-1 md:grid-cols-3 gap-[30px]"
        >
          <img src="/images/agenda-1.png" alt="" />
          <img src="/images/agenda-2.png" alt="" />
          <img src="/images/agenda-3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Agenda;
