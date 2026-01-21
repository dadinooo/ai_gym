import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Calendar, Trophy } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', volume: 4000 },
  { name: 'Tue', volume: 3000 },
  { name: 'Wed', volume: 2000 },
  { name: 'Thu', volume: 2780 },
  { name: 'Fri', volume: 1890 },
  { name: 'Sat', volume: 2390 },
  { name: 'Sun', volume: 3490 },
];

const Dashboard = ({ onStartWorkout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* Header */}
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-gray-400 text-sm font-medium uppercase tracking-widest">Welcome back</h2>
          <h1 className="text-3xl font-bold tracking-tight">Alex Johnson</h1>
        </div>
        <div className="w-12 h-12 rounded-full bg-gym-gray border border-white/10 flex items-center justify-center">
          <Trophy className="text-gym-accent" size={20} />
        </div>
      </header>

      {/* Quick Start Card */}
      <section>
        <button
          onClick={onStartWorkout}
          className="w-full bg-gym-accent hover:bg-[#b8e600] text-black p-6 rounded-3xl flex items-center justify-between group transition-all duration-300 active:scale-95 shadow-[0_10px_30px_-10px_rgba(204,255,0,0.3)]"
        >
          <div className="flex flex-col items-start text-left">
            <span className="text-xs font-bold uppercase tracking-wider opacity-70">Ready to train?</span>
            <span className="text-2xl font-black italic uppercase">Start Workout</span>
          </div>
          <div className="bg-black/10 p-3 rounded-2xl group-hover:scale-110 transition-transform">
            <Play fill="black" size={24} />
          </div>
        </button>
      </section>

      {/* Stats Grid */}
      <section className="grid grid-cols-2 gap-4">
        <div className="bg-gym-gray/50 border border-white/5 p-4 rounded-2xl">
          <TrendingUp className="text-gym-accent mb-2" size={20} />
          <div className="text-2xl font-bold">12.4k</div>
          <div className="text-xs text-gray-400">Total Volume (kg)</div>
        </div>
        <div className="bg-gym-gray/50 border border-white/5 p-4 rounded-2xl">
          <Calendar className="text-gym-accent mb-2" size={20} />
          <div className="text-2xl font-bold">5</div>
          <div className="text-xs text-gray-400">Day Streak</div>
        </div>
      </section>

      {/* Analytics Chart */}
      <section className="bg-gym-gray/50 border border-white/5 p-6 rounded-3xl space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Weekly Performance</h3>
          <span className="text-xs text-gym-accent bg-gym-accent/10 px-2 py-1 rounded-full">+12% vs last week</span>
        </div>
        <div className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="volume"
                stroke="#ccff00"
                strokeWidth={3}
                dot={false}
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e1e1e', border: 'none', borderRadius: '12px' }}
                itemStyle={{ color: '#ccff00' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Recent Workouts Placeholder */}
      <section className="space-y-4">
        <h3 className="font-bold">Recent Workouts</h3>
        {[1, 2].map((i) => (
          <div key={i} className="flex items-center gap-4 bg-gym-dark border border-white/5 p-4 rounded-2xl">
            <div className="w-12 h-12 bg-gym-gray rounded-xl flex items-center justify-center font-black italic text-gray-600">
              {i === 1 ? 'PUSH' : 'LEGS'}
            </div>
            <div className="flex-1">
              <div className="font-bold">{i === 1 ? 'Push Day A' : 'Heavy Leg Day'}</div>
              <div className="text-xs text-gray-500">2 days ago • 65 mins</div>
            </div>
            <div className="text-gym-accent font-mono text-sm">
              {i === 1 ? '4.2k' : '6.8k'} kg
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
};

export default Dashboard;