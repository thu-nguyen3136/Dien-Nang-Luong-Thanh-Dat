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
  const parsed = JSON.parse(data);
  let changed = false;
  if (!parsed.posts) { parsed.posts = []; changed = true; }
  if (!parsed.products) { parsed.products = []; changed = true; }
  if (!parsed.services) { parsed.services = []; changed = true; }
  if (!parsed.banners) { parsed.banners = []; changed = true; }
  if (!parsed.config) {
    parsed.config = {
      siteName: "Thành Đạt Solar",
      hotline: "0368.444.567",
      address: "Thôn Liễu Trì, Mê Linh, Hà Nội"
    };
    changed = true;
  }
  if (changed) {
    fs.writeFileSync(dbPath, JSON.stringify(parsed, null, 2));
  }
  return parsed;
};

export const saveData = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};
