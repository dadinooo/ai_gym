import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  Bell, 
  Moon, 
  Ruler, 
  ChevronRight, 
  LogOut, 
  Shield, 
  HelpCircle,
  Edit2
} from 'lucide-react';

const Profile = () => {
  const settingsGroups = [
    {
      title: 'App Settings',
      items: [
        { icon: Bell, label: 'Notifications', value: 'On' },
        { icon: Moon, label: 'Appearance', value: 'Dark' },
        { icon: Ruler, label: 'Units', value: 'Metric' },
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: Shield, label: 'Privacy Policy' },
        { icon: HelpCircle, label: 'Help & Support' },
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <header className="flex flex-col items-center pt-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-gym-gray border-2 border-gym-accent flex items-center justify-center mb-4 overflow-hidden">
             {/* Placeholder for actual user image, using icon for now */}
            <User className="text-gray-400" size={40} />
          </div>
          <button className="absolute bottom-4 right-0 bg-gym-accent text-black p-2 rounded-full shadow-lg border border-black active:scale-95 transition-transform">
            <Edit2 size={14} />
          </button>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Alex Johnson</h1>
        <p className="text-gray-400 text-sm">Gym Enthusiast</p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-3 gap-3">
        {[
          { label: 'Weight', value: '75', unit: 'kg' },
          { label: 'Height', value: '180', unit: 'cm' },
          { label: 'Age', value: '24', unit: 'yo' },
        ].map((stat, i) => (
          <div key={i} className="bg-gym-gray/50 border border-white/5 p-3 rounded-2xl text-center">
            <div className="text-xl font-bold text-white">{stat.value}</div>
            <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Settings Groups */}
      <div className="space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <section key={groupIndex} className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 pl-2">
              {group.title}
            </h3>
            <div className="bg-gym-gray/30 border border-white/5 rounded-3xl overflow-hidden">
              {group.items.map((item, i) => (
                <button
                  key={i}
                  className={`w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors ${
                    i !== group.items.length - 1 ? 'border-b border-white/5' : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gym-dark rounded-xl text-gym-accent">
                      <item.icon size={18} />
                    </div>
                    <span className="font-medium text-sm">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.value && (
                      <span className="text-xs text-gray-500 font-medium">{item.value}</span>
                    )}
                    <ChevronRight size={16} className="text-gray-600" />
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Logout Button */}
      <section>
        <button className="w-full flex items-center justify-center gap-2 text-red-400 font-medium p-4 rounded-2xl hover:bg-red-500/10 transition-colors border border-transparent hover:border-red-500/20">
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </section>

      <div className="h-4"></div>
    </motion.div>
  );
};

export default Profile;
