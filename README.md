# Math Bridge AI Student - Nền Tảng Học Toán Song Ngữ THPT (Lớp 10, 11, 12)

Dự án Cầu Nối Ngôn Ngữ & Tư Duy Toán Học theo chuẩn **SGK Kết Nối Tri Thức Với Cuộc Sống** và **Khung Chuẩn Hóa Quốc Tế (SAT / AP / A-Level)** với 3 cấp độ chuyên sâu:
- **Level 1**: Học từ vựng theo Lớp (10, 11, 12) qua Postcard lật mở & Minigame nối từ tốc độ cao.
- **Level 2**: Đọc hiểu bài toán song ngữ, Smart Hover tra cứu tức thì & bóc tách giả thiết - kết luận.
- **Level 3**: Soạn thảo bài giải tự luận tiếng Anh với thanh công cụ ký hiệu $\LaTeX$ & AI chấm điểm Barem 4 tiêu chí quốc tế.
- **AI Socratic Tutor**: Trợ giảng thông minh hỗ trợ gợi mở tư duy, không giải hộ.
- **Chẩn đoán Lỗi NLP**: Phân tách lỗ hổng toán học và rào cản ngôn ngữ.

---

## 🚀 Hướng Dẫn Triển Khai (Deployment Guide)

### Cách 1: Triển khai lên Vercel (Khuyên dùng - Nhanh nhất)
1. Đẩy mã nguồn lên **GitHub** / **GitLab** / **Bitbucket**.
2. Truy cập [Vercel](https://vercel.com) và chọn **Add New...** -> **Project**.
3. Chọn Repository vừa đẩy lên:
   - **Framework Preset**: `Vite`
   - **Build Command**: `vite build` (hoặc `npm run build`)
   - **Output Directory**: `dist`
4. *(Tùy chọn)* Trong phần **Environment Variables**, thêm:
   - `VITE_GEMINI_API_KEY`: Mã Google Gemini API Key của bạn.
   - `GEMINI_API_KEY`: Mã Google Gemini API Key của bạn (dành cho serverless API).
5. Nhấn **Deploy**. Ứng dụng sẽ hoạt động ngay lập tức!

> **Lưu ý**: Người dùng cũng có thể nhập API Key trực tiếp trên giao diện web app qua nút **"Lấy API key để sử dụng app"** ở góc phải màn hình mà không cần cấu hình biến môi trường server.

---

### Cách 2: Triển khai lên Netlify
1. Đẩy code lên GitHub.
2. Đăng nhập [Netlify](https://netlify.com) và chọn **Add new site** -> **Import an existing project**.
3. File cấu hình `netlify.toml` đã có sẵn trong dự án:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Nhấn **Deploy Site**.

---

### Cách 3: Triển khai bằng Docker (Render, Railway, Fly.io, VPS)
Dự án đã tích hợp sẵn `Dockerfile` multi-stage:
```bash
# Build Docker image
docker build -t math-bridge-ai .

# Run Docker container trên cổng 3000
docker run -p 3000:3000 -e GEMINI_API_KEY=your_gemini_api_key math-bridge-ai
```

---

### Cách 4: Chạy cục bộ trên máy tính (Local Development)

**Yêu cầu:** Node.js v18 trở lên.

1. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

2. **Cấu hình API Key (Tùy chọn)**:
   Tạo file `.env` từ `.env.example`:
   ```bash
   cp .env.example .env
   ```
   Điền khóa API Key lấy tại [Google AI Studio](https://aistudio.google.com/api-keys):
   ```env
   GEMINI_API_KEY=AIzaSy...
   VITE_GEMINI_API_KEY=AIzaSy...
   ```

3. **Khởi chạy ứng dụng**:
   ```bash
   # Chạy Frontend Vite (Hot-reload)
   npm run dev

   # Hoặc chạy Full-stack Express Server + Vite SPA
   npm run start
   ```
   Mở trình duyệt tại: `http://localhost:5173` hoặc `http://localhost:3000`.

---

## 🛠️ Công Nghệ Sử Dụng
- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion, Lucide React, KaTeX, Canvas Confetti.
- **AI Engine**: `@google/genai` (Gemini 2.5 Flash, Gemini 2.5 Pro, Gemini 2.0 Flash) với kiến trúc Hybrid Client/Server Auto-Fallback.
- **Backend**: Node.js, Express, tsx.
- **Exporting**: Microsoft Word (.doc) & PowerPoint (.ppt) Generator.
