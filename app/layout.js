import './globals.css';

export const metadata = {
  metadataBase: new URL('https://lapdatdiennangluongmattroi.com'),
  title: 'Thành Đạt Solar - Điện Năng Lượng Mặt Trời Uy Tín Hà Nội',
  description: 'Chuyên lắp đặt, tư vấn và cung cấp thiết bị điện năng lượng mặt trời uy tín tại Hà Nội và toàn quốc.',
  openGraph: {
    title: 'Thành Đạt Solar - Điện Năng Lượng Mặt Trời Uy Tín Hà Nội',
    description: 'Chuyên lắp đặt, tư vấn và cung cấp thiết bị điện năng lượng mặt trời uy tín tại Hà Nội và toàn quốc.',
    url: 'https://lapdatdiennangluongmattroi.com',
    siteName: 'Thành Đạt Solar',
    locale: 'vi_VN',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/images/favicon-32x32.png', type: 'image/png' },
      { url: '/images/favicon.ico' },
    ],
    apple: [
      { url: '/images/favicon-32x32.png' },
    ],
  },
  other: {
    'format-detection': 'telephone=no',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
