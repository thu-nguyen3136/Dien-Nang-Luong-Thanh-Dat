This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## IP Access Logs

Nginx ghi lại IP thực của khách truy cập (lấy từ header `CF-Connecting-IP` của Cloudflare) vào file log nội bộ với định dạng CSV:

```
YYYY-MM-DD HH:mm:ss;<IP_address>
```

> **Lưu ý:** Các endpoint bên dưới là **bí mật** — chỉ chia sẻ URL với người được uỷ quyền.

### `GET /client-ip-table-secret`

Tải xuống toàn bộ file log dưới dạng CSV, **sắp xếp tăng dần theo thời gian** (mục cũ nhất ở trên).

| Thuộc tính | Giá trị |
|---|---|
| URL | `https://<domain>/client-ip-table-secret` |
| File tải về | `client-ip-table-secret.csv` |
| Thứ tự | Tăng dần (ascending) — dòng đầu là bản ghi cũ nhất |
| Cơ chế | Nginx `alias` trỏ thẳng tới `/var/log/nginx/client-ip-table-secret` |
| Config | `nginx.conf` → `location = /client-ip-table-secret` |

### `GET /client-ip-table-secret-desc`

Tải xuống toàn bộ file log dưới dạng CSV, **sắp xếp giảm dần theo thời gian** (mục mới nhất ở trên).

| Thuộc tính | Giá trị |
|---|---|
| URL | `https://<domain>/client-ip-table-secret-desc` |
| File tải về | `client-ip-table-secret-desc.csv` |
| Thứ tự | Giảm dần (descending) — dòng đầu là bản ghi mới nhất |
| Cơ chế | Nginx proxy sang `busybox httpd` (cổng 8080 nội bộ) chạy CGI script `download-log.sh` — script dùng `tac` để đảo ngược file log |
| Config | `nginx.conf` → `location = /client-ip-table-secret-desc` |
| CGI script | `download-log.sh` → `/app/www/cgi-bin/download.sh` (trong container) |

### Các file liên quan

| File | Mục đích |
|---|---|
| `nginx.conf` | Định nghĩa 2 location block phục vụ 2 endpoint |
| `nginx-log-format.conf` | Định nghĩa log format `cf_ip` (datetime + IP từ Cloudflare) |
| `download-log.sh` | CGI script đảo ngược log bằng `tac` cho endpoint `-desc` |
| `Dockerfile` | Cài `busybox-extras`, copy script CGI, khởi động `httpd` + `nginx` + `node` |

### Luồng hoạt động

```
Cloudflare → Nginx (:3010)
    ├─ /client-ip-table-secret      → alias /var/log/nginx/client-ip-table-secret  (asc)
    └─ /client-ip-table-secret-desc → busybox httpd (:8080) → CGI download.sh (tac) (desc)
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
