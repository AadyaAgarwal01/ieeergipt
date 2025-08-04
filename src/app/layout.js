
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "./landingpage/Header/page";
import CanvasCursor from "@/components/ui/canvas-cursor-effect";
import Footer from "./Footer/page";
import CanvasCursorWrapper from "./handelningthedesktop/page"; // adjust path accordingly

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IEEE SB RGIPT",
  description: "THIS IS THE WEBSITE OF THE IEEE RGIPT",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarDemo></NavbarDemo>
        {/* <CanvasCursor></CanvasCursor> */}

        <CanvasCursorWrapper></CanvasCursorWrapper>

        {/* bg-gradient-to-r from-[#404371] to-[#780831] */}


        {children}

        <Footer></Footer>
      </body>
    </html>
  );
}
