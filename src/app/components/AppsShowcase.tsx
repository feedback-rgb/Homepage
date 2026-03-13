import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import wallpaperAppIcon from '@/assets/ic_wallpaper.png';

const app = {
  id: 1,
  name: 'Paw Byte Labs™ - Wallpaper Master',
  description: 'Transform your Android screen with Wallpaper Master – the simple, powerful personalization app with 4K static wallpapers, smooth video wallpapers, and immersive 3D parallax effects. Designed for all styles and devices, it turns your home/lock screen into a stunning visual experience, making every unlock feel fresh.',
  icon: wallpaperAppIcon,
  category: 'New',
  gradient: 'from-blue-600 to-cyan-500',
  downloadUrl: 'https://play.google.com/store/apps/details?id=com.pawbytelabs.wallpaper',
};

export function AppsShowcase() {
  return (
    <section id="apps" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our App
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted live wallpaper engine, designed to personalize your device with beautiful dynamic backgrounds
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-gray-100 max-w-md w-full">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gray-900 flex items-center justify-center shadow-lg overflow-hidden">
                  <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
                </div>
                <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 border-blue-200">
                  {app.category}
                </Badge>
              </div>
              <CardTitle className="text-2xl">{app.name}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {app.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href={app.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className={`w-full bg-gradient-to-r ${app.gradient} hover:from-blue-700 hover:to-cyan-600 text-white shadow-md hover:shadow-lg transition-all text-base py-6`}>
                  Download on Google Play
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}