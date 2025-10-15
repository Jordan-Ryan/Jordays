'use client';

import { useApp } from '@/context/AppContext';
import { useEffect } from 'react';

export default function CalendarPage() {
  const { setCurrentPage } = useApp();

  useEffect(() => {
    setCurrentPage('Calendar');
  }, [setCurrentPage]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-black mb-4">Calendar</h2>
        <p className="text-gray-600 mb-6">
          View your schedule and manage your time effectively.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <div className="text-6xl mb-4">📅</div>
          <h3 className="text-lg font-semibold text-black mb-2">Calendar View</h3>
          <p className="text-gray-600 mb-4">
            Your calendar will be displayed here. This is a placeholder for the calendar component.
          </p>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Add Event
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-black mb-4">Upcoming Events</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <span className="font-medium text-black">Team Meeting</span>
              <p className="text-sm text-gray-600">2:00 PM - 3:00 PM</p>
            </div>
            <span className="text-sm text-gray-500">Today</span>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <span className="font-medium text-black">Project Review</span>
              <p className="text-sm text-gray-600">10:00 AM - 11:00 AM</p>
            </div>
            <span className="text-sm text-gray-500">Tomorrow</span>
          </div>
        </div>
      </div>
    </div>
  );
}