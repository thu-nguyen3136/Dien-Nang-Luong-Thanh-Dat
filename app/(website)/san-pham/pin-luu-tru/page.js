import BatteryStorageGrid from '@/app/components/BatteryStorageGrid';

export const metadata = {
  title: 'Hệ Thống Pin Lưu Trữ Lithium Cao Cấp | Thành Đạt Solar',
  description: 'Cung cấp các dòng pin lưu trữ Lithium, Powerbox ES-Box12 Plus chính hãng, bảo hành lên đến 10 năm.',
};

export default function BatteryStoragePage() {
  return (
    <div style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <BatteryStorageGrid />
    </div>
  );
}
