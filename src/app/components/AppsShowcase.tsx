import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import wallpaperAppIcon from '@/assets/ic_wallpaper.png';

const app = {
  name: 'Paw Byte Labs™ - Wallpaper Master',
  description:
    'Transform your Android screen with Wallpaper Master – the simple, powerful personalization app with 4K static wallpapers, smooth video wallpapers, and immersive 3D parallax effects. Designed for all styles and devices, it turns your home/lock screen into a stunning visual experience, making every unlock feel fresh.',
  icon: wallpaperAppIcon,
  category: 'New',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pawbytelabs.wallpaper',
  // Replace public/downloads/wallpaper-master-latest.apk when shipping a new build
  apkUrl: '/downloads/wallpaper-master-latest.apk',
  apkFileName: 'Wallpaper-Master-latest.apk',
};

export function AppsShowcase() {
  return (
    <section id="apps" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our App</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted live wallpaper engine, designed to personalize your device
            with beautiful dynamic backgrounds
          </p>
        </div>

        <div className="mx-auto max-w-5xl rounded-3xl border-2 border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl sm:p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
            <div className="relative shrink-0">
              <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-[1.75rem] bg-gray-900 shadow-lg sm:h-36 sm:w-36 md:h-40 md:w-40">
                <img
                  src={app.icon}
                  alt={app.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <Badge className="absolute -right-2 -top-2 border-blue-200 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700">
                {app.category}
              </Badge>
            </div>

            <div className="min-w-0 flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {app.name}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">{app.description}</p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 md:w-56">
              <a
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="h-12 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-base text-white shadow-md transition-all hover:from-blue-700 hover:to-cyan-600 hover:shadow-lg">
                  Download on Google Play
                </Button>
              </a>
              <a
                href={app.apkUrl}
                download={app.apkFileName}
                className="block"
              >
                <Button
                  variant="outline"
                  className="h-12 w-full border-2 border-gray-200 bg-white text-base text-gray-900 transition-all hover:border-gray-300 hover:bg-gray-50"
                >
                  Download
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
