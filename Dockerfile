# Stage 1: Base
FROM node:20-alpine AS base
LABEL org.opencontainers.image.source="https://github.com/adminvpshub/Dien-Nang-Luong-Thanh-Dat"
WORKDIR /app
COPY package.json package-lock.json* ./

# Stage 2: Development
FROM base AS dev
RUN npm ci || npm install
COPY . .
ENV PORT=3010
CMD ["npm", "run", "dev"]

# Stage 3: Builder for production
FROM base AS builder
RUN npm ci || npm install
COPY . .
RUN npm run build

# Stage 4: Production runner (Nginx reverse proxy + Next.js standalone server)
FROM node:20-alpine AS runner
RUN apk add --no-cache nginx tzdata busybox-extras && \
    ln -snf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime && \
    echo "Asia/Ho_Chi_Minh" > /etc/timezone
ENV TZ=Asia/Ho_Chi_Minh
ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

# Copy Next.js standalone server and static assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Copy data directory (for db.json etc.)
COPY --from=builder /app/data ./data

# Copy custom nginx config
COPY nginx-log-format.conf /etc/nginx/http.d/00-nginx-log-format.conf
COPY nginx.conf /etc/nginx/http.d/default.conf
# Remove the default nginx site config
RUN rm -f /etc/nginx/http.d/default.conf.bak

# Copy CGI download script
COPY download-log.sh /tmp/download-log.sh
RUN mkdir -p /app/www/cgi-bin && \
    mv /tmp/download-log.sh /app/www/cgi-bin/download.sh && \
    chmod +x /app/www/cgi-bin/download.sh

EXPOSE 3010

# Start Nginx, httpd (for CGI), and Next.js server
CMD httpd -p 127.0.0.1:8080 -h /app/www && nginx && node server.js
