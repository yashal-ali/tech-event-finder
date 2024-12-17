import { date, object, string } from "yup";

export const addEventSchema = object({
  "Event Name": string().required("Event Name is Required"),
  "Organizer Name": string().required("Organizer Name is Required"),
  Location: string().required("Location is Required"),
  Address: string().required(" Address is Required"),
  "Event Time":string().required("Event Time is requried"),
  "Event Type": string().required("Event Type is required"),
   City: string().required("City is Requried"),

});


 

 