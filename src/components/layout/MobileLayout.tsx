
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
      {title && (
        <header className="sticky top-0 z-10 glass backdrop-blur-lg py-4 px-5">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl">{title}</h1>
            {rightAction}
          </div>
        </header>
      )}
      
      <main className="flex-1 pb-20 overflow-auto scrollbar-hidden">
        {children}
      </main>
      
      {!hideNavigation && <Navigation />}
    </div>
  );
};

export default MobileLayout;
