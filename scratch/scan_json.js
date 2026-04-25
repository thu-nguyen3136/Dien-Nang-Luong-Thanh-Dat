const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

if (fs.existsSync(path)) {
    const content = fs.readFileSync(path);
    let found = false;
    for (let i = 0; i < content.length; i++) {
        const byte = content[i];
        if (byte < 32 && byte !== 9 && byte !== 10 && byte !== 13) {
            console.log(`Found control character 0x${byte.toString(16)} at position ${i}`);
            found = true;
            // Print context
            const start = Math.max(0, i - 20);
            const end = Math.min(content.length, i + 20);
            const context = content.slice(start, end);
            console.log(`Context: ${context.toString('utf8').replace(/[\x00-\x1F]/g, '?')}`);
        }
    }
    if (!found) {
        console.log("No control characters found.");
    }
} else {
    console.log("File not found");
}
