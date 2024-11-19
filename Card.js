import React from 'react';

const Card = ({ ticket }) => {
  const { title, description, priority, status, user } = ticket;

  const getPriorityLabel = (level) => {
    switch (level) {
      case 4: return 'Urgent';
      case 3: return 'High';
      case 2: return 'Medium';
      case 1: return 'Low';
      default: return 'No Priority';
    }
  };

  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{description}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>User:</strong> {user}</p>
      <p><strong>Priority:</strong> {getPriorityLabel(priority)}</p>
    </div>
  );
};

export default Card;
