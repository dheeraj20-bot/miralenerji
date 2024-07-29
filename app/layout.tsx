import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miral Energy",
  description: "Miral Enerji, yenilikçi ve çevre dostu enerji çözümleri sunan Balıkesir merkezli bir şirkettir. Misyonumuz, güneş enerjisiyle sürdürülebilir bir gelecek inşa etmektir. Güneş enerjisinin sınırsız potansiyelini kullanarak, hem çevreyi korumayı hem de müşterilerimize ekonomik ve güvenilir enerji çözümleri sunmayı amaçlıyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col h-screen">
        <Navbar /> 
      {children}
      
      </div>
      </body>
    </html>
  );
}
