import Link from "next/link";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col font-[Inter]">
        <NextTopLoader />
        
        {/* Main Layout Wrapper */}
        <div className="flex flex-col items-center flex-grow">
          {/* Header / Navbar */}
          <header className="w-full bg-white shadow-md py-4">
            <nav className="flex justify-between items-center max-w-7xl mx-auto px-6">
              <Link href="/" className="text-3xl font-bold text-black tracking-wide">AAHAR</Link>
              
              <div className="hidden md:flex space-x-6 text-lg">
                {["Home", "Contact", "Deliveries", "Housemakers"].map((item) => (
                  <Link key={item} href={`/${item.toLowerCase()}`} className="relative group">
                    <span className="hover:text-[#FFC300] transition">{item}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#FFC300] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              <Link href="/signup">
                <button className="bg-[#FFC300] text-black px-6 py-2 rounded-lg text-xl font-medium shadow-md hover:bg-[#FFD700] hover:shadow-lg transition-all">
                  Sign Up
                </button>
              </Link>
            </nav>
          </header>

          {/* Dynamic Page Content */}
          <main className="w-full max-w-6xl p-8 flex flex-col items-center flex-grow mx-auto">
            {children}
          </main>

          {/* Footer */}
          <footer className="w-full bg-gray-100 text-gray-600 py-6 mt-8 text-lg shadow-inner">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
              <span>© {new Date().getFullYear()} AAHAR. All Rights Reserved.</span>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <Link href="/privacy" className="hover:text-gray-900 transition">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-gray-900 transition">Terms of Use</Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
