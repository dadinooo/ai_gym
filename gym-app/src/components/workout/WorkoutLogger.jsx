import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Check, Clock, ChevronRight, X, Play, Video } from 'lucide-react';

const exercises = [
  { id: 1, name: 'Barbell Bench Press', sets: 3, target: '8-12 reps' },
  { id: 2, name: 'Incline Dumbbell Press', sets: 3, target: '10-12 reps' },
  { id: 3, name: 'Lateral Raises', sets: 4, target: '15 reps' },
  { id: 4, name: 'Tricep Pushdowns', sets: 3, target: '12-15 reps' },
];

const WorkoutLogger = ({ onFinish }) => {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [sets, setSets] = useState([{ id: 1, kg: '', reps: '', completed: false }]);
  const [restTimer, setRestTimer] = useState(0);
  const [isResting, setIsResting] = useState(false);

  const currentExercise = exercises[currentExerciseIndex];

  // Timer Logic
  useEffect(() => {
    let interval;
    if (isResting && restTimer > 0) {
      interval = setInterval(() => setRestTimer((t) => t - 1), 1000);
    } else if (restTimer === 0) {
      setIsResting(false);
    }
    return () => clearInterval(interval);
  }, [isResting, restTimer]);

  const addSet = () => {
    setSets([...sets, { id: sets.length + 1, kg: '', reps: '', completed: false }]);
  };

  const completeSet = (id) => {
    setSets(sets.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s)));
    // Start 60s rest timer if completing a set
    if (!sets.find(s => s.id === id).completed) {
      setRestTimer(60);
      setIsResting(true);
    }
  };

  const nextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
      setSets([{ id: 1, kg: '', reps: '', completed: false }]);
      setRestTimer(0);
      setIsResting(false);
    } else {
      onFinish();
    }
  };

  return (
    <div className="h-full flex flex-col relative">
      {/* Exercise Header */}
      <motion.div 
        key={currentExercise.id}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="mb-6"
      >
        <div className="text-xs font-bold text-gym-accent uppercase tracking-widest mb-1">
          Exercise {currentExerciseIndex + 1}/{exercises.length}
        </div>
        <h2 className="text-3xl font-black italic uppercase leading-none">{currentExercise.name}</h2>
        <div className="flex items-center justify-between mt-2">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <span>Target: <span className="text-white font-mono">{currentExercise.target}</span></span>
          </div>
          <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-gym-accent px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-colors border border-gym-accent/20">
            <Video size={14} />
            Record
          </button>
        </div>
      </motion.div>

      {/* Sets List */}
      <div className="flex-1 overflow-y-auto space-y-3 pb-20">
        <div className="grid grid-cols-10 gap-2 text-xs text-gray-500 uppercase font-bold tracking-wider mb-2 px-2">
          <div className="col-span-2 text-center">Set</div>
          <div className="col-span-3 text-center">Kg</div>
          <div className="col-span-3 text-center">Reps</div>
          <div className="col-span-2"></div>
        </div>

        <AnimatePresence>
          {sets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`grid grid-cols-10 gap-2 items-center p-2 rounded-xl border transition-all duration-300 ${
                set.completed 
                  ? 'bg-gym-accent/10 border-gym-accent/30' 
                  : 'bg-gym-gray border-white/5'
              }`}
            >
              <div className="col-span-2 flex justify-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  set.completed ? 'bg-gym-accent text-black' : 'bg-white/10 text-gray-400'
                }`}>
                  {index + 1}
                </div>
              </div>
              
              <div className="col-span-3">
                <input
                  type="number"
                  placeholder="0"
                  className={`w-full bg-transparent text-center font-mono text-lg outline-none ${
                    set.completed ? 'text-gym-accent' : 'text-white'
                  }`}
                  value={set.kg}
                  onChange={(e) => {
                    const newSets = [...sets];
                    newSets[index].kg = e.target.value;
                    setSets(newSets);
                  }}
                  disabled={set.completed}
                />
              </div>

              <div className="col-span-3">
                <input
                  type="number"
                  placeholder="0"
                  className={`w-full bg-transparent text-center font-mono text-lg outline-none ${
                    set.completed ? 'text-gym-accent' : 'text-white'
                  }`}
                  value={set.reps}
                  onChange={(e) => {
                    const newSets = [...sets];
                    newSets[index].reps = e.target.value;
                    setSets(newSets);
                  }}
                  disabled={set.completed}
                />
              </div>

              <div className="col-span-2 flex justify-center">
                <button
                  onClick={() => completeSet(set.id)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    set.completed 
                      ? 'bg-gym-accent text-black shadow-[0_0_15px_rgba(204,255,0,0.4)]' 
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {set.completed ? <Check size={20} /> : <Check size={20} className="opacity-20" />}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <button
          onClick={addSet}
          className="w-full py-3 border border-dashed border-white/20 rounded-xl text-gray-500 text-sm font-medium flex items-center justify-center gap-2 hover:border-gym-accent/50 hover:text-gym-accent transition-colors"
        >
          <Plus size={16} /> Add Set
        </button>
      </div>

      {/* Floating Rest Timer & Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-gym-black/90 backdrop-blur-xl border-t border-white/10 p-4 flex items-center justify-between gap-4">
        {isResting ? (
          <div className="flex items-center gap-3 text-gym-accent">
            <Clock className="animate-pulse" size={20} />
            <span className="font-mono text-xl font-bold">00:{restTimer < 10 ? `0${restTimer}` : restTimer}</span>
            <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Resting</span>
          </div>
        ) : (
           <div className="flex items-center gap-3 text-gray-500">
            <Play size={20} />
            <span className="text-xs font-medium uppercase tracking-wider">Active</span>
          </div>
        )}

        <button
          onClick={nextExercise}
          className="bg-white text-black px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center gap-2 hover:bg-gray-200 transition-colors"
        >
          {currentExerciseIndex < exercises.length - 1 ? 'Next Exercise' : 'Finish Workout'}
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default WorkoutLogger;