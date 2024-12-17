import {
  userIcon,
  addressIcon,
  editIcon,
} from "@/public/assets";
import { Event } from "@/types/index";
import { formatTime } from "@/utils";
import Image from "next/image";

interface EventCardProps {
  event: Event;
  onEditClick: (event: Event) => void;
}

const EventCard = ({ event, onEditClick }: EventCardProps) => {
  const {
    "Event Name": eventName,
    Location,
    Address,
    "Organizer Name": organizerName,
    "Event Date": eventDate,
    "Event Time": eventTime,
    "Event Type": eventType,
    City,
  } = event;

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 relative">
      <div className="flex items-center justify-between text-gray-500 mb-2">
        <div>
          <span className="mr-4">{new Date(eventDate).toDateString()}</span>
          <span className="mr-4">{formatTime(eventTime)}</span>
        </div>

        <button className="items-center" onClick={() => onEditClick(event)}>
          <Image src={editIcon} alt="Edit Icon" className="w-8 h-8 mr-2" />
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-1">{eventName}</h2>
      <p className="flex items-center mb-1">
        <Image src={userIcon} alt="Organizer Icon" className="w-5 h-5 mr-2" />
        {organizerName}{" "}
      </p>
      <p className="text-gray-600 flex items-center  mb-4">
        <Image
          src={addressIcon}
          alt="Organizer Icon"
          className="w-5 h-5 mr-2"
        />
        {Address}, {Location} , {City}
      </p>
      <div className="flex gap-2">
        <span
          className={` ${
            eventType.toLowerCase() === "conference"
              ? "bg-blue-500 text-blue-900"
              : eventType.toLowerCase() === "meeting"
              ? "bg-green-500 text-green-900"
              : eventType.toLowerCase() === "dining"
              ? "bg-yellow-500 text-yellow-700"
              : eventType.toLowerCase() === "studying"
              ? "bg-purple-500 text-purple-900"
              : eventType.toLowerCase() === "working"
              ? "bg-gray-500 text-gray-800"
              : eventType.toLowerCase() === "other"
              ? "bg-pink-500 text-pink-800"
              : "bg-red-200"
          } px-3 py-1 rounded-full text-sm`}
        >
          {eventType}
        </span>
      </div>
    </div>
  );
};

export default EventCard;
