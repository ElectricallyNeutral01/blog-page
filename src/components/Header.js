import Link from 'next/link';

export default function Header() {
  return (
    <header className="py-6 px-4 sm:px-8 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-10 h-10 bg-[var(--primary)] rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold">10</span>
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
              Top10Tech
            </h1>
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <a className="hover:text-[var(--primary)] transition-colors">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs/top-gaming-monitors-under-15000">
                <a className="hover:text-[var(--primary)] transition-colors">Top Monitors</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}