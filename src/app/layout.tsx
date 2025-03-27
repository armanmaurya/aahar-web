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
      <body className="bg-yellow-50 text-black min-h-screen flex flex-col">
        <NextTopLoader />
        {/* Main Layout Wrapper */}
        <div className="flex flex-col items-center flex-grow">
          {/* Header / Navbar */}
          <header className="w-full text-black p-6">
            <nav className="flex justify-between items-center max-w-7xl mx-auto">
              <Link href="/" className="text-3xl font-bold">AAHAR</Link>
              <div className="hidden md:flex space-x-6 text-lg">
                <Link href="/" className="hover:text-gray-700">Home</Link>
                <Link href="/contact" className="hover:text-gray-700">Contact</Link>
                <Link href="/deliveries" className="hover:text-gray-700">Deliveries</Link>
                <Link href="/housemakers" className="hover:text-gray-700">Housemakers</Link>
              </div>
              <Link href="/signup">
                <button className="bg-[#FFC300] text-black px-5 py-2 rounded-lg text-xl hover:bg-[#FFD700]">
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
          <footer className="w-full text-gray-700 text-center py-4 mt-8 text-lg">
            © {new Date().getFullYear()} AAHAR. All Rights Reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
