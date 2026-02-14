import { Smartphone, Users, Zap, Shield, Heart, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Beautiful Design',
    description: 'Each app is carefully designed to provide smooth user experience and beautiful interface',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Users,
    title: 'Millions of Users',
    description: 'Our apps have been downloaded and loved by millions of users, receiving high ratings',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  {
    icon: Zap,
    title: 'Regular Updates',
    description: 'Regularly update new features and content to keep apps fresh',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
  {
    icon: Shield,
    title: 'Safe & Reliable',
    description: 'Strict security standards to protect user privacy and data security',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    icon: Heart,
    title: 'Crafted with Care',
    description: 'We love creating and carefully craft every detail to bring joy to users',
    color: 'text-sky-600',
    bgColor: 'bg-sky-100',
  },
  {
    icon: Sparkles,
    title: 'Unlimited Creativity',
    description: 'Constantly exploring new ideas and possibilities, bringing unexpected surprises',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to creating high-quality fun apps, providing excellent user experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
