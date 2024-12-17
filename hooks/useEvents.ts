"use client"
import { useEffect, useState } from 'react';
import { Event } from '@/types/index';


export const useEvents = (submittedCity: string | null, searchQuery: string) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  
  useEffect(() => {
    if (submittedCity) {
      fetch('/api/events') 
        .then((response) => response.json())
        .then((data) => {
          setEvents(data.data); 
        })
        .catch((error) => {
          console.error('Error fetching events:', error);
        });
    }
  }, [submittedCity]); 

  useEffect(() => {
    if (submittedCity) {
      const filteredByCity = events.filter((event) =>
        event.City.toLowerCase().includes(submittedCity.toLowerCase())
      );
      setFilteredEvents(filteredByCity);
    } else {
      setFilteredEvents([]);
    }

    if (searchQuery && submittedCity) {
      const filteredBySearch = filteredEvents.filter((event) =>
        event['Event Name'].toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredEvents(filteredBySearch);
    }
  }, [submittedCity, events, searchQuery]);

  
  const handleUpdateEvent = (updatedEvent: Event) => {
    const updatedEvents = events.map((event) =>
      event.id === updatedEvent.id ? updatedEvent : event
    );
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);
  };


  const handleAddEvent = (newEvent: Event) => {
    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);
    setFilteredEvents(updatedEvents);
  };

  return {
    events,
    filteredEvents,
    handleUpdateEvent,
    handleAddEvent,
  };
};
