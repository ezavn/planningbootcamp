import React from "react";
import { useState } from "react";
import Heading from "./common/Heading";

const Agenda = () => {
  const [openAgenda1, setOpenAgenda1] = useState(true);
  const [openAgenda2, setOpenAgenda2] = useState(false);
  const [openAgenda3, setOpenAgenda3] = useState(false);
  const toggleAgenda1 = () => {
    setOpenAgenda1(!openAgenda1);
    setOpenAgenda2(false);
    setOpenAgenda3(false);
  };
  const toggleAgenda2 = () => {
    setOpenAgenda2(!openAgenda2);
    setOpenAgenda1(false);
    setOpenAgenda3(false);
  };
  const toggleAgenda3 = () => {
    setOpenAgenda3(!openAgenda3);
    setOpenAgenda2(false);
    setOpenAgenda1(false);
  };
  return (
    <section
      id="agenda"
      className="md:pt-section md:pb-[100px] pt-[40px] pb-[40px]"
    >
      <div className="page-container">
        <Heading
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-center"
        >
          LỊCH TRÌNH PLANNING BOOTCAMP 26
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px] md:gap-[28px]">
          <div
            className={`agenda-btn --day1 ${openAgenda1 ? "active" : ""}`}
            onClick={toggleAgenda1}
          >
            <h3>NGÀY 1</h3>
            <p>THỨ NĂM (15/12/2022)</p>
            <img
              className="agenda-dropdown"
              srcSet={`${
                openAgenda1 ? "/icons/up-icon.png" : "/icons/down-icon.png"
              } 2x`}
              alt=""
            />
          </div>
          {openAgenda1 ? (
            <div className="block agenda-1 md:hidden">
              <div className="grid grid-cols-1">
                <div>
                  <AgendaTab time="12:30 - 13:30" breakTime>
                    Check-in, Giao lưu Networking
                  </AgendaTab>
                  <AgendaTab time="13:30 - 13:40">
                    Chào mừng & Hoạt động <br />“ Follow the Leader”
                  </AgendaTab>
                  <AgendaTab time="13:40 - 13:55">
                    Opening (Giới thiệu ActionCOACH <br /> Global, Viet Nam,
                    CBD)
                  </AgendaTab>
                  <AgendaTab time="13:55 - 14:10">
                    Tổng quan chương trình Planning <br /> Bootcamp 26
                  </AgendaTab>
                  <AgendaTab time="14:10 - 14:55">
                    Game Tam sao thất bản hoặc <br />
                    Game truyền tin
                  </AgendaTab>
                  <AgendaTab time="14:55 - 15:10">
                    Thiết lập luật tham gia PBC 26
                  </AgendaTab>
                  <AgendaTab time="15:10 - 15:30" breakTime>
                    Nghỉ giải lao
                  </AgendaTab>
                </div>
                <div>
                  <AgendaTab time="15:30 - 16:30">
                    Mô hình 6 bước Xây dựng Doanh <br /> nghiệp thành công
                  </AgendaTab>
                  <AgendaTab time="16:30 - 16:35">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="16:35 - 17:35">
                    BHAG - Goal 2023 3-5 Ưu tiên
                  </AgendaTab>
                  <AgendaTab time="17:35 - 19:05" breakTime>
                    Ăn tối (tự túc)
                  </AgendaTab>
                  <AgendaTab time="19:05 - 19:15">Tập hợp</AgendaTab>
                  <AgendaTab time="19:15 - 20:45">
                    BHAG - Goal 2023 - <br />
                    TIẾP TỤC 3-5 Ưu tiên
                  </AgendaTab>
                  <AgendaTab time="20:45 - 21:00" breakTime>
                    Chia sẻ BFOs - Kết thúc
                  </AgendaTab>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className={`agenda-btn --day2 ${openAgenda2 ? "active" : ""}`}
            onClick={toggleAgenda2}
          >
            <h3>NGÀY 2</h3>
            <p>THỨ SÁU (16/12/2022)</p>
            <img
              className="agenda-dropdown"
              srcSet={`${
                openAgenda2 ? "/icons/up-icon.png" : "/icons/down-icon.png"
              } 2x`}
              alt=""
            />
          </div>
          {openAgenda2 ? (
            <div className="block agenda-2 md:hidden">
              <div className="grid grid-cols-1">
                <div>
                  <AgendaTab time="05:00 - 06:00" breakTime>
                    Chạy bộ buổi sáng
                  </AgendaTab>
                  <AgendaTab time="07:00 - 08:00">
                    Check-in, Giao lưu Networking
                  </AgendaTab>
                  <AgendaTab time="08:00 - 08:15">
                    Chào mừng & Hoạt động <br /> “ Follow the Leader”
                  </AgendaTab>
                  <AgendaTab time="08:15 - 09:00">
                    Tư duy và thói quen cốt lõi kiến tạo <br /> thành công
                  </AgendaTab>
                  <AgendaTab time="09:00 - 09:05">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="09:05 - 10:05">
                    Chuyên đề: Vận hành đồng bộ để <br /> thực thi xuất sắc
                  </AgendaTab>
                  <AgendaTab time="10:05 - 10:25" breakTime>
                    Nghỉ giải lao, dùng Tea-break
                  </AgendaTab>
                </div>
                <div>
                  <AgendaTab time="10:25 - 10:55">
                    Đánh giá tình hình Doanh nghiệp
                  </AgendaTab>
                  <AgendaTab time="10:55 - 11:00">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="11:00 - 11:05">
                    Hướng dẫn Round Table
                  </AgendaTab>
                  <AgendaTab time="11:05 - 11:10">
                    Phân luồng Round Table
                  </AgendaTab>
                  <AgendaTab time="11:10 - 11:55">
                    Hoạt động Round Table
                  </AgendaTab>
                  <AgendaTab time="11:55 - 12:00">
                    BKết thúc buổi sáng
                  </AgendaTab>
                  <AgendaTab time="12:00 - 13:30" breakTime>
                    Nghỉ trưa, dùng cơm trưa
                  </AgendaTab>
                </div>
                <div>
                  <AgendaTab time="13:30 - 13:40">Warm up đầu giờ</AgendaTab>
                  <AgendaTab time="13:40 - 13:55">
                    BFOs - Bài học nhận được từ <br />
                    Round table
                  </AgendaTab>
                  <AgendaTab time="13:55 - 15:10">
                    Kế hoạch quý 1/2023 & 5 cách gia <br /> tăng doanh thu & lợi
                    nhuận (5 ways)
                  </AgendaTab>
                  <AgendaTab time="15:10 - 15:30" breakTime>
                    Nghỉ giải lao
                  </AgendaTab>
                  <AgendaTab time="15:10 - 16:40">
                    Mục tiêu Q1/2023 và Chi tiết hành <br /> động quý 1/2023
                  </AgendaTab>
                  <AgendaTab time="16:40 - 17:00">
                    Tổng kết ngày đầu tiên & BFOs
                  </AgendaTab>
                  <AgendaTab time="18:00 -21:00" gala>
                    Gala Dinner
                  </AgendaTab>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className={`agenda-btn --day3 ${openAgenda3 ? "active" : ""}`}
            onClick={toggleAgenda3}
          >
            <h3>NGÀY 3</h3>
            <p>THỨ BẢY (17/12/2022)</p>
            <img
              className="agenda-dropdown"
              srcSet={`${
                openAgenda3 ? "/icons/up-icon.png" : "/icons/down-icon.png"
              } 2x`}
              alt=""
            />
          </div>
          {openAgenda3 ? (
            <div className="block agenda-3 md:hidden">
              <div className="grid grid-cols-1">
                <div>
                  <AgendaTab time="05:00 - 06:00" breakTime>
                    Miracle Morning
                  </AgendaTab>
                  <AgendaTab time="08:00 - 08:10">
                    Hoạt động “Follow the Leader”
                  </AgendaTab>
                  <AgendaTab time="08:10 - 08:30">
                    Tổng hợp các hoạt đồng 1,5 <br />
                    ngày qua
                  </AgendaTab>
                  <AgendaTab time="08:30 - 09:15">
                    Chi tiết Kế hoạch <br />
                    Quý 1/2023 (tiếp theo)
                  </AgendaTab>
                  <AgendaTab time="09:15 - 09:35" breakTime>
                    Nghỉ giải lao, dùng Tea-break
                  </AgendaTab>
                  <AgendaTab time="09:35 - 11:05">
                    Chi tiết Kế hoạch <br />
                    Quý 1/2023 (tiếp theo)
                  </AgendaTab>
                  <AgendaTab time="11:05 - 11:35">Chia sẻ BFOs</AgendaTab>
                </div>
                <div>
                  <AgendaTab time="11:35 - 11:45">
                    Whoosh & hướng dẫn buổi chiều
                  </AgendaTab>
                  <AgendaTab time="11:45 - 13:15">
                    Nghỉ trưa, dùng cơm trưa
                  </AgendaTab>
                  <AgendaTab time="13:15 - 13:25">
                    Hoạt động “Follow the Leader”
                  </AgendaTab>
                  <AgendaTab time="13:25 - 13:30">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="13:30 - 14:55">
                    Kế hoạch 1 trang giấy
                  </AgendaTab>
                  <AgendaTab time="14:55 - 15:15" breakTime>
                    Nghỉ giải lao
                  </AgendaTab>
                  <AgendaTab time="15:15 - 16:00">IVVM - Game</AgendaTab>
                </div>
                <div>
                  <AgendaTab time="16:00 - 16:05">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="16:05 - 16:20">Giới thiệu PBC27</AgendaTab>
                  <AgendaTab time="16:20 - 16:25">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="16:25 - 17:25" breakTime>
                    Viết thư, Phiếu đánh giá & Referrals
                  </AgendaTab>
                  <AgendaTab time="17:25 - 17:50">
                    WIFLE - Điều thú vị sau <br /> chương trình
                  </AgendaTab>
                  <AgendaTab time="17:50 - 18:00" end>
                    Kết thúc
                  </AgendaTab>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="hidden md:block">
          {openAgenda1 ? (
            <div className="agenda-1 mt-[35px]">
              <div className="grid grid-cols-3 gap-[28px]">
                <div data-aos="flip-left" data-aos-duration="1000">
                  <AgendaTab time="12:30 - 13:30" breakTime>
                    Check-in, Giao lưu Networking
                  </AgendaTab>
                  <AgendaTab time="13:30 - 13:40">
                    Chào mừng & Hoạt động <br />“ Follow the Leader”
                  </AgendaTab>
                  <AgendaTab time="13:40 - 13:55">
                    Opening (Giới thiệu ActionCOACH <br /> Global, Viet Nam,
                    CBD)
                  </AgendaTab>
                  <AgendaTab time="13:55 - 14:10">
                    Tổng quan chương trình Planning <br /> Bootcamp 26
                  </AgendaTab>
                  <AgendaTab time="14:10 - 14:55">
                    Game Tam sao thất bản hoặc <br />
                    Game truyền tin
                  </AgendaTab>
                  <AgendaTab time="14:55 - 15:10">
                    Thiết lập luật tham gia PBC 26
                  </AgendaTab>
                  <AgendaTab time="15:10 - 15:30" breakTime>
                    Nghỉ giải lao
                  </AgendaTab>
                </div>
                <div data-aos="flip-left" data-aos-duration="1000">
                  <AgendaTab time="15:30 - 16:30">
                    Mô hình 6 bước Xây dựng Doanh <br /> nghiệp thành công
                  </AgendaTab>
                  <AgendaTab time="16:30 - 16:35">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="16:35 - 17:35">
                    BHAG - Goal 2023 3-5 Ưu tiên
                  </AgendaTab>
                  <AgendaTab time="17:35 - 19:05" breakTime>
                    Ăn tối (tự túc)
                  </AgendaTab>
                  <AgendaTab time="19:05 - 19:15">Tập hợp</AgendaTab>
                  <AgendaTab time="19:15 - 20:45">
                    BHAG - Goal 2023 - <br />
                    TIẾP TỤC 3-5 Ưu tiên
                  </AgendaTab>
                  <AgendaTab time="20:45 - 21:00" breakTime>
                    Chia sẻ BFOs - Kết thúc
                  </AgendaTab>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {openAgenda2 ? (
            <div className="agenda-2 mt-[35px]">
              <div className="grid grid-cols-3 gap-[28px]">
                <div data-aos="flip-left" data-aos-duration="1000">
                  <AgendaTab time="05:00 - 06:00" breakTime>
                    Chạy bộ buổi sáng
                  </AgendaTab>
                  <AgendaTab time="07:00 - 08:00">
                    Check-in, Giao lưu Networking
                  </AgendaTab>
                  <AgendaTab time="08:00 - 08:15">
                    Chào mừng & Hoạt động <br /> “ Follow the Leader”
                  </AgendaTab>
                  <AgendaTab time="08:15 - 09:00">
                    Tư duy và thói quen cốt lõi kiến tạo <br /> thành công
                  </AgendaTab>
                  <AgendaTab time="09:00 - 09:05">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="09:05 - 10:05">
                    Chuyên đề: Vận hành đồng bộ để <br /> thực thi xuất sắc
                  </AgendaTab>
                  <AgendaTab time="10:05 - 10:25" breakTime>
                    Nghỉ giải lao, dùng Tea-break
                  </AgendaTab>
                </div>
                <div data-aos="flip-left" data-aos-duration="1000">
                  <AgendaTab time="10:25 - 10:55">
                    Đánh giá tình hình Doanh nghiệp
                  </AgendaTab>
                  <AgendaTab time="10:55 - 11:00">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="11:00 - 11:05">
                    Hướng dẫn Round Table
                  </AgendaTab>
                  <AgendaTab time="11:05 - 11:10">
                    Phân luồng Round Table
                  </AgendaTab>
                  <AgendaTab time="11:10 - 11:55">
                    Hoạt động Round Table
                  </AgendaTab>
                  <AgendaTab time="11:55 - 12:00">
                    BKết thúc buổi sáng
                  </AgendaTab>
                  <AgendaTab time="12:00 - 13:30" breakTime>
                    Nghỉ trưa, dùng cơm trưa
                  </AgendaTab>
                </div>
                <div data-aos="flip-left" data-aos-duration="1000">
                  <AgendaTab time="13:30 - 13:40">Warm up đầu giờ</AgendaTab>
                  <AgendaTab time="13:40 - 13:55">
                    BFOs - Bài học nhận được từ <br />
                    Round table
                  </AgendaTab>
                  <AgendaTab time="13:55 - 15:10">
                    Kế hoạch quý 1/2023 & 5 cách gia <br /> tăng doanh thu & lợi
                    nhuận (5 ways)
                  </AgendaTab>
                  <AgendaTab time="15:10 - 15:30" breakTime>
                    Nghỉ giải lao
                  </AgendaTab>
                  <AgendaTab time="15:10 - 16:40">
                    Mục tiêu Q1/2023 và Chi tiết hành <br /> động quý 1/2023
                  </AgendaTab>
                  <AgendaTab time="16:40 - 17:00">
                    Tổng kết ngày đầu tiên & BFOs
                  </AgendaTab>
                  <AgendaTab time="18:00 -21:00" gala>
                    Gala Dinner
                  </AgendaTab>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {openAgenda3 ? (
            <div className="agenda-3 mt-[35px]">
              <div className="grid grid-cols-3 gap-[28px]">
                <div data-aos="flip-left" data-aos-duration="1000">
                  <AgendaTab time="05:00 - 06:00" breakTime>
                    Miracle Morning
                  </AgendaTab>
                  <AgendaTab time="08:00 - 08:10">
                    Hoạt động “Follow the Leader”
                  </AgendaTab>
                  <AgendaTab time="08:10 - 08:30">
                    Tổng hợp các hoạt đồng 1,5 <br />
                    ngày qua
                  </AgendaTab>
                  <AgendaTab time="08:30 - 09:15">
                    Chi tiết Kế hoạch <br />
                    Quý 1/2023 (tiếp theo)
                  </AgendaTab>
                  <AgendaTab time="09:15 - 09:35" breakTime>
                    Nghỉ giải lao, dùng Tea-break
                  </AgendaTab>
                  <AgendaTab time="09:35 - 11:05">
                    Chi tiết Kế hoạch <br />
                    Quý 1/2023 (tiếp theo)
                  </AgendaTab>
                  <AgendaTab time="11:05 - 11:35">Chia sẻ BFOs</AgendaTab>
                </div>
                <div data-aos="flip-left" data-aos-duration="1000">
                  <AgendaTab time="11:35 - 11:45">
                    Whoosh & hướng dẫn buổi chiều
                  </AgendaTab>
                  <AgendaTab time="11:45 - 13:15">
                    Nghỉ trưa, dùng cơm trưa
                  </AgendaTab>
                  <AgendaTab time="13:15 - 13:25">
                    Hoạt động “Follow the Leader”
                  </AgendaTab>
                  <AgendaTab time="13:25 - 13:30">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="13:30 - 14:55">
                    Kế hoạch 1 trang giấy
                  </AgendaTab>
                  <AgendaTab time="14:55 - 15:15" breakTime>
                    Nghỉ giải lao
                  </AgendaTab>
                  <AgendaTab time="15:15 - 16:00">IVVM - Game</AgendaTab>
                </div>
                <div data-aos="flip-left" data-aos-duration="1000">
                  <AgendaTab time="16:00 - 16:05">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="16:05 - 16:20">Giới thiệu PBC27</AgendaTab>
                  <AgendaTab time="16:20 - 16:25">
                    Giới thiệu chuyên đề mới
                  </AgendaTab>
                  <AgendaTab time="16:25 - 17:25" breakTime>
                    Viết thư, Phiếu đánh giá & Referrals
                  </AgendaTab>
                  <AgendaTab time="17:25 - 17:50">
                    WIFLE - Điều thú vị sau <br /> chương trình
                  </AgendaTab>
                  <AgendaTab time="17:50 - 18:00" end>
                    Kết thúc
                  </AgendaTab>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

const AgendaTab = ({
  time,
  children,
  breakTime,
  className = "",
  gala,
  end,
}) => {
  return (
    <div
      className={`${className} ${breakTime ? "bg-[#B1E9F8]" : "bg-white"} ${
        gala ? "gala" : ""
      } flex items-center gap-[14px] pl-[15px] pr-[5px] md:px-[23px] py-[20px] rounded-[6px] mb-[10px] h-[65px]`}
    >
      <span
        className={`${
          gala ? "text-white" : "text-[#18264C]"
        } font-bold text-[14px]`}
      >
        {time}
      </span>
      <span
        className={`${
          gala ? "text-white text-[24px]" : "text-black text-[14px]"
        } ${
          end ? "text-[24px] uppercase" : "text-[14px]"
        } font-bold leading-[1.1]`}
      >
        {children}
      </span>
    </div>
  );
};

export default Agenda;
