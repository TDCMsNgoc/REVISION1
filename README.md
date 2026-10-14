# PHẦN MỀM TRẮC NGHIỆM 40 CÂU HỎI NGẪU NHIÊN - REVISION 1

Phần mềm trắc nghiệm ngữ pháp tiếng Anh tổng hợp 40 câu hỏi ngẫu nhiên từ ngân hàng 80 câu có sẵn, bao gồm 4 chuyên đề cốt lõi:
1. **Present Tenses (Các thì Hiện tại)**: Hiện tại đơn, Hiện tại tiếp diễn, Hiện tại hoàn thành, Hiện tại hoàn thành tiếp diễn.
2. **Past Tenses (Các thì Quá khứ)**: Quá khứ đơn, Quá khứ tiếp diễn, Quá khứ hoàn thành, Quá khứ hoàn thành tiếp diễn.
3. **Future Tenses (Các thì Tương lai)**: Tương lai đơn, Be going to, Tương lai tiếp diễn, Tương lai hoàn thành.
4. **Verb Patterns (Dạng động từ)**: Gerunds & Infinitives (V-ing, to-V, bare V, Passive Gerunds...).

---

## 🌟 ĐẶC ĐIỂM NỔI BẬT

### 1. Thuật toán chọn 40 câu ngẫu nhiên và xáo trộn hoàn hảo
- Mỗi lần bắt đầu bài thi hoặc nhấn **"Đề ngẫu nhiên mới" / "Làm lại bài thi"**:
  - Hệ thống tự động chọn ngẫu nhiên **10 câu từ Present Tenses** (trong 20 câu).
  - Chọn ngẫu nhiên **10 câu từ Past Tenses** (trong 20 câu).
  - Chọn ngẫu nhiên **10 câu từ Future Tenses** (trong 20 câu).
  - Chọn ngẫu nhiên **10 câu từ Verb Patterns** (trong 20 câu).
  - Xáo trộn (Fisher-Yates Shuffle) toàn bộ 40 câu theo thứ tự ngẫu nhiên hoàn toàn.
  - Tự động gán lại số thứ tự từ **Câu 1 đến Câu 40**.

### 2. Thiết kế hiển thị chuẩn theo yêu cầu đề bài
- **Cùng nằm trên 1 khung duy nhất trên điện thoại / iPad**:
  - Câu hỏi và 4 phương án trả lời (A, B, C, D) nằm trọn vẹn trong **MỘT KHUNG THẺ DUY NHẤT** (`.quiz-card-unified`), không bị tách rời hay ngắt quãng bởi các dấu chấm lửng như phiên bản cũ.
  - Phù hợp tuyệt đối với thao tác một chạm trên màn hình cảm ứng điện thoại và máy tính bảng.
- **Khung câu hỏi đặt bên dưới cùng khi hiển thị trên điện thoại / iPad**:
  - Trên **Desktop**: Bảng danh sách 40 câu hỏi (Question Palette) nằm gọn ở cột bên trái (`order: 1`), khung làm bài nằm ở bên phải (`order: 2`).
  - Trên **Điện thoại và iPad (Màn hình <= 1024px)**: Khung làm bài (câu hỏi + đáp án) được ưu tiên hiển thị ở trên cùng (`order: 1`), và **Khung 40 câu hỏi được đặt ở BÊN DƯỚI CÙNG (`order: 2`)**, giúp người học tập trung đọc đề và chọn đáp án trước, sau đó cuộn xuống để xem toàn bộ bảng 40 câu hoặc bấm chuyển câu nhanh.

### 3. Đầy đủ tiện ích thi trực tuyến TDC
- **Đồng hồ đếm ngược 45:00**: Tự động chuyển màu đỏ cảnh báo khi còn dưới 5 phút.
- **Đánh dấu cờ (Flag)**: Gắn cờ các câu khó để xem lại, icon 🚩 nổi bật trên bảng số câu.
- **Trạng thái màu sắc trực quan**:
  - 🔴 **Viền đỏ, nền trắng, chữ đỏ**: Câu đang xem / đang làm.
  - 🔵 **Màu xanh dương**: Câu đã làm.
  - ⚪ **Màu trắng viền xanh nhạt**: Câu chưa làm.
  - 🚩 **Có icon cờ**: Câu cần xem lại.
- **Màn hình chấm điểm & Giải thích chi tiết 40 câu**:
  - Chấm điểm trên thang 40 và quy đổi sang **thang điểm 10** chuẩn xác.
  - Phân tích chi tiết số câu đúng của từng chủ đề (Ví dụ: Present: 9/10, Past: 8/10, Future: 10/10, Verb Patterns: 9/10).
  - Xem lại toàn bộ 40 câu với đáp án sinh viên đã chọn, đáp án chính xác (màu xanh lá), công thức ngữ pháp, dấu hiệu nhận biết và dịch nghĩa tiếng Việt chi tiết.
- **Phím tắt nhanh trên máy tính**:
  - Phím `1, 2, 3, 4` hoặc `A, B, C, D` để chọn đáp án.
  - Phím `<-` và `->` để lùi / tiến câu hỏi.
  - Phím `F` để bật / tắt cờ xem lại.

---

## 🚀 HƯỚNG DẪN CHẠY THỬ TRÊN MÁY LOCAL

### Cách 1: Chạy bằng file Batch (1-Click)
- Click đúp vào file **`Chay_Ung_Dung.bat`**.
- Trình duyệt sẽ tự động mở trang web thi tại: `http://localhost:8085`

### Cách 2: Chạy trực tiếp file HTML
- Nhấp đúp vào file **`index.html`** để mở trực tiếp trong bất kỳ trình duyệt nào (Chrome, Edge, Safari, Firefox).

### Cách 3: Mở thử nghiệm trên Điện thoại / iPad (Cùng mạng Wi-Fi)
- Khi chạy qua `Chay_Ung_Dung.bat`, cửa sổ dòng lệnh sẽ hiển thị địa chỉ IP nội bộ, ví dụ:
  ```
  http://192.168.1.15:8085
  ```
- Nhập địa chỉ trên vào trình duyệt Safari trên iPad hoặc Chrome trên điện thoại để trải nghiệm bài thi trực tiếp.
