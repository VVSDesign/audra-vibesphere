
import React from 'react';
import Navigation from './Navigation';
import audraLogo from '/lovable-uploads/a2f484bd-69ca-43c3-9d3d-94a04457c928.png';

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
        <img 
          src={audraLogo} 
          alt="AUDRA Logo" 
          className="h-10 w-auto object-contain"
        />
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
