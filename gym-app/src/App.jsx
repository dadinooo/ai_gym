import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import WorkoutLogger from './components/workout/WorkoutLogger';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onStartWorkout={() => setActiveTab('workout')} />;
      case 'workout':
        return <WorkoutLogger onFinish={() => setActiveTab('dashboard')} />;
      default:
        return (
          <div className="flex items-center justify-center h-[60vh] text-gray-500 italic uppercase tracking-widest">
            {activeTab} Coming Soon
          </div>
        );
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;