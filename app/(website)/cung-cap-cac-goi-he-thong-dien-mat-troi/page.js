import SystemProductGrid from '@/app/components/SystemProductGrid';
import { getData } from '@/lib/db';

export const metadata = {
  title: 'Các Gói Hệ Thống Điện Mặt Trời Trọn Gói | Thành Đạt Solar',
  description: 'Cung cấp các gói giải pháp điện mặt trời hòa lưới, có lưu trữ cho hộ gia đình và doanh nghiệp với chi phí tối ưu nhất.',
};

export default function SystemPackagesPage() {
  const data = getData();
  const products = data.products || [];
  const systemProducts = products.filter(p => !p.id.startsWith('solar-') && !p.id.startsWith('battery-'));

  return (
    <div style={{ paddingTop: '40px', paddingBottom: '60px' }}>
      <SystemProductGrid products={systemProducts} />
    </div>
  );
}
