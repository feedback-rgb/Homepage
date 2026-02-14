import { Download, Star, Users, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Download,
    value: '5M+',
    label: 'Total Downloads',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Star,
    value: '4.7',
    label: 'Average Rating',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  {
    icon: Users,
    value: '2M+',
    label: 'Active Users',
    color: 'text-teal-600',
    bgColor: 'bg-teal-100',
  },
  {
    icon: Trophy,
    value: '15+',
    label: 'Award-winning Apps',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
];

export function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-blue-100">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
