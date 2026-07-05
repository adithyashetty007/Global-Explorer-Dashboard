import {
  Globe2,
  LayoutDashboard,
  Heart,
  Scale,
  Clock3,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navigation = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Countries',
    to: '/countries',
    icon: Globe2,
  },
  {
    name: 'Compare',
    to: '/compare',
    icon: Scale,
  },
  {
    name: 'Favourites',
    to: '/favourites',
    icon: Heart,
  },
  {
    name: 'Recently Viewed',
    to: '/recent',
    icon: Clock3,
  },
];

export function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-slate-200 bg-white">
      <div className="border-b border-slate-200 px-6 py-8">
        <h1 className="text-2xl font-bold text-slate-900">
          🌍 Country Explorer
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Explore countries around the world
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`
              }
            >
              <Icon size={20} />

              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-slate-200 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
            A
          </div>

          <div>
            <p className="font-semibold text-slate-900">
              Adithya
            </p>

            <p className="text-sm text-slate-500">
              Frontend Developer
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}