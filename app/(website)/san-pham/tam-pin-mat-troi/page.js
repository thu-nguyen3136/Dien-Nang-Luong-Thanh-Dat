import SolarPanelGrid from '@/app/components/SolarPanelGrid';

export const metadata = {
  title: 'Tấm Pin Năng Lượng Mặt Trời Chính Hãng | Thành Đạt Solar',
  description: 'Cung cấp các dòng tấm pin mono, half-cell từ các thương hiệu hàng đầu: Jinko, Longi, Canadian Solar.',
};

export default function SolarPanelsPage() {
  return (
    <div style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <SolarPanelGrid />
    </div>
  );
}
