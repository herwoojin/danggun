
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.tsx';
import ApplyScreen from './screens/ApplyScreen.tsx';
import TrackingScreen from './screens/TrackingScreen.tsx';
import DriverConsoleScreen from './screens/DriverConsoleScreen.tsx';
import ReviewScreen from './screens/ReviewScreen.tsx';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden mx-auto max-w-md bg-background-light dark:bg-background-dark shadow-2xl transition-colors duration-200 font-display text-text-main-light dark:text-text-main-dark">
    {children}
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/apply" element={<ApplyScreen />} />
          <Route path="/tracking" element={<TrackingScreen />} />
          <Route path="/driver" element={<DriverConsoleScreen />} />
          <Route path="/review" element={<ReviewScreen />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
