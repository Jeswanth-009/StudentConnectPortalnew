import { apiService } from './api';

/**
 * A service to ping the backend API every 14 minutes to prevent it from 
 * spinning down due to Render's free tier 15-minute inactivity timeout.
 */
export const startKeepAliveService = () => {
  console.log('Starting keep-alive service for backend');
  
  // Initial ping when service starts
  sendPing();
  
  // Set up interval to ping every 14 minutes (840000 milliseconds)
  // This is just under the 15 minute spin down threshold
  const intervalId = setInterval(sendPing, 840000);
  
  // Return function to stop the service if needed
  return () => {
    console.log('Stopping keep-alive service');
    clearInterval(intervalId);
  };
};

/**
 * Send a ping to the backend health endpoint
 */
const sendPing = async () => {
  try {
    const response = await apiService.healthCheck();
    const timestamp = new Date().toLocaleTimeString();
    // Use safe property access with type assertion
    const status = (response as any)?.status || 'connected';
    console.log(`[${timestamp}] Backend ping successful:`, status);
  } catch (error) {
    console.error('Backend ping failed:', error);
  }
};
