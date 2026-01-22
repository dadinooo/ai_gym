import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import WorkoutLogger from './components/workout/WorkoutLogger';
import History from './components/history/History';
import Profile from './components/profile/Profile';
import ChatWidget from './components/chat/ChatWidget';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onStartWorkout={() => setActiveTab('workout')} />;
      case 'workout':
        return <WorkoutLogger onFinish={() => setActiveTab('dashboard')} />;
      case 'history':
        return <History />;
      case 'profile':
        return <Profile />;
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
      <ChatWidget />
    </Layout>
  );
}

export default App;