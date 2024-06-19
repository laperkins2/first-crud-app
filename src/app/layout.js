import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'First CRUD App',
  description: 'A recipe management system that manages recipes.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <nav className="relative flex justify-between h-16 items-center">
              <Link className="m-1 hover:text-red-800" href="/">
                Home
              </Link>
              <Link className="m-1 hover:text-red-800" href="/management">
                Manage Recipe
              </Link>
            </nav>
          </div>
        </header>

        {children}
        <footer className="text-center bg-gray-800 text-white py-4">
          &copy; Louis Perkins
        </footer>
      </body>
    </html>
  );
}
