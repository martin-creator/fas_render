import { DM_Sans } from "next/font/google";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "African Scientist",
  description: "Future African Scientist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
