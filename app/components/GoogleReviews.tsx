import Link from 'next/link';
import Image from 'next/image';
export default function GoogleReviews() {
  return (
    <section className="py-20 bgPage">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="flex text-yellow-400 text-2xl">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">5.0 EXCELLENT</h2>
          <div className="relative mb-8">
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg text-gray-600 flex items-center justify-center gap-2 mb-2">
                Basée sur <strong>100% des avis</strong>
                <Image 
                  src="/badge.png" 
                  alt="Badge Google" 
                  className="w-6 h-6"
                  width={24}
                  height={24}
                  style={{ display: 'inline-block' }} 
                />
              </p>
              <Link href="https://g.page/r/CYU8G8pY5uo1EBM/review" target="_blank" rel="noopener noreferrer" className='p-4'>
                <button className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition w-64 h-20">
                  Écrire un avis
                </button>
              </Link>
            </div>
            <Image  
              src="/qrcode.png" 
              alt="QR Code Google" 
              className="w-24 h-24 absolute top-0 right-0 hidden md:block"
              width={96}
              height={96}
            />
          </div>
          
          {/* Logo Google */}
          <div className="flex items-center justify-center space-x-2 mb-8">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-700 font-medium">Google</span>
          </div>
        </div>
       </div>
    </section>
  );
} 