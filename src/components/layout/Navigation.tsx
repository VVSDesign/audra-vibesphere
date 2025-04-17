
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Layers, User } from 'lucide-react';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { 
      path: '/', 
      label: 'Drop Feed', 
      icon: Home,
      active: location.pathname === '/'
    },
    { 
      path: '/search', 
      label: 'Search', 
      icon: Search,
      active: location.pathname === '/search'
    },
    { 
      path: '/audrahub', 
      label: 'AudraHub', 
      icon: Layers,
      active: location.pathname === '/audrahub' || location.pathname.startsWith('/audrahub/')
    },
    { 
      path: '/profile', 
      label: 'Profile', 
      icon: User,
      active: location.pathname === '/profile'
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-audra-dark glass border-t border-white/10 px-2">
      <div className="flex h-full items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={`flex flex-col items-center justify-center w-1/4 h-full ${
              item.active 
                ? 'text-gradient-teal-purple font-medium' 
                : 'text-white/60 hover:text-white/90'
            }`}
          >
            <item.icon 
              size={20} 
              className={item.active ? 'mb-1' : 'mb-1 opacity-80'} 
            />
            <span className="text-xs">{item.label}</span>
            {item.active && (
              <span className="absolute bottom-0 w-10 h-1 rounded-t-md bg-gradient-teal-purple" />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
