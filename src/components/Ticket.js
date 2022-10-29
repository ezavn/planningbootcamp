import React from "react";
import Heading from "./common/Heading";
import Slider from "react-slick";
import { usePopup } from "../contexts/popupContext";

const Ticket = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    autoplaySpeed: 2000,
  };
  const { setShow } = usePopup();
  return (
    <section
      id="buy-ticket"
      className="ticket py-sectionMB bg-[url('../public/images/ticket-bg.png')] bg-center bg-no-repeat bg-cover"
    >
      <div className="max-w-[1480px] mx-[15px] md:mx-auto">
        <Heading
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center"
        >
          KHOẢN ĐẦU TƯ CHO PLANNING BOOTCAMP 26
        </Heading>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-[80px] mb-[75px]">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="ticket-item"
          >
            <div className="ticket-header">
              <h3 className="title">
                <span>DIAMOND</span> <br /> MEMBER
              </h3>
              <p>MIỄN PHÍ HOÀN TOÀN</p>
            </div>
            <div className="ticket-content">
              <div>
                <p className="title">Người đi cùng:</p>
                <p className="desc">Phí GOLD MEMBER</p>
              </div>
              <button className="btn" onClick={() => setShow(true)}>
                MUA VÉ
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="ticket-item"
          >
            <div className="ticket-header --black">
              <h3 className="title">
                <span>GOLD</span> <br /> MEMBER
              </h3>
              <p>MIỄN PHÍ HOÀN TOÀN</p>
              <div className="condition">
                Khách hàng đang coaching 1:1, Mentoring
              </div>
            </div>
            <div className="ticket-content">
              <div>
                <p className="title">Phí chia sẻ:</p>
                <p className="desc">6.400.000 VND</p>
                <p className="more">
                  (Teabreak, 02 Ăn trưa, Tài liệu, Hội trường, Gala dinner)
                </p>
              </div>
              <button className="btn" onClick={() => setShow(true)}>
                MUA VÉ
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="ticket-item"
          >
            <div className="ticket-header">
              <h3 className="title">
                <span>MEMBER</span>
              </h3>
              <div className="condition">Thành viên BNI HCMC6</div>
            </div>
            <div className="ticket-content">
              <div>
                <p className="title">Phí chia sẻ:</p>
                <p className="desc">7.400.000 VND</p>
                <p className="more">
                  (Teabreak, 02 Ăn trưa, Tài liệu, Hội trường, Gala dinner)
                </p>
              </div>
              <button className="btn" onClick={() => setShow(true)}>
                MUA VÉ
              </button>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="ticket-item"
          >
            <div className="ticket-header">
              <h3 className="title">
                <span>VÉ TIÊU CHUẨN</span>
              </h3>
            </div>
            <div className="ticket-content">
              <div>
                <p className="title">Phí chia sẻ:</p>
                <p className="desc">8.900.000 VND</p>
                <p className="more">
                  (100% Phí huấn luyện, Teabreak, 02 Ăn trưa, Tài liệu, Hội
                  trường, Gala dinner)
                </p>
              </div>
              <button className="btn" onClick={() => setShow(true)}>
                MUA VÉ
              </button>
            </div>
          </div>
        </div>
        <div className="ticket-slide block md:hidden mb-[40px]">
          <Slider {...settings}>
            <div className="ticket-item">
              <div className="ticket-header header-1">
                <h3 className="title">
                  <span>DIAMOND</span> <br /> MEMBER
                </h3>
                <p>MIỄN PHÍ HOÀN TOÀN</p>
              </div>
              <div className="ticket-content">
                <div>
                  <p className="title">Người đi cùng:</p>
                  <p className="desc">Phí GOLD MEMBER</p>
                </div>
                <a className="btn" href="/">
                  MUA VÉ
                </a>
              </div>
            </div>
            <div className="ticket-item">
              <div className="ticket-header --black header-2">
                <h3 className="title">
                  <span>GOLD</span> <br /> MEMBER
                </h3>
                <p>MIỄN PHÍ HOÀN TOÀN</p>
                <div className="condition">
                  Khách hàng đang coaching 1:1, Mentoring
                </div>
              </div>
              <div className="ticket-content">
                <div>
                  <p className="title">Phí chia sẻ:</p>
                  <p className="desc">6.400.000 VND</p>
                  <p className="more">
                    (Teabreak, 02 Ăn trưa, Tài liệu, Hội trường, Gala dinner)
                  </p>
                </div>
                <a className="btn" href="/">
                  MUA VÉ
                </a>
              </div>
            </div>
            <div className="ticket-item">
              <div className="ticket-header header-3">
                <h3 className="title">
                  <span>MEMBER</span>
                </h3>
                <div className="condition">Thành viên BNI HCMC6</div>
              </div>
              <div className="ticket-content">
                <div>
                  <p className="title">Phí chia sẻ:</p>
                  <p className="desc">7.400.000 VND</p>
                  <p className="more">
                    (Teabreak, 02 Ăn trưa, Tài liệu, Hội trường, Gala dinner)
                  </p>
                </div>
                <a className="btn" href="/">
                  MUA VÉ
                </a>
              </div>
            </div>
            <div className="ticket-item">
              <div className="ticket-header header-4">
                <h3 className="title">
                  <span>VÉ TIÊU CHUẨN</span>
                </h3>
              </div>
              <div className="ticket-content">
                <div>
                  <p className="title">Phí chia sẻ:</p>
                  <p className="desc">8.900.000 VND</p>
                  <p className="more">
                    (100% Phí huấn luyện, Teabreak, 02 Ăn trưa, Tài liệu, Hội
                    trường, Gala dinner)
                  </p>
                </div>
                <a className="btn" href="/">
                  MUA VÉ
                </a>
              </div>
            </div>
          </Slider>
        </div>
        <div className="mx-auto text-center">
          <p className="text-[18px] md:text-[24px] font-semibold mb-[20px] md:mb-[32px]">
            * Giá trên đã bao gồm{" "}
            <span className="text-[#53F9DA]">VAT & Tài liệu</span> <br />* Đăng
            ký và thanh toán trước ngày{" "}
            <span className="text-[#53F9DA]">30/11/2022</span>
          </p>
          <div className="h-[59px] w-[300px] md:w-[370px] border border-lightBlue1 rounded-[20px] mx-auto inline-flex items-center justify-center text-[18px] md:text-[24px] font-bold mb-[25px]">
            Thông tin thanh toán
          </div>
          <div className="pay-info">
            <p>
              Số tài khoản: <br />
              <span>2000 1485 1240 597</span>
            </p>
            <p>
              Tại: <br />
              <span>Eximbank - CN HCM</span>
            </p>
            <p>
              Chủ tài khoản: <br />
              <span>CÔNG TY TNHH CENTRAL BUSINESS DEVELOPMENT</span>
            </p>
          </div>
          <div className="flex items-center justify-center my-[25px]">
            <img src="/images/line.png" alt="" />
          </div>
          <div>
            <p>
              Lưu ý: <br />* Nội dung thanh toán:{" "}
              <span className="text-[#FFA678]">
                tencongty/tennguoithamdu_Số điện thoại_PBC26
              </span>{" "}
              <br />
              * Không chuyển sang kỳ PBC tiếp theo <br />* Không chuyển nhượng
              cho người khác
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
