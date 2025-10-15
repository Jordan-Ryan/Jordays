'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const MobileOverlay: React.FC = () => {
  const { sidebarOpen, setSidebarOpen } = useApp();
  
  if (!sidebarOpen) return null;
  
  return (
    <div
      className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
      onClick={() => setSidebarOpen(false)}
    />
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { sidebarOpen } = useApp();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div
        className={`
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-16'}
        `}
      >
        {/* Header */}
        <Header />

        {/* Page content */}
        <main className="pt-16 min-h-screen">
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      <MobileOverlay />
    </div>
  );
};

export default Layout;