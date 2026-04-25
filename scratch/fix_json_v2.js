const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

const content = fs.readFileSync(path);
// We might have multiple bad sequences or literal newlines
// Let's use a more robust approach: find literal newlines (0x0A) inside strings and escape them.

let inString = false;
let escaped = false;
let newContent = Buffer.alloc(content.length * 2); // Buffer plenty of space
let j = 0;

for (let i = 0; i < content.length; i++) {
    const byte = content[i];
    
    if (byte === 0x22 && !escaped) { // "
        inString = !inString;
    }
    
    if (inString && (byte === 0x0A || byte === 0x0D)) {
        // Literal newline inside string! Escape it.
        if (byte === 0x0A) {
            newContent[j++] = 0x5C; // \
            newContent[j++] = 0x6E; // n
        } else {
            // Skip 0x0D (CR) to avoid \r\n becoming \n\n or similar if not careful
            // Usually we just want one \n
        }
    } else {
        newContent[j++] = byte;
    }
    
    if (byte === 0x5C && !escaped) { // \
        escaped = true;
    } else {
        escaped = false;
    }
}

fs.writeFileSync(path, newContent.slice(0, j));
console.log("Escaped literal newlines inside strings.");
