const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Restore post-2, post-3, post-4 to products array if they are not there
const postIds = ['post-2', 'post-3', 'post-4'];

postIds.forEach(id => {
    if (!data.products.find(p => p.id === id)) {
        const post = data.posts.find(p => p.id === id);
        if (post) {
            data.products.push(post);
        }
    }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
console.log("Restored informational items to the products list to ensure they appear in the grid.");
