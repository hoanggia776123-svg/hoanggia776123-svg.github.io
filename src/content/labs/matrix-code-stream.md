---
title: "Luồng mã kỹ thuật số Ma trận (Cyber Matrix Rain)"
description: "Thử nghiệm tái hiện hiệu ứng dòng chữ số chạy dọc cổ điển kết hợp hiệu ứng neon phát quang hiện đại."
category: "Web Experiments"
status: "Completed"
tags: ["Canvas", "Animation", "Sci-Fi"]
demoUrl: ""
repoUrl: ""
featured: true
date: "2026-09"
---

## Mục tiêu nghiên cứu
Tạo hiệu ứng dòng chữ chạy không đồng bộ bằng việc quản lý mảng vị trí y của từng cột ký tự. 

## Kết quả
Tối ưu hóa render bằng cách làm mờ dần khung hình cũ (`ctx.fillStyle = 'rgba(7, 11, 20, 0.05)'`) thay vì vẽ lại toàn bộ canvas.
