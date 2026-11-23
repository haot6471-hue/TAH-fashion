# TAH Fashion

Website bán quần áo thời trang của shop TAH Fashion, làm bằng Next.js.
Giao diện kiểu "tủ đồ móc treo": sản phẩm treo trên một thanh ngang, bấm vào món nào thì món đó nổi lên kèm thẻ giá.

Yêu cầu chi tiết: [docs/YEU-CAU.md](docs/YEU-CAU.md)

## Chạy trên máy

Cần Node.js 20 trở lên.

```bash
npm install
cp .env.example .env
npm run dev
```

Mở http://localhost:3000

## Cấu trúc thư mục

```
src/
  app/          các trang (App Router)
  components/   thành phần giao diện dùng lại
  lib/          dữ liệu, kiểu dữ liệu, hàm tiện ích
public/
  products/     ảnh sản phẩm
docs/           tài liệu dự án
```

## Lộ trình 15 ngày

| Ngày | Nội dung |
|---|---|
| 1–2 | Chốt yêu cầu, tên shop, phong cách, công nghệ, tạo repo |
| 3–5 | Giao diện: tủ đồ, danh mục, trang chi tiết |
| 6–7 | Giỏ hàng, đặt hàng COD |
| 8–9 | Cơ sở dữ liệu, tài khoản khách hàng |
| 10–11 | Trang quản trị |
| 12 | Thanh toán online (VNPay) |
| 13 | Tối ưu điện thoại, SEO |
| 14 | Kiểm thử |
| 15 | Ra mắt trên Vercel |

## Ảnh

Ảnh sản phẩm hiện là ảnh minh họa miễn phí từ [Unsplash](https://unsplash.com/license)
(Avtar Singh, H Co, Caio Coelho, Tobias Tullius, Cate Bligh, Pesce Huang).
