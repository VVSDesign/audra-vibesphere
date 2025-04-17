
import React from 'react';
import Navigation from './Navigation';

interface MobileLayoutProps {
  children: React.ReactNode;
  hideNavigation?: boolean;
  title?: string;
  rightAction?: React.ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ 
  children, 
  hideNavigation = false,
  title,
  rightAction
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-audra-background text-white">
      <header className="sticky top-0 z-10 glass backdrop-blur-lg py-2 px-5 flex items-center justify-center">
        <div className="h-10 w-auto flex items-center justify-center">
          <span className="text-xl font-bold text-gradient-teal-purple">AUDRA</span>
        </div>
        {rightAction && (
          <div className="absolute right-5">
            {rightAction}
          </div>
        )}
      </header>
      
      <main className="flex-1 pb-20 overflow-auto scrollbar-hidden">
        {children}
      </main>
      
      {!hideNavigation && <Navigation />}
    </div>
  );
};

export default MobileLayout;
