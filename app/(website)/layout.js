import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import FloatingContact from '@/app/components/FloatingContact';

export default function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContact />
    </>
  );
}
