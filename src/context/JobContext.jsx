import React, { createContext, useContext, useState } from 'react';
import { mockJobs } from '../data/mockJobs';

const JobContext = createContext();

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(mockJobs);

  const addJob = (newJob) => {
    const jobWithId = {
      ...newJob,
      id: Date.now(),
      postedAt: 'Just now',
      logo: `https://ui-avatars.com/api/?name=${encodeURIComponent(newJob.company)}&background=random&color=fff`,
    };
    setJobs(prev => [jobWithId, ...prev]);
  };

  return (
    <JobContext.Provider value={{ jobs, addJob }}>
      {children}
    </JobContext.Provider>
  );
};
