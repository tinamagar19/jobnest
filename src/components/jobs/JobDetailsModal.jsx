import React, { useEffect } from 'react';

const JobDetailsModal = ({ job, onClose }) => {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
          
          {/* Header */}
          <div className="bg-white px-6 py-6 sm:px-8 border-b border-gray-100">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <img 
                  src={job.logo} 
                  alt={`${job.company} logo`} 
                  className="w-16 h-16 rounded-xl object-cover bg-gray-50 border border-gray-100"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900" id="modal-title">
                    {job.title}
                  </h2>
                  <p className="text-lg text-indigo-600 font-medium">{job.company}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="rounded-full p-1 hover:bg-gray-100 transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                <svg className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.location}
              </div>
              <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg">
                <svg className="flex-shrink-0 mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {job.salary}
              </div>
              <div className="flex items-center text-sm text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg font-medium">
                {job.type}
              </div>
            </div>
          </div>

         
          <div className="bg-white px-6 py-6 sm:px-8">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About the Role</h3>
              <p className="text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
              <ul className="space-y-2">
                {job.requirements.map((req, index) => (
                  <li key={index} className="flex text-gray-600">
                    <svg className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {job.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        
          <div className="bg-gray-50 px-6 py-4 sm:px-8 sm:flex sm:flex-row-reverse border-t border-gray-100">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto transition-colors"
              onClick={() => {
                alert('Application process would start here!');
                onClose();
              }}
            >
              Apply Now
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto transition-colors"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsModal;
