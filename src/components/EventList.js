
import React from 'react';
import styled from 'styled-components';
import EventCard from './EventCard';
import { useEventContext } from '../context/EventContext';

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
`;

const EventList = ({ searchTerm }) => {
  const { filteredEvents } = useEventContext();

  const filtered = filteredEvents.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CardListContainer>
      {filtered.length > 0 ? (
        filtered.map(event => (
          <EventCard key={event.id} event={event} />
        ))
      ) : (
        <p>No events found.</p>
      )}
    </CardListContainer>
  );
};

export default EventList;
