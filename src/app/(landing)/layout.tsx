
import Navbar from "./_components/shared/navbar";
import CustomFooter from "./_components/shared/custom-footer";

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
    </>
  );
}