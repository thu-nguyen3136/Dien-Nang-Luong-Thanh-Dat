#!/bin/bash

# (Tùy chọn) Login vào GHCR nếu chưa đăng nhập trước đó:
# sudo docker logout ghcr.io
# echo '<YOUR_GH_PAT>' | sudo docker login ghcr.io -u '<YOUR_GH_USER>' --password-stdin

# 1. Kéo image mới nhất từ GitHub Container Registry
echo "🚀 Đang kéo image mới nhất từ ghcr.io..."
sudo docker compose pull

# 2. Khởi động lại container với image vừa tải
echo "♻️ Đang khởi động lại container..."
sudo docker compose up -d

# 3. Dọn dẹp các image cũ (dangling images) để tiết kiệm dung lượng
echo "🧹 Đang dọn dẹp image thừa..."
sudo docker image prune -f

echo "✅ Đã deploy thành công bản mới nhất!"
