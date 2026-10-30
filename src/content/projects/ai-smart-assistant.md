---
title: "AI Smart Assistant Prototype"
description: "Mô hình trợ lý thông minh hỗ trợ tóm tắt tài liệu, phân tích mã nguồn và giải đáp kỹ thuật dựa trên LLM."
date: "2026-08"
techStack: ["Python", "FastAPI", "React", "LangChain"]
demoUrl: ""
repoUrl: "https://github.com/hoanggia776123-svg"
featured: true
status: "in-progress"
---

## 1. Vấn đề đặt ra
Người học lập trình và nhà phát triển thường xuyên phải đối mặt với lượng tài liệu đồ sộ và các lỗi mã nguồn phức tạp, cần một công cụ hỗ trợ trích xuất thông tin nhanh.

## 2. Giải pháp thực hiện
- Xây dựng API trung gian với FastAPI để điều phối các truy vấn tới mô hình ngôn ngữ lớn.
- Sử dụng LangChain để tạo chuỗi truy xuất tài liệu (RAG).
- Giao diện web tối giản cho phép tương tác trực tiếp qua hội thoại và tải lên tài liệu tham khảo.

## 3. Công nghệ áp dụng
- **Backend:** Python, FastAPI, Uvicorn, LangChain
- **Frontend:** React, Tailwind CSS
- **Vector Store:** ChromaDB
