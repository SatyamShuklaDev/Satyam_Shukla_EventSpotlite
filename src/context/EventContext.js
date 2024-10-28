
import React, { createContext, useState, useContext, useEffect } from 'react';
import events from '../data/events';

const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm) {
      const filtered = events.filter(event =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  }, [searchTerm]);

  const resetFilters = () => {
    setSearchTerm('');
    setFilteredEvents(events);
  };

  return (
    <EventContext.Provider value={{ filteredEvents, setFilteredEvents, selectedEvent, setSelectedEvent, searchTerm, setSearchTerm, resetFilters }}>
      {children}
    </EventContext.Provider>
  );
};
