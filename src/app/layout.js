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
        <header className="w-100">
          <nav className="w-100 flex justify-center ">
            <Link className="m-1 hover:text-red-800" href="/">
              Home
            </Link>
            <Link className="m-1 hover:text-red-800" href="/management">
              Manage Recipe
            </Link>
          </nav>
        </header>
        {children}
        <footer className="text-center">&copy; Louis Perkins</footer>
      </body>
    </html>
  );
}
