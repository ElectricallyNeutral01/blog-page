import RatingStars from './RatingStars';
import SpecBadge from './SpecBadge';

export default function ProductCard({ product, rank }) {
  return (
    <div className={`glow-card p-6 bg-gray-900/50 backdrop-blur-sm ${rank <= 3 ? 'border-2 border-[var(--primary)]' : ''}`}>
      <div className="flex items-start space-x-6">
        {/* Rank Badge */}
        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
          ${rank === 1 ? 'bg-gradient-to-r from-yellow-600 to-yellow-800' : 
             rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-600' : 
             rank === 3 ? 'bg-gradient-to-r from-amber-700 to-amber-900' : 
             'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'}`}>
          #{rank}
        </div>
        
        {/* Product Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{product.title}</h3>
          
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="text-2xl font-bold">₹{product.price.toLocaleString()}</div>
            <RatingStars rating={product.rating} />
            <div className="text-sm text-gray-400">{product.reviews} reviews</div>
          </div>
          
          {/* Key Specifications */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {product.specifications['Refresh Rate'] !== 'N/A' && (
              <SpecBadge label="Refresh Rate" value={product.specifications['Refresh Rate']} />
            )}
            {product.specifications['Response Time'] !== 'N/A' && (
              <SpecBadge label="Response Time" value={product.specifications['Response Time']} />
            )}
            {product.specifications['Screen Size'] !== 'N/A' && (
              <SpecBadge label="Screen Size" value={product.specifications['Screen Size']} />
            )}
            {product.specifications['Display Type'] !== 'N/A' && (
              <SpecBadge label="Panel Type" value={product.specifications['Display Type']} />
            )}
            {product.specifications['Sync Technology'] !== 'N/A' && (
              <SpecBadge label="Sync Tech" value={product.specifications['Sync Technology']} />
            )}
            {product.specifications['HDR'] !== 'N/A' && product.specifications['HDR'] !== false && (
              <SpecBadge label="HDR" value="Yes" />
            )}
          </div>
          
          {/* Buy Now Button */}
          <a 
            href={product.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Buy Now on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}