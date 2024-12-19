"use client";

import { Fragment, useState } from "react";
import { Event } from "@/types/index";
import EventGrid from "@/components/EventGrid";
import SearchBar from "@/components/SearchBar";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useEvents } from "@/hooks/useEvents";
import useAddEvent from "@/hooks/useAddEvent";
import Form from "./AddEvent/components/Form";

const HeroPage = () => {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { filteredEvents, handleUpdateEvent, handleAddEvent } = useEvents(
    submittedCity,
    searchQuery
  );
  const [events, setEvents] = useState<Event[]>([]);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleCitySubmit = () => {
    if (city.trim() !== "") {
      setSubmittedCity(city);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const { handleSaveNewEvent, loading, error } = useAddEvent(
    (newEvent: Event) => {
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
  );

  const submitHandler = (newEvent: Event) => {
    handleSaveNewEvent(newEvent);
    handleAddEvent(newEvent);
  };
  return (
    <Fragment>
      <div className="my-4 flex sm:flex-row  flex-col gap-4">
        <Input
          type="text"
          placeholder="Enter city name"
          className="border p-2 rounded  w-full  sm:min-w-[500px] min-w-[350px] mb-0"
          value={city}
          onChange={handleCityChange}
        />
        <Button
          className="p-2 rounded sm:max-w-[150px] h-[48px] max-w-full sm:mt-0 -mt-6"
          onClick={handleCitySubmit}
          title="Show Events"
        />
      </div>
      {submittedCity && (
        <>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
          <EventGrid
            events={filteredEvents}
            onUpdateEvent={handleUpdateEvent}
          />
          <div className="mt-8 border p-4 rounded-lg shadow-md bg-white hover:shadow-lg">
            <Form submitHandler={submitHandler} />
            {loading && (
              <p className="text-headingColor text-center">Saving event...</p>
            )}
          </div>
        </>
      )}
    </Fragment>
  );
};
export default HeroPage;
