# KẾ HOẠCH XÂY DỰNG PORTFOLIO CÁ NHÂN

> Tài liệu yêu cầu dành cho AI Coding Agent (Claude Code, Codex, Cursor
> hoặc GitHub Copilot). Mục tiêu: xây dựng một portfolio cá nhân hiện
> đại, có cá tính công nghệ, triển khai miễn phí trên GitHub Pages và dễ
> cập nhật nội dung bằng Markdown.

## 1. Tầm nhìn sản phẩm

Xây dựng một website portfolio mang phong cách **Sci‑Fi / Futuristic
Tech / AI Lab**: cảm giác như một giao diện điều khiển trong phòng thí
nghiệm công nghệ tương lai, nhưng vẫn rõ ràng, dễ đọc và chuyên nghiệp.

Website không chỉ là CV trực tuyến. Nó cần thể hiện: - Tôi là ai, đang
học tập và theo đuổi lĩnh vực nào. - Những dự án, sản phẩm và thử nghiệm
tôi đã thực hiện. - Những bài viết, ghi chú kỹ thuật và điều tôi học
được. - Cách liên hệ và tìm thấy tôi trên các nền tảng khác.

**Nguyên tắc thiết kế:** ấn tượng nhưng không rối; nhiều hiệu ứng nhưng
không làm chậm trang; ưu tiên trải nghiệm trên điện thoại; nội dung có
thể chỉnh sửa bằng Markdown mà không phải sửa component.

## 2. Cấu trúc website

Đề xuất 6 trang chính:

  -----------------------------------------------------------------------
  Trang                   Mục đích                Nội dung chính
  ----------------------- ----------------------- -----------------------
  Home                    Trang giới thiệu tổng   Hero, lời giới thiệu
                          quan                    ngắn, kỹ năng nổi bật,
                                                  dự án tiêu biểu, bài
                                                  viết mới, CTA

  About                   Giới thiệu bản thân     Hành trình học tập,
                                                  định hướng, kỹ năng,
                                                  công cụ sử dụng,
                                                  timeline

  Posts                   Blog / Knowledge Base   Danh sách bài viết
                                                  Markdown, tìm kiếm, lọc
                                                  theo tag/chủ đề, phân
                                                  trang nếu cần

  Projects                Hồ sơ dự án             Dự án cá nhân/đồ án,
                                                  ảnh xem trước, công
                                                  nghệ, vai trò, demo,
                                                  GitHub

  Lab / Experiments       Phòng thí nghiệm cá     Các thử nghiệm AI, UI,
                          nhân                    animation, code
                                                  snippets, mini demos và
                                                  ý tưởng đang nghiên cứu

  Contact                 Liên hệ                 Email, GitHub, LinkedIn
                                                  hoặc mạng xã hội, form
                                                  liên hệ tùy chọn
  -----------------------------------------------------------------------

### Điều hướng

Thanh điều hướng chính:
`Home / About / Posts / Projects / Lab / Contact`.

-   Logo hoặc tên cá nhân ở bên trái.
-   Menu desktop ở bên phải.
-   Mobile dùng menu dạng drawer hoặc menu gọn.
-   Có nút chuyển Light/Dark nếu triển khai được mà không làm phức tạp
    trải nghiệm.
-   Trang hiện tại phải được đánh dấu rõ ràng.

## 3. Phong cách giao diện

### 3.1. Art direction

-   Chủ đề: futuristic interface, digital laboratory, AI computing,
    cyber minimalism.
-   Nền tối mặc định: xanh đen hoặc charcoal.
-   Màu nhấn: cyan, electric blue, violet; dùng tiết chế.
-   Chữ: sans-serif hiện đại cho nội dung; monospace cho nhãn kỹ thuật,
    metadata và code.
-   Bố cục: nhiều khoảng thở, lưới kỹ thuật nhẹ, đường viền mảnh,
    panel/card có chiều sâu.
-   Tránh lạm dụng glow, gradient, glassmorphism và hiệu ứng glitch
    khiến chữ khó đọc.

### 3.2. Hiệu ứng đề xuất

Chọn lọc và phối hợp các hiệu ứng sau: 1. **Animated background:** lưới
không gian, hạt sáng hoặc gradient chuyển động chậm. 2. **Cursor
spotlight:** vùng sáng nhẹ di chuyển theo con trỏ trên desktop; tắt hoặc
giảm trên thiết bị cảm ứng. 3. **Hero reveal:** tiêu đề và nội dung xuất
hiện theo từng lớp khi tải trang. 4. **Text animation:** hiệu ứng typing
hoặc text reveal cho một dòng giới thiệu ngắn; không chạy liên tục gây
khó chịu. 5. **Scroll reveal:** các section xuất hiện nhẹ khi cuộn. 6.
**Card hover:** card dự án/bài viết có viền sáng, nâng nhẹ hoặc tilt rất
nhỏ. 7. **Page transition:** chuyển trang mượt nếu tương thích với Astro
và không ảnh hưởng điều hướng. 8. **Micro-interactions:** nút, liên kết,
tag và icon có phản hồi khi hover/focus. 9. **Reading progress:** thanh
tiến độ đọc ở trang chi tiết bài viết. 10. **Code block:** tô màu cú
pháp, nút copy và giao diện giống terminal/editor.

**Quy tắc:** tôn trọng `prefers-reduced-motion`; giảm animation trên
mobile và thiết bị yếu; không dùng hiệu ứng gây chóng mặt; nội dung phải
hiển thị được kể cả khi animation không chạy.

## 4. Công nghệ đề xuất

Ưu tiên stack phù hợp website tĩnh, tốc độ tốt và hỗ trợ Markdown:

-   **Astro:** framework chính, phù hợp portfolio/blog tĩnh và tạo ít
    JavaScript phía client.
-   **TypeScript:** kiểm soát kiểu dữ liệu.
-   **Tailwind CSS:** xây dựng giao diện nhanh, nhất quán.
-   **Markdown / MDX:** quản lý bài viết và nội dung dự án.
-   **Astro Content Collections:** khai báo schema và quản lý nội dung
    có cấu trúc.
-   **Lucide Icons:** bộ icon thống nhất.
-   **CSS animations / View Transitions:** hiệu ứng nhẹ; chỉ thêm thư
    viện animation nếu thật sự cần.
-   **GitHub Actions:** tự động build và deploy lên GitHub Pages.

Không cần backend hoặc cơ sở dữ liệu ở phiên bản đầu. Website phải chạy
tốt như một static site.

## 5. Tổ chức nội dung Markdown

### 5.1. Bài viết

Lưu bài viết trong `src/content/posts/`. Mỗi bài là một file `.md`
riêng.

Ví dụ frontmatter:

``` yaml
---
title: "Bắt đầu hành trình với Astro"
description: "Ghi chú quá trình xây dựng portfolio tĩnh."
pubDate: 2026-10-30
updatedDate: 2026-10-30
tags: ["astro", "web-development"]
category: "Web Development"
draft: false
cover: "/images/posts/astro-cover.webp"
readingTime: 5
---
```

Yêu cầu cho Posts: - Trang danh sách bài viết có tìm kiếm theo tiêu
đề/mô tả. - Lọc theo tag hoặc category. - Sắp xếp bài mới nhất trước. -
Bài có `draft: true` không xuất hiện trên production. - Trang chi tiết
bài viết có mục lục tự động (TOC), thời gian đọc, ngày đăng/cập nhật,
tag và bài viết liên quan. - Hỗ trợ heading, bảng, hình ảnh, link,
blockquote, checklist và code block. - Có nút copy code và reading
progress. - URL thân thiện, ví dụ `/posts/ten-bai-viet/`.

### 5.2. Dự án

Lưu trong `src/content/projects/` dưới dạng Markdown hoặc dữ liệu có
schema.

Các trường nên có: - `title`, `description`, `date` - `tags` hoặc
`techStack` - `thumbnail` - `demoUrl` (không bắt buộc) - `repoUrl`
(không bắt buộc) - `featured` - `status` (completed / in-progress /
archived)

### 5.3. Lab / Experiments

Có thể lưu trong `src/content/labs/`: - Tên thử nghiệm. - Mục tiêu. -
Công nghệ sử dụng. - Trạng thái. - Ảnh hoặc video minh họa. - Link demo
hoặc mã nguồn. - Ghi chú điều đã học.

## 6. Mô tả chi tiết từng trang

### Home

Các section theo thứ tự gợi ý: 1. Hero: tên, vai trò/định hướng, câu
giới thiệu, CTA `Explore Projects` và `Read Posts`. 2. About preview:
giới thiệu ngắn. 3. Tech stack: nhóm công nghệ đang học/sử dụng. 4.
Featured projects: 2--3 dự án nổi bật. 5. Latest posts: 3 bài mới nhất.
6. Lab preview: một vài thử nghiệm thú vị. 7. Contact CTA và footer.

Không tự bịa tên, thành tích, kỹ năng, dự án hoặc thông tin cá nhân.
Dùng nội dung placeholder dễ thay thế và đánh dấu rõ những chỗ cần người
dùng điền.

### About

-   Giới thiệu bản thân.
-   Hành trình học tập và phát triển.
-   Mục tiêu nghề nghiệp.
-   Kỹ năng theo nhóm: Languages, Frontend, Backend, Database, Tools.
-   Timeline học tập/dự án.
-   CV: chỉ hiển thị nút tải khi đã có file CV thật.

### Posts

-   Header có tiêu đề và mô tả.
-   Ô tìm kiếm.
-   Bộ lọc category/tag.
-   Danh sách bài viết dạng card.
-   Metadata: ngày đăng, thời gian đọc, category.
-   Empty state khi không có kết quả.
-   Phân trang chỉ cần khi số bài đủ lớn; ban đầu có thể dùng nút Load
    more hoặc danh sách đơn giản.

### Projects

-   Lưới dự án.
-   Bộ lọc theo công nghệ hoặc trạng thái.
-   Card có thumbnail, mô tả, tech stack.
-   Trang chi tiết dự án có vấn đề, mục tiêu, giải pháp, chức năng, công
    nghệ, vai trò và kết quả.
-   Link GitHub/demo chỉ hiển thị khi có URL hợp lệ.

### Lab / Experiments

-   Giao diện như khu vực nghiên cứu số.
-   Phân nhóm AI, UI Effects, Web Experiments, Tools.
-   Mỗi thử nghiệm có trạng thái `Exploring`, `In Progress` hoặc
    `Completed`.
-   Ưu tiên demo nhỏ có thể tương tác, nhưng không để demo làm ảnh hưởng
    hiệu năng toàn trang.

### Contact

-   Các phương thức liên hệ và social links.
-   Email dùng `mailto:`.
-   Có thể thêm form thông qua dịch vụ bên thứ ba ở giai đoạn sau; không
    giả lập form gửi thành công nếu chưa có backend/dịch vụ xử lý.
-   Có nút copy email và thông báo trạng thái đã copy.

## 7. Cấu trúc thư mục dự kiến

``` text
portfolio/
├── public/
│   ├── images/
│   ├── fonts/
│   ├── favicon.svg
│   └── cv.pdf                 # chỉ thêm khi có CV thật
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── AnimatedBackground.astro
│   │   ├── ProjectCard.astro
│   │   ├── PostCard.astro
│   │   ├── Tag.astro
│   │   └── ...
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── content/
│   │   ├── posts/
│   │   ├── projects/
│   │   └── labs/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── posts/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── projects/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   ├── lab.astro
│   │   └── contact.astro
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

Agent có thể điều chỉnh cấu trúc nếu phiên bản Astro đang dùng yêu cầu
khác, nhưng phải giữ rõ ràng, dễ bảo trì.

## 8. Responsive và khả năng truy cập

-   Thiết kế mobile-first, hoạt động tốt ở màn hình 360px trở lên.
-   Không có cuộn ngang ngoài ý muốn.
-   Menu, nút và form dùng được bằng bàn phím.
-   Có focus state rõ ràng.
-   Dùng semantic HTML, heading theo thứ bậc.
-   Ảnh có alt text; màu chữ/nền đủ tương phản.
-   Animation hỗ trợ `prefers-reduced-motion`.
-   Không truyền đạt thông tin chỉ bằng màu sắc hoặc hiệu ứng.

## 9. Hiệu năng và SEO

-   Ưu tiên static rendering và hạn chế JavaScript.
-   Tối ưu ảnh (WebP/AVIF khi phù hợp), khai báo kích thước ảnh để tránh
    layout shift.
-   Lazy-load ảnh bên dưới màn hình đầu.
-   Không tải video nền hoặc thư viện animation nặng mặc định.
-   Có title, description, canonical URL, Open Graph metadata.
-   Có sitemap và robots.txt.
-   Có favicon và trang 404.
-   Kiểm tra các đường dẫn khi deploy dưới GitHub Pages, đặc biệt `base`
    path nếu repository không dùng dạng `username.github.io`.

## 10. Triển khai GitHub Pages

1.  Tạo repository GitHub.
2.  Khởi tạo dự án Astro.
3.  Cấu hình `site` và `base` trong `astro.config.mjs` đúng với URL
    GitHub Pages.
4.  Thêm workflow GitHub Actions để cài dependencies, build và deploy
    thư mục `dist`.
5.  Vào Repository Settings → Pages, chọn deploy bằng GitHub Actions.
6.  Push code lên nhánh deploy đã chọn.
7.  Kiểm tra trang chủ, các trang con, ảnh, CSS, font và link Markdown
    trên URL production.
8.  Nếu dùng custom domain, cấu hình DNS và HTTPS sau khi website hoạt
    động ổn định.

Không hard-code URL repository. Đọc tên repository và cấu hình `base`
phù hợp. Kiểm tra cả trường hợp project site và user site.

## 11. Kế hoạch triển khai theo giai đoạn

### Phase 1 --- Foundation

-   Khởi tạo Astro + TypeScript + Tailwind.
-   Cấu hình Git, GitHub Pages và GitHub Actions.
-   Tạo BaseLayout, global styles, typography, color tokens.
-   Tạo cấu trúc thư mục và nội dung mẫu.

**Hoàn thành khi:** build thành công và website deploy được lên GitHub
Pages.

### Phase 2 --- Core pages

-   Hoàn thiện Home, About, Contact.
-   Tạo Navbar, Footer, responsive menu.
-   Xây dựng Projects list và project detail.

**Hoàn thành khi:** điều hướng và nội dung các trang hoạt động tốt trên
desktop/mobile.

### Phase 3 --- Markdown blog

-   Cấu hình Content Collections cho posts.
-   Tạo trang Posts và trang chi tiết.
-   Thêm tag/category, tìm kiếm, TOC, reading time, code copy.
-   Kiểm tra draft và ngày đăng.

**Hoàn thành khi:** chỉ cần thêm file Markdown là có bài viết mới.

### Phase 4 --- Lab & visual effects

-   Tạo trang Lab.
-   Thêm animated background, reveal, hover, micro-interactions.
-   Tối ưu hiệu ứng theo thiết bị và reduced motion.

**Hoàn thành khi:** hiệu ứng nhất quán, không gây khó đọc hoặc giật lag.

### Phase 5 --- Polish & release

-   SEO, sitemap, 404, favicon, Open Graph.
-   Kiểm tra accessibility và responsive.
-   Kiểm tra broken links, ảnh lỗi, console errors.
-   Chạy build production và xác nhận GitHub Pages.

## 12. Tiêu chí nghiệm thu

-   [ ] Có đủ 6 trang: Home, About, Posts, Projects, Lab, Contact.
-   [ ] Điều hướng hoạt động trên desktop và mobile.
-   [ ] Posts được viết bằng Markdown và tự động hiển thị.
-   [ ] Bài draft không xuất hiện trên production.
-   [ ] Tìm kiếm/lọc bài viết hoạt động.
-   [ ] Có trang chi tiết bài viết và mục lục.
-   [ ] Projects và Lab lấy dữ liệu từ nội dung có cấu trúc.
-   [ ] Có dark theme đẹp, tương phản tốt.
-   [ ] Hiệu ứng mượt, có reduced-motion fallback.
-   [ ] Không có link giả, nút giả hoặc dữ liệu cá nhân/thành tích tự
    bịa.
-   [ ] Không có lỗi build.
-   [ ] GitHub Actions deploy thành công.
-   [ ] Website không vỡ layout trên mobile.

## 13. Hướng dẫn dành cho AI Coding Agent

Hãy thực hiện dự án theo các nguyên tắc sau:

1.  **Đọc toàn bộ tài liệu này trước khi code.**
2.  Kiểm tra repository hiện tại trước khi tạo/sửa file; không xóa nội
    dung có sẵn nếu chưa hiểu mục đích.
3.  Nếu repository chưa có dự án, khởi tạo Astro theo stack đề xuất.
4.  Chia việc thành từng phase; sau mỗi phase hãy chạy build/test phù
    hợp và sửa lỗi trước khi tiếp tục.
5.  Ưu tiên code sạch, component tái sử dụng, TypeScript rõ ràng và
    dependency tối thiểu.
6.  Không tạo backend/database vì website phiên bản đầu là static site.
7.  Không tự bịa thông tin cá nhân. Dùng placeholder như `[YOUR_NAME]`,
    `[YOUR_BIO]`, `[YOUR_EMAIL]`, `[GITHUB_URL]`.
8.  Không dùng ảnh có bản quyền không rõ nguồn. Dùng hình tự tạo, ảnh
    placeholder phù hợp hoặc để vị trí thay thế.
9.  Không thêm hiệu ứng chỉ để phô diễn. Mọi animation phải có mục đích
    và có phương án giảm/tắt.
10. Không đánh dấu một tính năng hoàn thành nếu chưa kiểm tra hoạt động
    thực tế.
11. Cuối mỗi phase, báo cáo: file đã tạo/sửa, tính năng đã xong, lệnh
    kiểm tra đã chạy, kết quả và việc còn lại.
12. Trước khi kết thúc, cung cấp hướng dẫn ngắn để chủ sở hữu tự sửa
    thông tin cá nhân, thêm bài Markdown, thêm project và deploy.

**Yêu cầu đầu ra cuối cùng:** một portfolio chạy được trên GitHub Pages,
giao diện futuristic/AI có chất lượng, nội dung dễ cập nhật bằng
Markdown, responsive, tối ưu hiệu năng và có hướng dẫn sử dụng trong
README.

------------------------------------------------------------------------

## 14. Thông tin cần thay thế trước khi public

-   `[YOUR_NAME]`: tên hiển thị.
-   `[YOUR_ROLE]`: ví dụ Student Developer / Web Developer.
-   `[YOUR_BIO]`: giới thiệu ngắn.
-   `[YOUR_EMAIL]`: email liên hệ.
-   `[GITHUB_URL]`: GitHub cá nhân.
-   `[SOCIAL_LINKS]`: các mạng xã hội muốn công khai.
-   `[PROJECTS]`: dự án thật.
-   `[SKILLS]`: kỹ năng thực tế, không phóng đại.
-   `[SITE_URL]`: URL GitHub Pages hoặc custom domain.

**Gợi ý:** triển khai bản đầu với nội dung mẫu có nhãn placeholder. Sau
khi website chạy ổn định, thay dần bằng thông tin, hình ảnh và bài viết
thật.
