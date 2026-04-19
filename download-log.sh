#!/bin/sh
echo "Content-Type: text/plain; charset=UTF-8"
echo "Content-Disposition: attachment; filename=\"client-ip-table-secret-desc.csv\""
echo "Cache-Control: no-store, no-cache"
echo ""
if [ -f "/var/log/nginx/client-ip-table-secret" ]; then
    tac /var/log/nginx/client-ip-table-secret
fi
