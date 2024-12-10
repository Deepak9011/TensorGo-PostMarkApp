import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome to the Communication Platform</h2>
      <button onClick={() => navigate('/history')} className="btn btn-primary">View Communication History</button>
      <button onClick={() => navigate('/compose')} className="btn btn-secondary">Compose Email</button>
      <button onClick={logout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default Dashboard;
