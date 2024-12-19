"use client";
import { useState, useEffect } from "react";
import { Event } from "@/types/index";
import Input from "./Input";
import Button from "./Button";

interface EditEventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedEvent: Event, eventId: string | number) => void;
}
const EditEventModal = ({
  event,
  isOpen,
  onClose,
  onSave,
}: EditEventModalProps) => {
  const [editedEvent, setEditedEvent] = useState<Event>(event);

  useEffect(() => {
    setEditedEvent(event);
  }, [event]);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedEvent({ ...editedEvent, [name]: value });
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedEvent.id) {
      onSave(editedEvent, editedEvent.id);
      onClose();
    }
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="shadow-lg max-w-md w-full mt-8 border p-4 rounded-lg  bg-white hover:shadow-lg transition-shadow">
        <h1 className="text-[45px] font-bold mb-4 text-headingColor font-sans">
          Edit Event
        </h1>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <Input
            type="text"
            name="Event Name"
            value={editedEvent["Event Name"]}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Event Name"
          />
          <Input
            type="text"
            name="Location"
            value={editedEvent.Location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Location"
          />
          <Input
            type="text"
            name="Address"
            value={editedEvent.Address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Address"
          />
          <Input
            type="text"
            name="Organizer Name"
            value={editedEvent["Organizer Name"]}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Organizer Name"
          />
          <Input
            type="text"
            name="Event Date"
            value={editedEvent["Event Date"]}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <Input
            type="text"
            name="Event Time"
            value={editedEvent["Event Time"]}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
          <select
            name="Event Type"
            value={editedEvent["Event Type"]}
            onChange={handleInputChange}
            className="focus:outline-none border p-2 rounded w-full mb-2  h-[50px]"
          >
            <option
              className="focus:outline-none border p-2 "
              value="Conference"
            >
              Conference
            </option>
            <option className="focus:outline-none border p-2 " value="Meeting">
              Meeting
            </option>
            <option className="focus:outline-none border p-2 " value="Dining">
              Dining
            </option>
            <option className="focus:outline-none border p-2 " value="Studying">
              Studying
            </option>
            <option className="focus:outline-none border p-2 " value="Working">
              Working
            </option>
            <option className="focus:outline-none border p-2 " value="Other">
              Other
            </option>
          </select>
          <Input
            type="text"
            name="City"
            value={editedEvent.City}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="City"
          />
          <div className="flex justify-end space-x-2">
            <Button
              title="Cancel"
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={onClose}
            />
            <Button
              type="submit"
              title="Update Event"
              className="bg-green-500 text-white px-4 py-2 rounded"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditEventModal;
