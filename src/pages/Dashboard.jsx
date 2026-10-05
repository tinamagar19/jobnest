import React from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Briefcase, Bell } from 'lucide-react';

const Dashboard = () => {
  const { role } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">{role} Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-primary-50 text-primary-600 rounded-xl">
            <User className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Profile Views</p>
            <h3 className="text-2xl font-bold text-gray-900">124</h3>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">
              {role === 'employer' ? 'Active Listings' : 'Applications Sent'}
            </p>
            <h3 className="text-2xl font-bold text-gray-900">
              {role === 'employer' ? '3' : '12'}
            </h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <Bell className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">New Notifications</p>
            <h3 className="text-2xl font-bold text-gray-900">5</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
        <div className="text-gray-500 text-center py-8">
          No recent activity to show.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
