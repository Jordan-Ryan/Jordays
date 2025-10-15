'use client';

import { useApp } from '@/context/AppContext';
import { useEffect } from 'react';

export default function NotesPage() {
  const { setCurrentPage } = useApp();

  useEffect(() => {
    setCurrentPage('Notes');
  }, [setCurrentPage]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-black mb-4">Notes</h2>
        <p className="text-gray-600 mb-6">
          Capture your thoughts, ideas, and important information.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-black mb-2">Meeting Notes</h3>
            <p className="text-sm text-gray-600 mb-3">
              Key points from today&apos;s team meeting about the new project...
            </p>
            <span className="text-xs text-gray-500">2 hours ago</span>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-black mb-2">Ideas</h3>
            <p className="text-sm text-gray-600 mb-3">
              Random thoughts and ideas for improving the user experience...
            </p>
            <span className="text-xs text-gray-500">1 day ago</span>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-black mb-2">Research</h3>
            <p className="text-sm text-gray-600 mb-3">
              Research findings on productivity tools and methodologies...
            </p>
            <span className="text-xs text-gray-500">3 days ago</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Create New Note</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Note title"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Write your note here..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            rows={6}
          />
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
}