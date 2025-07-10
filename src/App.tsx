import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { PostProvider } from './contexts/PostContext';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import UserProfilePage from './pages/UserProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import { startKeepAliveService } from './services/keepalive';

function App() {
  // Initialize the keepalive service when the app loads
  useEffect(() => {
    // Start the keepalive service to ping the backend every 14 minutes
    const stopKeepAlive = startKeepAliveService();
    
    // Clean up the interval when the app unmounts
    return () => {
      stopKeepAlive();
    };
  }, []);

  return (
    <AuthProvider>
      <PostProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<LoginPage />} />
              <Route path="/forgot-password" element={<LoginPage />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <MainPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/profile/:userId" 
                element={
                  <ProtectedRoute>
                    <UserProfilePage />
                  </ProtectedRoute>
                } 
              />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </Router>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;