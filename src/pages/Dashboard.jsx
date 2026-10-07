import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useApplications } from '../context/ApplicationContext';
import { User, Briefcase, Bell, Bookmark, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { role } = useAuth();
  const { applications } = useApplications();

  // Mock stats for 'seeker'
  const stats = {
    totalApplied: applications.length,
    interviews: applications.filter(app => app.status === 'Interview').length, // None will match 'Pending' initially, but just to show structure
    savedJobs: 3, // Mock data
  };

  if (role === 'employer') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">Employer Dashboard</h1>
        
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
              <p className="text-sm text-gray-500 font-medium">Active Listings</p>
              <h3 className="text-2xl font-bold text-gray-900">3</h3>
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
  }

  // Seeker Dashboard
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 capitalize">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Total Applied</p>
            <h3 className="text-2xl font-bold text-gray-900">{stats.totalApplied}</h3>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl">
            <CheckCircle className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Interviews</p>
            <h3 className="text-2xl font-bold text-gray-900">{stats.interviews}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
          <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
            <Bookmark className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Saved Jobs</p>
            <h3 className="text-2xl font-bold text-gray-900">{stats.savedJobs}</h3>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
        </div>
        
        {applications.length > 0 ? (
          <div className="divide-y divide-gray-100">
            {applications.map((app) => (
              <div key={app.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img src={app.job.logo} alt={app.job.company} className="w-12 h-12 rounded-lg object-cover border border-gray-100" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{app.job.title}</h3>
                    <p className="text-sm text-gray-500">{app.job.company} &bull; {app.job.location}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
                  <div className="text-sm text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {new Date(app.appliedDate).toLocaleDateString()}
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                    ${app.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                      app.status === 'Interview' ? 'bg-green-100 text-green-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {app.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
              <Briefcase className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No applications yet</h3>
            <p className="text-gray-500 mb-6">
              You haven't applied to any jobs yet. Start exploring to find your next role.
            </p>
            <Link 
              to="/jobs" 
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
            >
              Explore Jobs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
