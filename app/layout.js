import { DM_Sans } from "next/font/google";
import "./globals.css";
import { EventContextProvider } from "@/context/eventContext";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <head>
      <title>{metadata.title}</title>
      <meta name="description" content="Future African Scientist is a non-profit organization that fosters the next generation of African scientists and engineers." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta property="og:title" content="Future African Scientist" />
      <meta property="og:description" content="Fostering the next generation of African scientists and engineers" />
      <meta property="og:image" content="public/favicon.ico" />
        <link
          rel="icon"
          href="public/favicon.ico"
        />
      </head>
      <body className={dmSans.className}>
        {/* {children} */}
        <EventContextProvider> {children}</EventContextProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
