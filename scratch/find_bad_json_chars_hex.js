const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

const content = fs.readFileSync(path);
let inString = false;
let escaped = false;

for (let i = 0; i < content.length; i++) {
    const byte = content[i];
    
    if (byte === 0x22 && !escaped) { // "
        inString = !inString;
    }
    
    if (inString) {
        if (byte === 0x0A || byte === 0x0D || byte === 0x09) {
            console.log(`Found literal whitespace 0x${byte.toString(16)} at position ${i}`);
            const start = Math.max(0, i - 50);
            const end = Math.min(content.length, i + 50);
            console.log(`Context (hex): ${content.slice(start, end).toString('hex')}`);
            console.log(`Context (utf8): ${content.slice(start, end).toString('utf8').replace(/[\x00-\x1F]/g, '?')}`);
        }
    }
    
    if (byte === 0x5C && !escaped) { // \
        escaped = true;
    } else {
        escaped = false;
    }
}
