import localFont from "next/font/local";
import "./globals.css";

import Navbar from "./components/Navbar";
import BottomNavbar from "./components/BottomNavbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
      
        <header className="top-0 sticky">
          <Navbar/>
        </header>
        <div className="min-h-screen ">
        {children}
        </div>
       
       
        <footer className="bottom-0 fixed ">
          <BottomNavbar/>
        </footer>
      </body>
    </html>
  );
}
