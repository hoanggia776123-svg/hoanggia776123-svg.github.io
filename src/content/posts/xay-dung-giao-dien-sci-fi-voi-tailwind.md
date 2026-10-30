---
title: "Thiết kế giao diện phong cách Sci-Fi & Cyberpunk với Tailwind CSS"
description: "Khám phá cách phối màu neon, lưới không gian và viền ánh sáng tạo nên không gian phòng thí nghiệm tương lai."
pubDate: 2026-10-31
tags: ["Tailwind CSS", "UI/UX", "Sci-Fi"]
category: "Design & UI"
draft: false
readingTime: 6
---

## Triết lý thiết kế Cyber Minimalism

Phong cách giao diện phòng thí nghiệm viễn tưởng (Sci-Fi / Futuristic Lab) đòi hỏi sự cân bằng tinh tế giữa hiệu ứng ánh sáng và độ tương phản của chữ:

- **Màu nền tối có chiều sâu:** Thay vì màu đen tuyền `#000000`, sử dụng sắc xanh than sẫm như `#070b14` hoặc `#0d1527`.
- **Màu nhấn có chọn lọc:** Cyan (`#00f2fe`), Electric Blue (`#3b82f6`) và Violet (`#a855f7`) là 3 gam màu chủ đạo.
- **Typography rõ ràng:** Sans-serif cho phần đọc nội dung, Monospace cho các thẻ số liệu kỹ thuật và timestamp.

## Lưới không gian (Cyber Grid Pattern)

Chúng ta có thể tạo lưới nền công nghệ nhẹ nhàng bằng CSS thuần:

```css
.bg-cyber-grid {
  background-image: 
    linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

## Tôn trọng hiệu năng và khả năng truy cập

Không bao giờ hy sinh khả năng đọc để đổi lấy hiệu ứng. Luôn hỗ trợ `prefers-reduced-motion` để giảm bớt chuyển động đối với người dùng nhạy cảm với hiệu ứng động:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
