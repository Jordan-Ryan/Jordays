'use client';

import { useApp } from '@/context/AppContext';
import { useEffect } from 'react';

export default function TodayPage() {
  const { setCurrentPage } = useApp();

  useEffect(() => {
    setCurrentPage('Today');
  }, [setCurrentPage]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-black mb-4">Today&apos;s Overview</h2>
        <p className="text-gray-600 mb-6">
          Your daily productivity dashboard. Here you can see your tasks, habits, and notes for today.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-black mb-2">Tasks</h3>
            <p className="text-sm text-gray-600">0 tasks for today</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-black mb-2">Habits</h3>
            <p className="text-sm text-gray-600">0 habits to track</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-black mb-2">Notes</h3>
            <p className="text-sm text-gray-600">0 notes today</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Quick Actions</h3>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Add Task
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Add Note
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            Add Habit
          </button>
        </div>
      </div>
    </div>
  );
}