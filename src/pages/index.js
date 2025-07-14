import Link from 'next/link';
import '@/styles/globals.css';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">Best Tech</span> Products
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Expert-curated lists of top-rated gadgets and gear to help you make informed purchasing decisions.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Top 10 Lists</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/blogs/top-gaming-monitors-under-15000">
            <a className="glow-card p-8 bg-gray-900/50 backdrop-blur-sm hover:border-[var(--primary)] group">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold group-hover:text-[var(--primary)] transition-colors">
                  Top Gaming Monitors Under ₹15,000
                </h3>
                <div className="bg-[var(--primary)] rounded-full w-10 h-10 flex items-center justify-center">
                  <span className="font-bold">10</span>
                </div>
              </div>
              <p className="text-gray-400">
                Discover the best gaming monitors that deliver high performance without breaking the bank.
              </p>
              <div className="mt-6 flex items-center text-[var(--primary)]">
                <span>Explore Now</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </a>
          </Link>
          
          {/* Add more featured lists here */}
          <div className="glow-card p-8 bg-gray-900/50 backdrop-blur-sm border-dashed border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-600">
                Coming Soon
              </h3>
              <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="font-bold text-gray-500">?</span>
              </div>
            </div>
            <p className="text-gray-600">
              We're working on more top 10 lists to help you find the best tech products.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
