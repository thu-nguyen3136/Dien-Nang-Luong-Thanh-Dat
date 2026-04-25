const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

// Line 457 (0-indexed 456) is the one that needs structural help
if (lines[456].includes('sẽ giúp cải thiện hiệu suất hoạt động."')) {
    console.log("Found the target line. Adding missing braces.");
    lines[456] = lines[456] + '\n      ]';
}

fs.writeFileSync(path, lines.join('\n'));
console.log("Fixed missing array brace.");
