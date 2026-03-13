import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import heroCatAutumn from '@/assets/ic_home.png';

export function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-700">Add Fun to Life</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Create
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {' '}Fun{' '}
              </span>
              App Experiences
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              PawByteLabs is dedicated to developing innovative and fun mobile applications, bringing joy and convenience to millions of users. Our apps are available on Google Play.
            </p>

            {/* Google Play Badge */}
            <div className="pt-4">
              <a 
                href="https://play.google.com/store/apps/dev?id=4622397716372917523" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src={heroCatAutumn}
                alt="Relaxing Cat in Autumn"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}