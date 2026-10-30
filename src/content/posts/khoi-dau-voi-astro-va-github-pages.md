---
title: "Bắt đầu hành trình với Astro và GitHub Pages"
description: "Ghi chú quá trình thiết lập và triển khai portfolio tĩnh tốc độ cao với kiến trúc hiện đại."
pubDate: 2026-10-30
tags: ["Astro", "Web Development", "GitHub Pages"]
category: "Web Development"
draft: false
readingTime: 4
---

## Giới thiệu

Khi xây dựng một trang portfolio cá nhân, ưu tiên hàng đầu là **tốc độ tải trang**, tính linh hoạt khi viết bài bằng Markdown và chi phí vận hành bằng không. Astro cùng GitHub Pages là một sự kết hợp hoàn hảo để đạt được các tiêu chí này.

> "Astro biến Markdown thuần túy thành các trang web tĩnh siêu nhanh mà không phải gánh nặng JavaScript không cần thiết."

## Tại sao lại chọn Astro?

Astro sở hữu kiến trúc *Islands Architecture*, cho phép trang web render HTML hoàn toàn trên server / build time:

1. **Zero JS by default:** Chỉ tải JavaScript khi một component tương tác thực sự cần thiết.
2. **Hỗ trợ Markdown & MDX xuất sắc:** Quản lý bài viết và dự án một cách trực quan thông qua Content Collections.
3. **Tích hợp mạnh mẽ:** Hoạt động liền mạch với Tailwind CSS, TypeScript, và các thư viện UI hiện đại.

```typescript
// Ví dụ cấu hình Content Collections trong src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
  posts: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
    schema: z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()),
    }),
  }),
};
```

## Các bước triển khai lên GitHub Pages

Để tự động hoá quá trình triển khai, chúng ta sử dụng **GitHub Actions**:

- Tạo tệp `.github/workflows/deploy.yml`.
- Thiết lập quyền `pages: write` và `id-token: write`.
- Chạy lệnh build tĩnh xuất thư mục `./dist`.
- Kích hoạt nguồn deploy GitHub Pages sang chế độ **GitHub Actions**.

Trang web sẽ tự động được cập nhật mỗi khi bạn push commit mới lên nhánh `main`!
