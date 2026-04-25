const fs = require('fs');
const path = 'e:\\My Website\\Dien-Nang-Luong-Mat-Troi\\data\\db.json';

let content = fs.readFileSync(path, 'utf8');

// Common mangled Vietnamese words (approximate)
const replacements = [
    [/lu tr_/g, 'lưu trữ'],
    [/?in Mt Tr?i/g, 'Điện Mặt Trời'],
    [/?in mt tr?i/g, 'điện mặt trời'],
    [/ThAnh A?At/g, 'Thành Đạt'],
    [/LiAn H/g, 'Liên hệ'],
    [/GiA/g, 'Giá'],
    [/sn phcm/g, 'sản phẩm'],
    [/cht lng/g, 'chất lượng'],
    [/hiu sut/g, 'hiệu suất'],
    [/tu i th?/g, 'tuổi thọ'],
    [/`iu kin/g, 'điều kiện'],
    [/`m bo/g, 'đảm bảo'],
    [/h th`ng/g, 'hệ thống'],
    [/nng lng/g, 'năng lượng']
];

let replaced = false;
for (const [regex, replacement] of replacements) {
    if (regex.test(content)) {
        content = content.replace(regex, replacement);
        replaced = true;
    }
}

if (replaced) {
    fs.writeFileSync(path, content, 'utf8');
    console.log("Cleaned up some mangled Vietnamese text in db.json.");
} else {
    console.log("No common mangled patterns found or already fixed.");
}
