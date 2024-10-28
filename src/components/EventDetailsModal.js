
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEventContext } from '../context/EventContext';
import styled from 'styled-components';

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: #fff;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  padding: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  position: relative;

  img {
    width: 100%;
    height: auto; // Maintain aspect ratio
    border-radius: 8px;
    max-height: 300px; // Prevent excessive heights
    object-fit: cover; // Cover the area while maintaining aspect ratio
  }

  h2 {
    color: #333;
    margin-top: 15px;
    font-size: 1.5em;
  }

  p {
    color: #555;
    margin: 5px 0;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.3em; // Smaller font size on mobile
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5em;
  color: #333;

  &:hover {
    color: #e74c3c;
  }
`;

const EventDetailsModal = () => {
  const { selectedEvent, setSelectedEvent } = useEventContext();

  if (!selectedEvent) return null;

  return (
    <AnimatePresence>
      <Backdrop
        onClick={() => setSelectedEvent(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ModalContent
          onClick={(e) => e.stopPropagation()}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CloseButton onClick={() => setSelectedEvent(null)}>&times;</CloseButton>
          <img src={selectedEvent.image} alt={selectedEvent.name} />
          <h2>{selectedEvent.name}</h2>
          <p>{selectedEvent.date}</p>
          <p>{selectedEvent.location}</p>
          <p>{selectedEvent.description}</p>
        </ModalContent>
      </Backdrop>
    </AnimatePresence>
  );
};

export default EventDetailsModal;
