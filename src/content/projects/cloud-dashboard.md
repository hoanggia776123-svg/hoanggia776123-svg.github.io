---
title: "Microservices Telemetry Dashboard"
description: "Bảng điều khiển theo dõi hiệu năng hệ thống phân tán, trực quan hóa luồng dữ liệu thời gian thực."
date: "2026-05"
techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Chart.js"]
demoUrl: ""
repoUrl: "https://github.com/hoanggia776123-svg"
featured: false
status: "completed"
---

## 1. Vấn đề đặt ra
Các hệ thống microservices cần một giao diện trực quan tập trung để kiểm tra trạng thái hoạt động (uptime, latency, throughput) giữa các node dịch vụ.

## 2. Giải pháp thực hiện
- Thu thập dữ liệu metrics định kỳ qua WebSocket và REST API.
- Biểu diễn thông số bằng biểu đồ đường và biểu đồ nhiệt theo thời gian thực.
- Cảnh báo tự động khi phát hiện ngưỡng trễ hoặc lỗi tăng đột biến.
