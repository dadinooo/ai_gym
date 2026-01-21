import React from 'react';
import { motion } from 'framer-motion';
import { Home, Dumbbell, History, User } from 'lucide-react';

const Layout = ({ children, activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'dashboard', icon: Home, label: 'Home' },
    { id: 'workout', icon: Dumbbell, label: 'Workout' },
    { id: 'history', icon: History, label: 'History' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="flex flex-col h-screen w-full bg-gym-black text-white overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24 px-4 pt-6">
        <div className="max-w-md mx-auto w-full">
          {children}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gym-dark/80 backdrop-blur-lg border-t border-white/5 px-6 py-4 z-50">
        <div className="max-w-md mx-auto flex justify-between items-center">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex flex-col items-center gap-1 group"
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.2 : 1,
                    color: isActive ? '#ccff00' : '#888'
                  }}
                  className="transition-colors"
                >
                  <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                <span className={`text-[10px] font-medium tracking-wide ${isActive ? 'text-gym-accent' : 'text-gray-500'}`}>
                  {tab.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-2 w-1 h-1 bg-gym-accent rounded-full shadow-[0_0_8px_#ccff00]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;