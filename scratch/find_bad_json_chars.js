const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

if (fs.existsSync(path)) {
    const content = fs.readFileSync(path, 'utf8');
    let inString = false;
    let escaped = false;
    
    for (let i = 0; i < content.length; i++) {
        const char = content[i];
        
        if (char === '"' && !escaped) {
            inString = !inString;
        }
        
        if (inString) {
            if (char === '\n' || char === '\r' || char === '\t') {
                console.log(`Found literal whitespace character ${JSON.stringify(char)} inside string at position ${i}`);
                // Print context
                const start = Math.max(0, i - 50);
                const end = Math.min(content.length, i + 50);
                console.log(`Context: ...${content.substring(start, end)}...`);
            }
        }
        
        if (char === '\\' && !escaped) {
            escaped = true;
        } else {
            escaped = false;
        }
    }
} else {
    console.log("File not found");
}
