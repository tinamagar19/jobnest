import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ApplicationProvider } from './context/ApplicationContext';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Dashboard from './pages/Dashboard';
import PostJob from './pages/PostJob';


const ProtectedRoute = ({ children, allowedRoles }) => {
  const { role } = useAuth();
  
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        
        <Route index element={<Home />} />
        <Route path="jobs" element={<Jobs />} />

        
        <Route 
          path="dashboard" 
          element={
            <ProtectedRoute allowedRoles={['seeker', 'employer']}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        
        <Route 
          path="post-job" 
          element={
            <ProtectedRoute allowedRoles={['employer']}>
              <PostJob />
            </ProtectedRoute>
          } 
        />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <ApplicationProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ApplicationProvider>
    </AuthProvider>
  );
}

export default App;
