"use client"
import { useState } from 'react';
import { Event } from '@/types/index';

const useUpdateEvent = (onUpdateEvent: (updatedEvent: Event) => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSaveEvent = async (updatedEvent: Event, eventId: string | number) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          updatedEvent,
          eventId,
        }),
      });

      if (response.ok) {
        console.log('Event updated successfully');
        onUpdateEvent(updatedEvent); 
      } else {
        console.error('Failed to update event');
        setError('Failed to update event.');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      setError('An error occurred while updating the event.');
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSaveEvent,
    loading,
    error,
  };
};

export default useUpdateEvent;
