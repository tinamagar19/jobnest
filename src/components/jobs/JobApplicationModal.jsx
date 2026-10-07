import React, { useState, useEffect } from 'react';
import { useApplications } from '../../context/ApplicationContext';

const JobApplicationModal = ({ job, onClose, onSuccess }) => {
  const { addApplication } = useApplications();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resumeLink: '',
    coverNote: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      addApplication(job, formData);
      setIsSubmitting(false);
      onSuccess();
    }, 800);
  };

  if (!job) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div 
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity backdrop-blur-sm" 
        onClick={onClose}
      ></div>

      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
          <div className="bg-white px-6 py-6 sm:px-8 border-b border-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900" id="modal-title">
                  Apply for {job.title}
                </h2>
                <p className="text-sm text-gray-500 mt-1">at {job.company}</p>
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
          </div>

          <form onSubmit={handleSubmit} className="bg-white px-6 py-6 sm:px-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  name="fullName" 
                  id="fullName" 
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 border"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 border"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="resumeLink" className="block text-sm font-medium text-gray-700">Resume Link (URL)</label>
                <input 
                  type="url" 
                  name="resumeLink" 
                  id="resumeLink" 
                  required
                  value={formData.resumeLink}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 border"
                  placeholder="https://portfolio.com/resume.pdf"
                />
              </div>

              <div>
                <label htmlFor="coverNote" className="block text-sm font-medium text-gray-700">Cover Note</label>
                <textarea 
                  name="coverNote" 
                  id="coverNote" 
                  rows={4}
                  required
                  value={formData.coverNote}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3 border"
                  placeholder="Why are you a good fit for this role?"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto transition-colors"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full justify-center items-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:w-auto transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationModal;
