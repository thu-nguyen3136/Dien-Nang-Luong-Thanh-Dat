const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Remove post-related items from products array
data.products = data.products.filter(p => !p.id.startsWith('post-'));

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log("Removed informational articles from the products grid to keep it focused on system packages.");
