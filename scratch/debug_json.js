const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';
const pos = 22128;

if (fs.existsSync(path)) {
    const fd = fs.openSync(path, 'r');
    const buffer = Buffer.alloc(400);
    const start = Math.max(0, pos - 200);
    fs.readSync(fd, buffer, 0, 400, start);
    console.log(`Chunk around position ${pos} (start ${start}):`);
    console.log(buffer.toString('utf8'));
    
    for (let i = 0; i < buffer.length; i++) {
        const byte = buffer[i];
        if (byte < 32 && byte !== 9 && byte !== 10 && byte !== 13) {
            console.log(`Found control character ${byte} at absolute position ${start + i}`);
        }
    }
    fs.closeSync(fd);
} else {
    console.log("File not found");
}
