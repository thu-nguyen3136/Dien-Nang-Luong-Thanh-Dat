const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

let content = fs.readFileSync(path, 'utf8');

// The character appearing as  is \ufffd
const r = (str) => str.replace(//g, '\ufffd');

const replacements = [
    [r('lu tr_'), 'lưu trữ'],
    [r('?in Mt Tr?i'), 'Điện Mặt Trời'],
    [r('`in mt tr?i'), 'điện mặt trời'],
    [r('ThAnh ?At'), 'Thành Đạt'],
    [r('LiAn h'), 'Liên hệ'],
    [r('GiA'), 'Giá'],
    [r('sn phcm'), 'sản phẩm'],
    [r('cht lng'), 'chất lượng'],
    [r('hiu sut'), 'hiệu suất'],
    [r('tu i th?'), 'tuổi thọ'],
    [r('`i?u kin'), 'điều kiện'],
    [r('`m bo'), 'đảm bảo'],
    [r('h th`ng'), 'hệ thống'],
    [r('nng lng'), 'năng lượng']
];

let replacedCount = 0;
for (const [regexStr, replacement] of replacements) {
    const regex = new RegExp(regexStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    if (regex.test(content)) {
        content = content.replace(regex, replacement);
        replacedCount++;
    }
}

if (replacedCount > 0) {
    fs.writeFileSync(path, content, 'utf8');
    console.log(`Cleaned up ${replacedCount} types of mangled Vietnamese text in db.json.`);
} else {
    console.log("No common mangled patterns found or already fixed.");
}
