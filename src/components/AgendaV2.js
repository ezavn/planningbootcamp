import React from "react";
import Heading from "./common/Heading";

const AgendaV2 = () => {
  return (
    <section
      id="agenda"
      className="md:pt-section md:pb-[80px] pt-[40px] pb-[40px]"
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
          <div>
            <div className="w-full agenda-btn --day1">
              <h3>NGÀY 1</h3>
              <p>THỨ NĂM (15/12/2022)</p>
            </div>
            <div className="md:mt-[35px] mt-[25px]">
              <div className="grid grid-cols-1">
                <AgendaTab time="12:30 - 13:30" breakTime>
                  Check-in, Giao lưu Networking
                </AgendaTab>
                <AgendaTab time="13:30 - 13:40">
                  Chào mừng & Hoạt động <br />
                  “Follow the Leader”
                </AgendaTab>
                <AgendaTab time="13:40 - 13:55">
                  Opening (Giới thiệu ActionCOACH <br /> Global, Viet Nam, CBD)
                </AgendaTab>
                <AgendaTab time="13:55 - 14:10">
                  Tổng quan chương trình Planning <br /> Bootcamp 26
                </AgendaTab>
                <AgendaTab time="14:10 - 14:55">Game kết nối</AgendaTab>
                <AgendaTab time="14:55 - 15:10">
                  Thông tin chung khi tham gia <br /> PBC 26
                </AgendaTab>
                <AgendaTab time="15:10 - 15:30" breakTime>
                  Nghỉ giải lao
                </AgendaTab>
                <AgendaTab time="15:30 - 16:30">
                  Mô hình 6 bước Xây dựng Doanh <br /> nghiệp thành công
                </AgendaTab>
                <AgendaTab time="16:30 - 17:35">
                  Thiết lập BHAG cho Doanh nghiệp <br /> - Mục tiêu 2023
                </AgendaTab>
                <AgendaTab time="17:35 - 19:05" breakTime>
                  Nghỉ ngơi. Dùng bữa tối (tự túc)
                </AgendaTab>
                <AgendaTab time="19:05 - 19:15">
                  Bắt đầu chương trình buổi tối
                </AgendaTab>
                <AgendaTab time="19:15 - 20:45">
                  Thiết lập BHAG cho Doanh nghiệp <br /> - Mục tiêu 2023 (tiếp
                  theo)
                </AgendaTab>
                <AgendaTab time="20:45 - 21:00">
                  Chia sẻ BFOs - Kết thúc ngày 1
                </AgendaTab>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full agenda-btn --day2">
              <h3>NGÀY 2</h3>
              <p>THỨ SÁU (16/12/2022)</p>
            </div>
            <div className="md:mt-[35px] mt-[25px]">
              <div className="grid grid-cols-1">
                <AgendaTab time="05:00 - 06:00" breakTime>
                  Hoạt động chạy bộ buổi sáng
                </AgendaTab>
                <AgendaTab time="07:00 - 08:00">
                  Check-in, Giao lưu Networking
                </AgendaTab>
                <AgendaTab time="08:00 - 08:15">
                  Chào mừng & Hoạt động <br /> “Follow the Leader”
                </AgendaTab>
                <AgendaTab time="08:15 - 09:00">
                  Tư duy và thói quen cốt lõi kiến tạo <br /> thành công
                </AgendaTab>
                <AgendaTab time="09:00 - 10:05">
                  Chuyên đề: Vận hành đồng bộ <br /> để thực thi xuất sắc
                </AgendaTab>
                <AgendaTab time="09:05 - 10:05">
                  Chuyên đề: Vận hành đồng bộ để <br /> thực thi xuất sắc
                </AgendaTab>
                <AgendaTab time="10:05 - 10:25" breakTime>
                  Nghỉ giải lao, dùng Tea-break
                </AgendaTab>
                <AgendaTab time="10:25 - 10:55">
                  Đánh giá tình hình Doanh nghiệp
                </AgendaTab>
                <AgendaTab time="10:55 - 11:55">Hoạt động Roundtable</AgendaTab>
                <AgendaTab time="11:55 - 12:00">Kết thúc buổi sáng</AgendaTab>
                <AgendaTab time="12:00 - 13:30" breakTime>
                  Nghỉ trưa, dùng cơm trưa
                </AgendaTab>
                <AgendaTab time="13:30 - 13:40">
                  Hoạt động “Follow the Leader” <br /> đầu giờ
                </AgendaTab>
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
                  "Gala Dinner Chủ đề: <br /> NEW YEAR - NEW OPPORTUNITIES"
                </AgendaTab>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full agenda-btn --day3">
              <h3>NGÀY 3</h3>
              <p>THỨ BẢY (17/12/2022)</p>
            </div>
            <div className="md:mt-[35px] mt-[25px]">
              <div className="grid grid-cols-1">
                <AgendaTab time="05:00 - 06:00" breakTime>
                  Miracle Morning - Buổi sáng <br /> diệu kỳ
                </AgendaTab>
                <AgendaTab time="08:00 - 08:10">
                  Hoạt động “Follow the Leader”
                </AgendaTab>
                <AgendaTab time="08:10 - 08:30">
                  Tổng hợp các hoạt động 2 <br /> ngày qua
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
                <AgendaTab time="11:35 - 11:45">
                  Whoosh & hướng dẫn buổi chiều
                </AgendaTab>
                <AgendaTab time="11:45 - 13:15">
                  Nghỉ trưa, dùng cơm trưa
                </AgendaTab>
                <AgendaTab time="13:15 - 13:25">
                  Hoạt động “Follow the Leader”
                </AgendaTab>
                <AgendaTab time="13:25 - 15:00">
                  Kế hoạch 1 trang giấy
                </AgendaTab>
                <AgendaTab time="15:00 - 15:20" breakTime>
                  Nghỉ giải lao
                </AgendaTab>
                <AgendaTab time="15:20 - 16:05">IVVM - Game</AgendaTab>
                <AgendaTab time="16:05 - 16:25">Giới thiệu PBC27</AgendaTab>
                <AgendaTab time="16:25 - 17:30">Viết thư và đánh giá</AgendaTab>
                <AgendaTab time="17:30 - 17:55">
                  WIFLE - Điều thú vị sau <br /> chương trình
                </AgendaTab>
                <AgendaTab time="17:55 - 18:00" breakTime>
                  Kết thúc chương trình PBC26
                </AgendaTab>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-[15px] text-[#C51111] italic text-[18px]">
          *Lịch trình có thể thay đổi và sẽ được chúng tôi cập nhật liên tục
        </p>
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
        className={`${gala ? "text-white" : "text-black"} ${
          end ? "text-[24px] uppercase" : ""
        } font-bold leading-[1.1] text-[14px]`}
      >
        {children}
      </span>
    </div>
  );
};

export default AgendaV2;
