import Navbar from "./_components/shared/navbar";
import CustomFooter from "./_components/shared/custom-footer";
import WhatsAppFab from "./_components/shared/whatsapp-fab";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <CustomFooter />
      <WhatsAppFab />
    </>
  );
}