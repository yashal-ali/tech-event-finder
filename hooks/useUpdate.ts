"use client";
import { useState } from "react";
import { Event } from "@/types/index";
import axios from "axios";
import { toast } from "react-hot-toast";

const useUpdateEvent = (onUpdateEvent: (updatedEvent: Event) => void) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSaveEvent = async (
    updatedEvent: Event,
    eventId: string | number
  ) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("/api/events", {
        updatedEvent,
        eventId,
      });
      if (response.status === 200) {
        toast.success("Event updated successfully!");
        onUpdateEvent(updatedEvent);
      } else {
        toast.error("Failed to update event.");
        setError("Failed to update event.");
      }
    } catch (err) {
      console.error("Error updating event:", err);
      toast.error("An error occurred while updating the event.");
      setError("An error occurred while updating the event.");
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
