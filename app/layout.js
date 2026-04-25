import './globals.css';

export const metadata = {
  title: 'Thành Đạt Solar - Điện Năng Lượng Mặt Trời Uy Tín Hà Nội',
  description: 'Chuyên lắp đặt, tư vấn và cung cấp thiết bị điện năng lượng mặt trời uy tín tại Hà Nội và toàn quốc.',
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon.ico' },
    ],
    apple: [
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  );
}
