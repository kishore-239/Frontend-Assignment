import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';

const App = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((res) => res.json())
      .then((data) => setTickets(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <KanbanBoard tickets={tickets} />
    </div>
  );
};

export default App;
