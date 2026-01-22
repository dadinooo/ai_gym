import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, TrendingUp } from 'lucide-react';

const historyData = [
  { id: 1, type: 'PUSH', name: 'Push Day A', date: 'Yesterday', duration: '65 mins', volume: '4.2k' },
  { id: 2, type: 'LEGS', name: 'Heavy Leg Day', date: '3 days ago', duration: '80 mins', volume: '6.8k' },
  { id: 3, type: 'PULL', name: 'Pull Day B', date: '5 days ago', duration: '55 mins', volume: '3.9k' },
  { id: 4, type: 'UPPER', name: 'Upper Body Power', date: '1 week ago', duration: '70 mins', volume: '5.1k' },
  { id: 5, type: 'LOWER', name: 'Lower Body Hypertrophy', date: '1 week ago', duration: '75 mins', volume: '6.2k' },
];

const History = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <header className="mb-8">
        <h2 className="text-gray-400 text-sm font-medium uppercase tracking-widest">Your Journey</h2>
        <h1 className="text-3xl font-bold tracking-tight">Workout History</h1>
      </header>

      {/* Monthly Summary Card */}
      <div className="bg-gym-gray/50 border border-white/5 p-6 rounded-3xl flex justify-between items-center">
        <div>
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-1">This Month</div>
          <div className="text-3xl font-black italic text-white">14 <span className="text-base font-normal not-italic text-gray-500">Workouts</span></div>
        </div>
        <div className="w-12 h-12 rounded-full bg-gym-accent/10 flex items-center justify-center">
          <Calendar className="text-gym-accent" size={24} />
        </div>
      </div>

      <div className="space-y-4">
        {historyData.map((workout, index) => (
          <motion.div
            key={workout.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-gym-dark border border-white/5 hover:border-gym-accent/30 p-4 rounded-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              {/* Type Badge */}
              <div className="w-14 h-14 bg-gym-gray rounded-xl flex items-center justify-center flex-shrink-0">
                 <span className="font-black italic text-gray-600 text-xs">{workout.type}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold truncate pr-2 text-white group-hover:text-gym-accent transition-colors">
                    {workout.name}
                  </h3>
                  <span className="text-gym-accent font-mono text-xs whitespace-nowrap bg-gym-accent/10 px-2 py-0.5 rounded">
                    {workout.volume} kg
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {workout.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {workout.duration}
                  </span>
                </div>
              </div>

              <ChevronRight className="text-gray-700 group-hover:text-gym-accent transition-colors" size={20} />
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="text-center text-gray-500 text-xs uppercase tracking-widest pt-8 pb-4">
        End of History
      </div>
    </motion.div>
  );
};

export default History;
