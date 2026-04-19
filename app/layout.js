import './globals.css';

export const metadata = {
  title: 'Thành Đạt Solar - Điện Năng Lượng Mặt Trời Uy Tín Hà Nội',
  description: 'Chuyên lắp đặt, tư vấn và cung cấp thiết bị điện năng lượng mặt trời uy tín tại Hà Nội và toàn quốc.',
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
