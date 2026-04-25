const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

for (let i = 450; i < 470; i++) {
    if (lines[i]) {
        console.log(`${i + 1}: ${lines[i]}`);
    }
}
