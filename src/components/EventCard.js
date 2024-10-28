
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  width: 250px; // Fixed width for consistency
  height: 350px; // Fixed height to maintain a uniform appearance
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 150px; // Fixed height for images
    object-fit: cover; // Cover the area without distortion
  }
`;

const EventCard = ({ event }) => {
  return (
    <CardContainer>
      <img src={event.image} alt={event.name} />
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.description}</p>
    </CardContainer>
  );
};

export default EventCard;
