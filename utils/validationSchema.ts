import {  object, string } from "yup";
import { isFutureDate } from ".";

export const addEventSchema = object({
  "Event Name": string().required("Event Name is Required"),
  "Organizer Name": string().required("Organizer Name is Required"),
  Location: string().required("Location is Required"),
  Address: string().required("Address is Required"),
  "Event Date": string()
    .matches(
      /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun|mon|tue|wed|thu|fri|sat|sun)\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\s([0-2][0-9]|3[0-1]|0[1-9])\s\d{4}$/,
      "Date must be in 'Day Mon DD YYYY' format, e.g., 'Fri Dec 20 2024'"
    )
    .required("Event Date is Required")
    .test(
      "is-future-date",
      "Event Date must be today or in the future",
      isFutureDate
    ),
  "Event Time": string()
    .matches(
      /^(0[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/,
      "Time must be in hh:mm AM/PM format"
    )
    .required("Event Time is Required"),
  "Event Type": string(),
  City: string().required("City is Required"),
});
