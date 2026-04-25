const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

const content = fs.readFileSync(path);
// We found a bad sequence at 26182 (approx)
// Let's search for "  }\n}\n" and remove it if it's inside a string.

// Actually, let's just look for the hex pattern: 20 20 7d 0a 7d 0a
const pattern = Buffer.from([0x20, 0x20, 0x7d, 0x0a, 0x7d, 0x0a]);
let index = content.indexOf(pattern);

if (index !== -1) {
    console.log(`Found pattern at ${index}`);
    // Check if it's the one followed by 'a3' or similar
    console.log(`Next byte: 0x${content[index + pattern.length].toString(16)}`);
    
    // Create new content by removing the pattern
    const newContent = Buffer.concat([
        content.slice(0, index),
        Buffer.from('\n'), // Replace with a newline to keep it clean
        content.slice(index + pattern.length)
    ]);
    
    fs.writeFileSync(path, newContent);
    console.log("Fixed the corrupted JSON part.");
} else {
    console.log("Pattern not found.");
}
