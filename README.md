# 🚀 Sci-Fi / AI Lab Personal Portfolio

Một website Portfolio cá nhân hiện đại mang phong cách **Futuristic Tech / AI Laboratory**, được xây dựng với **Astro v5**, **TypeScript**, **Tailwind CSS** và triển khai tự động lên **GitHub Pages**.

---

## ⚡ Các tính năng nổi bật

- **Tốc độ siêu nhanh:** Xây dựng với Astro Static Site Generator (Zero JS mặc định).
- **Thiết kế Sci-Fi / AI Lab:** Phối màu Cyberpunk (Cyan, Electric Blue, Violet), lưới toạ độ động và các góc panel viễn tưởng.
- **Quản lý nội dung bằng Markdown:** Toàn bộ bài viết, dự án và lab experiments đều được lưu trong thư mục `src/content/` dưới dạng file `.md`.
- **6 Trang chuẩn mực:**
  1. **Home (`/`):** Hero giới thiệu, hệ thống kỹ năng, dự án nổi bật, bài viết mới nhất, lab preview, CTA liên hệ.
  2. **About (`/about/`):** Hồ sơ, mục tiêu, ma trận kỹ năng phân loại, timeline học tập & nút tải CV.
  3. **Posts (`/posts/`):** Blog kỹ thuật hỗ trợ tìm kiếm tức thì, lọc theo danh mục, mục lục tự động (TOC), thanh tiến độ đọc và nút copy code. Tự động ẩn bài viết nháp (`draft: true`).
  4. **Projects (`/projects/`):** Hồ sơ dự án có bộ lọc trạng thái (Hoàn thành / Đang phát triển), chi tiết vấn đề, giải pháp và liên kết GitHub / Demo.
  5. **Lab (`/lab/`):** Phòng nghiên cứu số với demo tương tác thực tế (Matrix Digital Rain, SHA-256 Crypto Hash).
  6. **Contact (`/contact/`):** Thông tin liên hệ, nút copy email và các kênh kết nối.
- **Tối ưu SEO & Khả năng truy cập:** Tự động tạo `sitemap.xml`, `robots.txt`, Open Graph metadata và hỗ trợ chế độ giảm chuyển động (`prefers-reduced-motion`).
- **CI/CD Tự động hóa:** Tích hợp GitHub Actions workflow triển khai trực tiếp lên GitHub Pages khi push commit.

---

## 🛠️ Hướng dẫn phát triển trên máy cục bộ (Local Development)

### 1. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 2. Khởi chạy máy chủ thử nghiệm
```bash
npm run dev
```
Trang web sẽ mở tại `http://localhost:4321`.

### 3. Kiểm tra và Build tĩnh
```bash
npm run build
npm run preview
```

---

## 📝 Hướng dẫn cá nhân hóa nội dung

### 1. Thay đổi thông tin cá nhân
Tìm kiếm và thay thế các placeholder sau trong mã nguồn:
- `[YOUR_NAME]`: Tên hiển thị của bạn (ví dụ: `Hoàng Gia`)
- `[YOUR_ROLE]`: Vị trí chuyên môn (ví dụ: `Full-Stack Developer / AI Explorer`)
- `[YOUR_BIO]`: Lời giới thiệu ngắn
- `[YOUR_EMAIL]`: Địa chỉ email thực tế của bạn
- Tệp CV: Đặt tệp CV của bạn vào `public/cv.pdf`

### 2. Thêm bài viết mới (Posts)
Tạo file Markdown mới trong `src/content/posts/ten-bai-viet.md`:
```yaml
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn về bài viết."
pubDate: 2026-10-30
tags: ["Astro", "Web Development"]
category: "Web Development"
draft: false
readingTime: 5
---

Nội dung bài viết viết bằng cú pháp Markdown thông thường...
```

### 3. Thêm dự án mới (Projects)
Tạo file Markdown mới trong `src/content/projects/ten-du-an.md`:
```yaml
---
title: "Tên dự án"
description: "Mô tả ngắn gọn về sản phẩm."
date: "2026-10"
techStack: ["TypeScript", "React", "Tailwind CSS"]
demoUrl: "https://demo-link.com"
repoUrl: "https://github.com/username/repo"
featured: true
status: "completed" # hoặc "in-progress", "archived"
---

## 1. Vấn đề đặt ra
...
## 2. Giải pháp thực hiện
...
```

### 4. Thêm thử nghiệm vào phòng thí nghiệm (Lab)
Tạo file Markdown trong `src/content/labs/ten-thu-nghiem.md`:
```yaml
---
title: "Tên thử nghiệm"
description: "Mô tả mục tiêu thử nghiệm."
category: "UI Effects" # hoặc "AI", "Web Experiments", "Tools"
status: "Completed" # hoặc "In Progress", "Exploring"
tags: ["Canvas", "WebGL"]
demoUrl: ""
repoUrl: ""
date: "2026-10"
---
```

---

## 🚢 Hướng dẫn triển khai lên GitHub Pages

Dự án đã có sẵn cấu hình tự động tại `.github/workflows/deploy.yml`. Để kích hoạt trên GitHub:

1. **Commit và Push toàn bộ mã nguồn lên GitHub:**
   ```bash
   git add .
   git commit -m "feat: complete futuristic portfolio website"
   git push -u origin main
   ```

2. **Cấu hình trên GitHub Repository:**
   - Truy cập vào repository của bạn: `https://github.com/hoanggia776123-svg/HGia.github.io`
   - Nhấn vào tab **Settings** (Cài đặt) -> chọn mục **Pages** ở thanh menu bên trái.
   - Tại mục **Build and deployment** -> **Source**, chọn **GitHub Actions**.

3. **Kiểm tra kết quả:**
   - Tab **Actions** sẽ tự động chạy workflow build và deploy.
   - Sau khoảng 1-2 phút, trang web của bạn sẽ hoạt động trực tiếp tại địa chỉ GitHub Pages của bạn!
