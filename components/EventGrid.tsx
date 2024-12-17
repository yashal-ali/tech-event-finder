"use client"
import { useState } from 'react';
import { Event } from '@/types/index';
import EditEventModal from '@/components/EditEventModal';
import EventCard from './EventCard';
import useUpdateEvent from '@/hooks/useUpdate';

interface EventGridProps {
  events: Event[];
  onUpdateEvent: (updatedEvent: Event) => void;
}

const EventGrid = ({ events, onUpdateEvent }: EventGridProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const { handleSaveEvent, loading, error } = useUpdateEvent(onUpdateEvent);

  // Handle edit button click
  const handleEditClick = (event: Event) => {
    setIsEditing(true);
    setCurrentEvent(event);
  };


  // Handle close modal
  const handleCloseModal = () => {
    setIsEditing(false);
    setCurrentEvent(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <EventCard key={index} event={event} onEditClick={handleEditClick} />
        ))}
      </div>

      {/* Edit Event Modal */}
      {isEditing && currentEvent && (
        <EditEventModal
          event={currentEvent}
          isOpen={isEditing}
          onClose={handleCloseModal}
          onSave={handleSaveEvent}
        />
      )}
    </div>
  );
};

export default EventGrid;





