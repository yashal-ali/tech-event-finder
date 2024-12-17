
"use client";

import { Fragment, useState } from 'react';
import { Event } from '@/types/index';
import EventGrid from '@/components/EventGrid';
import SearchBar from '@/components/SearchBar';
import { EVENT } from '@/constants/index';
import { AddEvent } from '@/components/AddEvent';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useEvents } from '@/hooks/useEvents';

const HeroPage = () => {
  const [city, setCity] = useState('');
  const [submittedCity, setSubmittedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [newEvent, setNewEvent] = useState<Event>(EVENT);

  const { filteredEvents, handleUpdateEvent, handleAddEvent } = useEvents(submittedCity, searchQuery);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleCitySubmit = () => {
    if (city.trim() !== '') {
      setSubmittedCity(city);
    }
  };


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  return (
    <Fragment>
         <div className="my-4 flex gap-4">
        <Input
          type="text"
          placeholder="Enter city name"
          className="border p-2 rounded w-full min-w-[500px]" 
          value={city}
          onChange={handleCityChange}
        />
        
        <Button
          className="p-2 rounded max-w-[200px] h-[48px]" 
          onClick={handleCitySubmit}
          title="Show Events"
        />
      </div>

      {submittedCity && (
        <>
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
          <EventGrid events={filteredEvents} onUpdateEvent={handleUpdateEvent} />
          <AddEvent />
        </>
      )}
    </Fragment>
     
    
  );
};

export default HeroPage;
