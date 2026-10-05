import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Briefcase, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const { role, login, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Briefcase className="h-8 w-8 text-primary-600" />
              <span className="font-bold text-xl tracking-tight text-gray-900">JobNest</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/jobs" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Find Jobs
            </Link>

            {role === 'guest' && (
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => login('seeker')}
                  className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Seeker Demo
                </button>
                <button 
                  onClick={() => login('employer')}
                  className="bg-primary-50 text-primary-700 hover:bg-primary-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Employer Demo
                </button>
              </div>
            )}

            {role === 'seeker' && (
              <div className="flex items-center gap-4">
                <Link to="/dashboard" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors">
                  <User className="h-4 w-4" />
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="text-red-500 hover:text-red-600 px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            )}

            {role === 'employer' && (
              <div className="flex items-center gap-4">
                <Link to="/post-job" className="bg-primary-600 text-white hover:bg-primary-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors">
                  Post a Job
                </Link>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors">
                  <User className="h-4 w-4" />
                  Dashboard
                </Link>
                <button 
                  onClick={logout}
                  className="text-red-500 hover:text-red-600 px-3 py-2 text-sm font-medium flex items-center gap-1 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
