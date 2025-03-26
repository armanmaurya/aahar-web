import Link from "next/link";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0B0517] text-black min-h-screen flex flex-col">
        <NextTopLoader />
        {/* Main Layout Wrapper */}
        <div className="flex flex-col items-center flex-grow">
          {/* Header / Navbar */}
          <header className="w-full text-white p-6 shadow-lg">
            <nav className="flex justify-between items-center max-w-6xl mx-auto">
              <Link href="/" className="text-3xl font-bold">AAHAR</Link>
              <div className="hidden md:flex space-x-6 text-lg">
                <Link href="/" className="hover:text-gray-400">Home</Link>
                <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                <Link href="/deliveries" className="hover:text-gray-400">Deliveries</Link>
                <Link href="/housemakers" className="hover:text-gray-400">Housemakers</Link>
              </div>
              <Link href="/signup">
                <button className="bg-[#1DB9F0] text-black px-5 py-2 rounded-lg text-xl hover:bg-[#17A2D7]">
                  Sign Up
                </button>
              </Link>
            </nav>
          </header>

          {/* Dynamic Page Content */}
          <main className="w-full max-w-6xl p-6 flex flex-col items-center flex-grow mx-auto">
            {children}
          </main>

          {/* Footer */}
          <footer className="w-full bg-[#0B0517] text-gray-300 text-center py-4 mt-8 text-lg">
            © {new Date().getFullYear()} AAHAR. All Rights Reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
