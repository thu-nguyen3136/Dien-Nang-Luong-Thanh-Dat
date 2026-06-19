const fs = require('fs');
const path = require('path');

const dbPath = path.join(process.cwd(), 'data', 'db.json');

// Helper to convert camelCase to kebab-case
const camelToKebab = (str) => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);

// Helper to clean style objects
function convertStyleObj(jsxStyle) {
  // Remove outer double curly braces
  let str = jsxStyle.trim();
  if (str.startsWith('{{') && str.endsWith('}}')) {
    str = str.substring(2, str.length - 2);
  } else if (str.startsWith('{') && str.endsWith('}')) {
    str = str.substring(1, str.length - 1);
  }
  
  // Parse style string key-value pairs
  // Example: marginBottom: '20px', marginTop: '10px'
  const pairs = [];
  // Use a parser or simple regex splitting
  const parts = str.split(/,(?=(?:(?:[^']*'){2})*[^']*$)/); // split by comma not inside single quotes
  for (const part of parts) {
    const colonIdx = part.indexOf(':');
    if (colonIdx === -1) continue;
    const key = part.substring(0, colonIdx).trim().replace(/['"]/g, '');
    const val = part.substring(colonIdx + 1).trim().replace(/['"]/g, '');
    
    // Map key to kebab case
    const cssKey = camelToKebab(key);
    pairs.push(`${cssKey}: ${val}`);
  }
  return pairs.join('; ');
}

// Convert JSX string to HTML
function jsxToHtml(jsx) {
  let html = jsx;
  
  // 1. Convert style={{ ... }}
  const styleRegex = /style=\{\{([^}]+)\}\}/g;
  html = html.replace(styleRegex, (match, styleBody) => {
    return `style="${convertStyleObj(styleBody)}"`;
  });
  
  // 2. Convert className="..." to class="..."
  html = html.replace(/className=/g, 'class=');
  
  // 3. Convert <Link href="...">...</Link> to <a href="...">...</a>
  html = html.replace(/<Link\s+/g, '<a ');
  html = html.replace(/<\/Link>/g, '</a>');
  
  // 4. Convert <Image ... /> to <img ... />
  // We can convert Image tags to standard img tags. Let's find all <Image ... />
  const imageRegex = /<Image\s+([^>]*)\/>/g;
  html = html.replace(imageRegex, (match, attrs) => {
    // Extract src, alt, style from attrs
    let src = '';
    let alt = '';
    let style = '';
    
    const srcMatch = attrs.match(/src=["']([^"']+)["']/);
    const altMatch = attrs.match(/alt=["']([^"']+)["']/);
    const styleMatch = attrs.match(/style=["']([^"']+)["']/);
    const inlineStyleMatch = attrs.match(/style=\{\{([^}]+)\}\}/);
    
    if (srcMatch) src = srcMatch[1];
    if (altMatch) alt = altMatch[1];
    if (styleMatch) style = styleMatch[1];
    else if (inlineStyleMatch) style = convertStyleObj(inlineStyleMatch[1]);
    
    // Fallback default style for dynamic rendering
    if (!style) {
      style = "width: 100%; height: auto; border-radius: 8px;";
    } else {
      // make sure it has width/height or displays well
      if (!style.includes('width')) style += '; width: 100%';
      if (!style.includes('height')) style += '; height: auto';
    }
    
    return `<img src="${src}" alt="${alt}" style="${style}" />`;
  });
  
  // 5. Clean up Image wrappers
  // In the original layout, we had:
  // <div className={styles.imageBox}>
  //   <Image src="..." fill ... />
  // </div>
  // Let's replace the outer container style or keep it simple.
  
  // 6. Replace svg/icon elements or other JSX things
  // E.g. <svg ...>...</svg> - we keep them as is, but we might need to convert JSX properties like strokeWidth to stroke-width
  html = html.replace(/strokeWidth=/g, 'stroke-width=');
  html = html.replace(/strokeLinecap=/g, 'stroke-linecap=');
  html = html.replace(/strokeLinejoin=/g, 'stroke-linejoin=');
  
  // 7. Clean up double quotes and formatting
  return html.trim();
}

const serviceSlugs = [
  {
    slug: 'thiet-ke-he-thong-dien-nang-luong-mat-troi',
    title: 'Thiết Kế Hệ Thống Điện Năng Lượng Mặt Trời Tối Ưu',
    filePath: 'app/(website)/thiet-ke-he-thong-dien-nang-luong-mat-troi/page.js',
    image: '/images/thiet-ke-he-thong-dien-nang-luong-mat-troi-6.webp',
    excerpt: 'Thành Đạt Solar chuyên thiết kế hệ thống điện mặt trời đồng bộ cho gia đình, nhà xưởng, doanh nghiệp. Tư vấn giải pháp năng lượng sạch, tiết kiệm chi phí tối đa.'
  },
  {
    slug: 'lap-dat-he-thong-dien-nang-luong-mat-troi',
    title: 'Lắp Đặt Hệ Thống Điện Năng Lượng Mặt Trời',
    filePath: 'app/(website)/lap-dat-he-thong-dien-nang-luong-mat-troi/page.js',
    image: '/images/lap-he-thong-dien-nang-luong-mat-troi.jpg',
    excerpt: 'Thành Đạt Solar cung cấp dịch vụ lắp điện năng lượng mặt trời tại Hà Nội và các tỉnh thành Miền Bắc, giúp tiết kiệm chi phí điện năng, nâng cao hiệu suất sử dụng và bảo vệ môi trường.'
  },
  {
    slug: 'lap-dat-dien-mat-troi-ap-mai-tron-goi-tai-ha-noi',
    title: 'Lắp Đặt Điện Mặt Trời Áp Mái Trọn Gói Tại Hà Nội',
    filePath: 'app/(website)/lap-dat-dien-mat-troi-ap-mai-tron-goi-tai-ha-noi/page.js',
    image: '/images/ap-mai.png',
    excerpt: 'Dịch vụ lắp đặt điện mặt trời áp mái trọn gói tại Hà Nội. Giải pháp tiết kiệm điện năng cho hộ gia đình và doanh nghiệp với chi phí đầu tư thấp, bảo hành dài hạn.'
  },
  {
    slug: 'thi-cong-dien-nang-luong-mat-troi-tai-ha-noi',
    title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Hà Nội',
    filePath: 'app/(website)/thi-cong-dien-nang-luong-mat-troi-tai-ha-noi/page.js',
    image: '/images/lap-va-ban-dien-nang-luong-mat-t.png',
    excerpt: 'Thành Đạt Solar cung cấp dịch vụ thi công điện năng lượng mặt trời tại Hà Nội trọn gói, từ tư vấn, thiết kế đến lắp đặt và bảo trì. Giải pháp năng lượng sạch tối ưu.'
  },
  {
    slug: 'thi-cong-dien-nang-luong-mat-troi-tai-hung-yen',
    title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Hưng Yên',
    filePath: 'app/(website)/thi-cong-dien-nang-luong-mat-troi-tai-hung-yen/page.js',
    image: '/images/lap-dat-he-thong-dien-nang-luong-mat-troi.png',
    excerpt: 'Thành Đạt Solar cung cấp dịch vụ thi công điện năng lượng mặt trời tại Hưng Yên trọn gói, từ tư vấn, thiết kế đến lắp đặt và bảo trì. Tiết kiệm 50-90% hóa đơn điện.'
  },
  {
    slug: 'thi-cong-dien-nang-luong-mat-troi-tai-bac-giang',
    title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Bắc Giang',
    filePath: 'app/(website)/thi-cong-dien-nang-luong-mat-troi-tai-bac-giang/page.js',
    image: '/images/dien-nang-luong-mt-kn.png',
    excerpt: 'Dịch vụ thi công điện năng lượng mặt trời tại Bắc Giang trọn gói. Giảm 50-90% hóa đơn điện mỗi tháng. Tư vấn, thiết kế và lắp đặt chuyên nghiệp.'
  },
  {
    slug: 'thi-cong-dien-nang-luong-mat-troi-tai-phu-tho',
    title: 'Thi Công Điện Năng Lượng Mặt Trời Tại Phú Thọ',
    filePath: 'app/(website)/thi-cong-dien-nang-luong-mat-troi-tai-phu-tho/page.js',
    image: '/images/thiet-ke-he-thong-dien-nang-luong-mat-troi.png',
    excerpt: 'Dịch vụ thi công điện năng lượng mặt trời tại Phú Thọ trọn gói. Giải pháp tiết kiệm chi phí điện cho gia đình và doanh nghiệp. Tư vấn, lắp đặt chuyên nghiệp.'
  }
];

function run() {
  if (!fs.existsSync(dbPath)) {
    console.error('db.json not found!');
    return;
  }
  
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  if (!db.services) {
    db.services = [];
  }
  
  let addedCount = 0;
  
  for (const item of serviceSlugs) {
    // Check if service already exists
    const exists = db.services.some(s => s.slug === item.slug);
    if (exists) {
      console.log(`Service with slug "${item.slug}" already exists in db.json. Skipping...`);
      continue;
    }
    
    const fullFilePath = path.join(process.cwd(), item.filePath);
    if (!fs.existsSync(fullFilePath)) {
      console.error(`File not found: ${fullFilePath}`);
      continue;
    }
    
    const fileContent = fs.readFileSync(fullFilePath, 'utf8');
    
    // Extract serviceContent
    // Look for: className={`container ${styles.serviceLayout}`} style={{ marginTop: '40px' }}
    // We want the content inside <div className={styles.serviceContent}>
    const startMarker = '<div className={styles.serviceContent}>';
    const startIdx = fileContent.indexOf(startMarker);
    if (startIdx === -1) {
      console.error(`Could not find start marker in ${item.filePath}`);
      continue;
    }
    
    const contentStart = startIdx + startMarker.length;
    
    // Find the matching end marker. The end is followed by <div className="sidebarWrapper">
    const endMarker = '</div>\r\n\r\n        <div className="sidebarWrapper">';
    const endMarkerUnix = '</div>\n\n        <div className="sidebarWrapper">';
    
    let endIdx = fileContent.indexOf(endMarker);
    if (endIdx === -1) {
      endIdx = fileContent.indexOf(endMarkerUnix);
    }
    
    if (endIdx === -1) {
      // Try alternative: find the closing tag before <div className="sidebarWrapper">
      const sidebarIdx = fileContent.indexOf('<div className="sidebarWrapper">');
      if (sidebarIdx !== -1) {
        // Look backwards for </div>
        const lastDivClose = fileContent.lastIndexOf('</div>', sidebarIdx);
        if (lastDivClose !== -1) {
          endIdx = lastDivClose;
        }
      }
    }
    
    if (endIdx === -1 || endIdx <= contentStart) {
      console.error(`Could not find end marker in ${item.filePath}`);
      continue;
    }
    
    const rawJsx = fileContent.substring(contentStart, endIdx);
    const cleanHtml = jsxToHtml(rawJsx);
    
    const today = new Date().toISOString().split('T')[0];
    db.services.push({
      id: item.slug,
      slug: item.slug,
      title: item.title,
      excerpt: item.excerpt,
      image: item.image,
      status: 'published',
      showOnHome: true,
      updatedAt: today,
      content: cleanHtml
    });
    
    console.log(`Successfully extracted and converted service: "${item.title}"`);
    addedCount++;
  }
  
  if (addedCount > 0) {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
    console.log(`Successfully migrated ${addedCount} services to db.json!`);
  } else {
    console.log('No new services migrated.');
  }
}

run();
