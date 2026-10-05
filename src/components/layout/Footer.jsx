import React from 'react';
import { Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-primary-500" />
          <span className="font-bold text-lg text-gray-900">JobNest</span>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} JobNest. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary-600 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
