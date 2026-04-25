const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Identify posts in products array
const postsInProducts = data.products.filter(p => p.id.startsWith('post-'));
const actualProducts = data.products.filter(p => !p.id.startsWith('post-'));

// Add to posts array if not already there (by slug)
postsInProducts.forEach(post => {
    if (!data.posts.find(p => p.slug === post.slug)) {
        data.posts.push(post);
    }
});

data.products = actualProducts;

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log(`Moved ${postsInProducts.length} posts from products to posts and cleaned up products array.`);
