import React, { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export const useApplications = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplications must be used within an ApplicationProvider');
  }
  return context;
};

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  const addApplication = (job, applicantDetails) => {
    const newApplication = {
      id: Date.now().toString(),
      job,
      applicantDetails,
      status: 'Pending',
      appliedDate: new Date().toISOString(),
    };
    setApplications(prev => [...prev, newApplication]);
  };

  return (
    <ApplicationContext.Provider value={{ applications, addApplication }}>
      {children}
    </ApplicationContext.Provider>
  );
};
