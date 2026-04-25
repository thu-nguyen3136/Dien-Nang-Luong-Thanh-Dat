const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';
const pos = 22128;

if (fs.existsSync(path)) {
    const fd = fs.openSync(path, 'r');
    const buffer = Buffer.alloc(100);
    const start = Math.max(0, pos - 50);
    fs.readSync(fd, buffer, 0, 100, start);
    console.log(`Chunk around position ${pos} (start ${start}):`);
    
    for (let i = 0; i < buffer.length; i++) {
        const byte = buffer[i];
        const absPos = start + i;
        const char = String.fromCharCode(byte);
        const isControl = byte < 32 && byte !== 9 && byte !== 10 && byte !== 13;
        console.log(`[${absPos}] ${byte.toString(16).padStart(2, '0')} (${isControl ? 'CTRL' : char})`);
    }
    fs.closeSync(fd);
} else {
    console.log("File not found");
}
