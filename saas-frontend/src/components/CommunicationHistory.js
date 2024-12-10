import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const CommunicationHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get('/emails', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setHistory(response.data);
      } catch (error) {
        console.error('Failed to fetch communication history:', error);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-container">
      <h2>Communication History</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Subject</th>
            <th>Body</th>
            <th>Sent At</th>
          </tr>
        </thead>
        <tbody>
          {history.map((email) => (
            <tr key={email.id}>
              <td>{email.recipient}</td>
              <td>{email.subject}</td>
              <td>{email.body}</td>
              <td>{new Date(email.sent_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommunicationHistory;
