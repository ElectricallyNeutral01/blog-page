import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';

export default function GamingMonitorsBlog() {
  const [monitors, setMonitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Load data from JSON file
    const fetchData = async () => {
      try {
        const response = await fetch('/data/top_gaming_monitors.json');
        const data = await response.json();
        setMonitors(data);
      } catch (error) {
        console.error('Error loading monitor data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto text-center py-20">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--primary)]"></div>
        <p className="mt-4">Loading gaming monitors...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <article>
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Top 10 Gaming Monitors Under <span className="text-[var(--primary)]">₹15,000</span> in India
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the best gaming monitors that deliver exceptional performance without breaking the bank. 
            Our expert picks combine high refresh rates, quick response times, and immersive visuals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-gray-800 rounded-full">Updated: July 2025</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full">Expert Verified</span>
            <span className="px-4 py-2 bg-gray-800 rounded-full">Affiliate Links</span>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Key Features to Look For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="p-6 bg-gray-800/50 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">Refresh Rate</h3>
              <p>Higher refresh rates (144Hz+) provide smoother gameplay and competitive advantage.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">Response Time</h3>
              <p>Lower response times (1-5ms) reduce motion blur and ghosting in fast-paced games.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">Panel Type</h3>
              <p>IPS for better colors, VA for contrast, TN for fastest response times.</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">Adaptive Sync</h3>
              <p>FreeSync or G-Sync compatibility eliminates screen tearing and stuttering.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Our Top Picks</h2>
            <div className="text-sm px-4 py-2 bg-gray-800 rounded-full">
              Sorted by Rating & Value
            </div>
          </div>

          <div className="space-y-8">
            {monitors.map((monitor, index) => (
              <ProductCard 
                key={monitor.rank} 
                product={monitor} 
                rank={index + 1} 
              />
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-[var(--dark)] to-[var(--darker)] p-8 rounded-2xl mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Final Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--primary)] mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Best Overall</h3>
              <p className="text-gray-300">
                Samsung 24" Odyssey G3 offers the perfect balance of performance and features.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--primary)] mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Best Value</h3>
              <p className="text-gray-300">
                Acer EK240Y P6 delivers premium specs at an unbeatable price point.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-[var(--primary)] mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Best for Esports</h3>
              <p className="text-gray-300">
                Lenovo Legion-R25f-30 with its 240Hz refresh rate is perfect for competitive gaming.
              </p>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}