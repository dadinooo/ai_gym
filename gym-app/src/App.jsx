import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onStartWorkout={() => setActiveTab('workout')} />;
      case 'workout':
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="text-gym-accent text-6xl font-black italic">TRAINING</div>
            <p className="text-gray-400 max-w-[250px]">The workout logger interface is currently being calibrated.</p>
            <button
              onClick={() => setActiveTab('dashboard')}
              className="text-gym-accent border border-gym-accent/30 px-6 py-2 rounded-full text-sm"
            >
              Back to Dashboard
            </button>
          </div>
        );
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