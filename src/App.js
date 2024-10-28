import React, { useState } from 'react';
import EventDetailsModal from './components/EventDetailsModal';
import EventList from './components/EventList';
import SearchBar from './components/SearchBar';
import { EventProvider } from './context/EventContext';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <EventProvider>
      <div className="container">
        <h1>EventSpot Lite</h1>
        <SearchBar onSearch={handleSearch} />
        <EventList searchTerm={searchTerm} />
        <EventDetailsModal />
      </div>
    </EventProvider>
  );
};

export default App;
