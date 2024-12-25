"use client";
import { useState } from 'react';
import { Event } from '@/types/index';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const useAddEvent = (onAddEvent: (addNewEvent: Event) => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSaveNewEvent = async (addNewEvent: Event) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('/api/addEvent', {
        addNewEvent,
       
      });
      if (response.status === 200) {
        toast.success('Event updated successfully!');
        console.log('addNew', addNewEvent)
        onAddEvent(addNewEvent);
      } else {
        toast.error('Failed to update event.');
        setError('Failed to update event.');
      }
    } catch (err) {
      console.error('Error updating event:', err);
      toast.error('An error occurred while updating the event.');
      setError('An error occurred while updating the event.');
    } finally {
      setLoading(false);
    }
  };
  

  return {
    handleSaveNewEvent,
    loading,
    error,
  };
};

export default useAddEvent;
