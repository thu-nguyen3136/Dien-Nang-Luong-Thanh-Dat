import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'db.json');

// Ensure data directory and file exists
const initDb = () => {
  const dir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify({
      posts: [],
      products: [],
      banners: [],
      config: {
        siteName: "Thành Đạt Solar",
        hotline: "0368.444.567",
        address: "Thôn Liễu Trì, Mê Linh, Hà Nội"
      }
    }, null, 2));
  }
};

export const getData = () => {
  initDb();
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
};

export const saveData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};
