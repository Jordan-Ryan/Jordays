'use client';

import { useApp } from '@/context/AppContext';
import { useEffect } from 'react';

export default function HabitsPage() {
  const { setCurrentPage } = useApp();

  useEffect(() => {
    setCurrentPage('Habits');
  }, [setCurrentPage]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-black mb-4">Habits</h2>
        <p className="text-gray-600 mb-6">
          Track your daily habits and build positive routines.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
              <div>
                <span className="font-medium text-black">Morning Exercise</span>
                <p className="text-sm text-gray-600">30 minutes daily</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">7 day streak</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
              <div>
                <span className="font-medium text-black">Read for 30 minutes</span>
                <p className="text-sm text-gray-600">Before bed</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">3 day streak</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
              <div>
                <span className="font-medium text-black">Drink 8 glasses of water</span>
                <p className="text-sm text-gray-600">Throughout the day</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-500">5 day streak</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Add New Habit</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Habit name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Habit description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            rows={3}
          />
          <div className="flex space-x-4">
            <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black">
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
            <input
              type="time"
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Add Habit
          </button>
        </div>
      </div>
    </div>
  );
}