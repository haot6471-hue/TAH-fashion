# TAH Fashion — Yêu cầu dự án

Chốt ngày 23/11/2026 (ngày 1–2 của lộ trình).

## 1. Mục tiêu

Website bán quần áo thời trang của shop **TAH Fashion**: khách xem sản phẩm, chọn size, đặt hàng và
thanh toán; chủ shop tự quản lý sản phẩm và đơn hàng.

## 2. Phong cách giao diện

Dựa trên mẫu "Clothes Closet" trên TikTok mà chủ shop gửi:

- Nền trắng xám như bức tường gallery, nhiều khoảng trống, chữ in hoa giãn rộng.
- Sản phẩm treo trên **một thanh móc ngang**. Món đang chọn to hơn các món còn lại.
- Bấm vào một món: món đó nổi lên phía trước, phần còn lại bị làm mờ,
  có **thẻ giá đung đưa** cạnh sản phẩm.
- Đen trắng là chủ đạo, màu sắc đến từ chính ảnh sản phẩm.

## 3. Đối tượng khách hàng

Khách trẻ (18–30 tuổi), thích phong cách tối giản, mua chủ yếu trên điện thoại.

## 4. Chức năng

| Nhóm | Chức năng | Ngày |
|---|---|---|
| Xem hàng | Tủ đồ móc treo, lọc theo danh mục, trang chi tiết sản phẩm, chọn size, size hết hàng | 3–5 |
| Mua hàng | Giỏ hàng (lưu trên trình duyệt), miễn phí ship từ 500.000₫, đặt hàng COD | 6–7 |
| Tài khoản | Đăng ký, đăng nhập, xem lịch sử đơn hàng | 8–9 |
| Quản trị | Thêm/sửa/ẩn sản phẩm, xem và cập nhật trạng thái đơn hàng | 10–11 |
| Thanh toán online | VNPay (môi trường thử nghiệm trước, sau đó chuyển thật) | 12 |
| Chất lượng | Tối ưu điện thoại, SEO (tiêu đề, mô tả, sitemap), kiểm thử | 13–14 |
| Ra mắt | Triển khai lên Vercel, gắn tên miền | 15 |

## 5. Công nghệ

- **Next.js 15** (App Router, TypeScript) — giao diện và API trong một dự án.
- **Prisma** + SQLite khi chạy trên máy, **PostgreSQL** (Neon hoặc Vercel Postgres) khi chạy thật.
- **Vercel** để triển khai.
- Không dùng thư viện giao diện nặng; CSS thuần theo bộ token trong `src/app/globals.css`.

## 6. Quy ước

- Giá lưu bằng số nguyên VND (ví dụ `459000`), hiển thị `459.000₫`.
- Mỗi ngày trong lộ trình là một commit riêng để dễ theo dõi.
- Ảnh sản phẩm hiện tại là ảnh minh họa miễn phí từ Unsplash, sẽ thay bằng ảnh thật của shop.

## 7. Còn chờ chủ shop

- Logo
- Ảnh sản phẩm thật (nên chụp áo treo móc trên nền trắng)
- Thông tin liên hệ, chính sách đổi trả, phí ship chính thức
- Tài khoản VNPay thật (khi ra mắt)
