'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { NavigationItem } from '@/types';

const navigationItems: NavigationItem[] = [
  { id: 'today', label: 'Today', icon: '📅', href: '/today' },
  { id: 'tasks', label: 'Tasks', icon: '✅', href: '/tasks' },
  { id: 'calendar', label: 'Calendar', icon: '📆', href: '/calendar' },
  { id: 'notes', label: 'Notes', icon: '📝', href: '/notes' },
  { id: 'habits', label: 'Habits', icon: '🔄', href: '/habits' },
];

const Sidebar: React.FC = () => {
  const { sidebarOpen, currentPage, setCurrentPage } = useApp();

  const handleItemClick = (item: NavigationItem) => {
    setCurrentPage(item.label);
  };

  return (
    <aside
      className={`
        fixed left-0 top-0 z-40 h-full bg-white border-r border-gray-200 transition-all duration-300 ease-in-out
        ${sidebarOpen ? 'w-64' : 'w-16'}
        lg:translate-x-0
      `}
    >
      <div className="flex h-full flex-col">
        {/* Logo/Brand */}
        <div className="flex h-16 items-center justify-center border-b border-gray-200 px-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white font-bold text-sm">
              P
            </div>
            {sidebarOpen && (
              <span className="text-lg font-bold text-black">Productivity</span>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleItemClick(item)}
              className={`
                group flex items-center rounded-lg px-3 py-3 text-sm font-medium transition-all duration-200
                ${
                  currentPage === item.label
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                }
                ${!sidebarOpen ? 'justify-center' : ''}
              `}
            >
              <span className="text-lg">{item.icon}</span>
              {sidebarOpen && (
                <span className="ml-3 transition-opacity duration-200">
                  {item.label}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Bottom section */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gray-300"></div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">User</p>
                <p className="text-xs text-gray-500">user@example.com</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;