import { Event } from "@/types/index";
import Form from "./components/Form";

interface EventFormProps {
  newEvent: Event;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onAddEvent: () => void;
}

export const AddEvent = () => {
  return (
    <div className="mt-8 border p-4 rounded-lg shadow-md bg-white hover:shadow-lg ">
      <Form />
    </div>
  );
};
