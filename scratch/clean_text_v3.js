const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

let content = fs.readFileSync(path, 'utf8');

// Replacement character is \uFFFD
const REPLACEMENT_CHAR = '\uFFFD';

const replacements = [
    ['lu tr_', 'lưu trữ'],
    ['?in Mt Tr?i', 'Điện Mặt Trời'],
    ['`in mt tr?i', 'điện mặt trời'],
    ['ThAnh ?At', 'Thành Đạt'],
    ['LiAn h', 'Liên hệ'],
    ['GiA', 'Giá'],
    ['sn phcm', 'sản phẩm'],
    ['cht lng', 'chất lượng'],
    ['hiu sut', 'hiệu suất'],
    ['tu i th?', 'tuổi thọ'],
    ['`i?u kin', 'điều kiện'],
    ['`m bo', 'đảm bảo'],
    ['h th`ng', 'hệ thống'],
    ['nng lng', 'năng lượng']
];

let replacedCount = 0;
for (let [pattern, replacement] of replacements) {
    // Replace '?' in pattern with REPLACEMENT_CHAR
    pattern = pattern.replace(/\?/g, REPLACEMENT_CHAR);
    // Escape for regex
    const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedPattern, 'g');
    
    if (regex.test(content)) {
        content = content.replace(regex, replacement);
        replacedCount++;
    }
}

fs.writeFileSync(path, content, 'utf8');
console.log(`Cleaned up ${replacedCount} patterns in db.json.`);
