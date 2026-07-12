import { SAMPLE_OFFERS } from "@/data/data";
import Image from "next/image";



export default function OffersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans">
      {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Special Offers & Deals</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Transform your space for less. Explore our limited-time discounts and exclusive member rewards.
        </p>
      </header>

      {/* Offers Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SAMPLE_OFFERS.map((offer) => (
          <div 
            key={offer.id} 
            className="flex flex-col border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image & Badge */}
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={offer.imageUrl} 
                alt={offer.title} 
                fill
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white font-bold px-3 py-1 text-sm rounded">
                {offer.discount}
              </span>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-4">{offer.expiryDate}</p>
                
                {/* Promo Code or CTA */}
                {offer.code ? (
                  <div className="flex items-center justify-between bg-gray-50 border border-dashed border-gray-300 p-2 rounded">
                    <span className="text-xs text-gray-500 uppercase font-semibold">Code:</span>
                    <span className="font-mono text-sm font-bold text-gray-800 tracking-wider">{offer.code}</span>
                  </div>
                ) : (
                  <button className="w-full bg-black text-white text-sm font-medium py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                    Claim Offer
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}