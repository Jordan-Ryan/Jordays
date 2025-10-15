'use client';

import { useApp } from '@/context/AppContext';
import { useEffect } from 'react';

export default function TasksPage() {
  const { setCurrentPage } = useApp();

  useEffect(() => {
    setCurrentPage('Tasks');
  }, [setCurrentPage]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-black mb-4">Tasks</h2>
        <p className="text-gray-600 mb-6">
          Manage your tasks and stay organized. Create, edit, and track your progress.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="h-4 w-4 text-black" />
              <span className="text-gray-700">Sample task - Design review</span>
            </div>
            <span className="text-sm text-gray-500">High Priority</span>
          </div>
          
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <input type="checkbox" className="h-4 w-4 text-black" />
              <span className="text-gray-700">Sample task - Code review</span>
            </div>
            <span className="text-sm text-gray-500">Medium Priority</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Add New Task</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Task title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Task description"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            rows={3}
          />
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}