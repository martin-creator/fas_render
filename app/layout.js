import { DM_Sans } from "next/font/google";
import "./globals.css";
import { EventContextProvider } from "@/context/eventContext";

const dmSans = DM_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Future African Scientist",
  description: "Fostering the next generation of African scientists and engineers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        {/* {children} */}
        <EventContextProvider> {children}</EventContextProvider>
      </body>
    </html>
  );
}
