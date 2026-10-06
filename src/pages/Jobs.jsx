import React, { useState, useMemo } from 'react';
import { mockJobs } from '../data/mockJobs';
import JobCard from '../components/jobs/JobCard';
import JobDetailsModal from '../components/jobs/JobDetailsModal';
import JobSearchFilter from '../components/jobs/JobSearchFilter';

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        job.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesLocation = locationFilter === '' || 
        job.location.toLowerCase().includes(locationFilter.toLowerCase());
        
      const matchesType = typeFilter === '' || 
        job.type === typeFilter;

      return matchesSearch && matchesLocation && matchesType;
    });
  }, [searchTerm, locationFilter, typeFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Jobs</h1>
        <p className="text-gray-600">Find your next career opportunity from top companies.</p>
      </div>

      <JobSearchFilter 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      {filteredJobs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map(job => (
            <JobCard 
              key={job.id} 
              job={job} 
              onClick={(jobData) => setSelectedJob(jobData)} 
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No jobs found</h3>
          <p className="text-gray-500">
            We couldn't find any jobs matching your current filters. Try adjusting your search.
          </p>
          <button 
            onClick={() => {
              setSearchTerm('');
              setLocationFilter('');
              setTypeFilter('');
            }}
            className="mt-4 text-indigo-600 font-medium hover:text-indigo-500"
          >
            Clear all filters
          </button>
        </div>
      )}

      {selectedJob && (
        <JobDetailsModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </div>
  );
};

export default Jobs;
