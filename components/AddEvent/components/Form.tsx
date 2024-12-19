"use client";
import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useFormik } from "formik";
import { EVENT } from "@/constants";
import { addEventSchema } from "@/utils/validationSchema";
import { Event } from "@/types";

type IProps = {
  submitHandler: (arg: Event) => void;
};

const Form = ({ submitHandler }: IProps) => {
  const { handleSubmit, handleChange, values, touched, errors, resetForm } =
    useFormik({
      initialValues: EVENT,
      validationSchema: addEventSchema,
      onSubmit: (values: Event) => {
        if (!values["Event Type"]) {
          const addValues = { ...values, "Event Type": "Conference" };
          submitHandler(addValues);
        } else {
          submitHandler(values);
        }
        resetForm();
      },
    });

  return (
    <form className="w-full max-h-full" noValidate onSubmit={handleSubmit}>
      <div className="mx-4">
        <h1 className="text-[35px] text-center font-bold mb-4 text-headingColor font-sans">
          Add New Event
        </h1>
        <h2 className="w-full text-center my-4 text-textColor">
          Are you hosting a tech event? Our easy-to-use platform lets you create
          new events
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label className="font-bold text-headingColor">Event Name</label>
            <Input
              placeholder="(e.g Tech Career Fair)"
              name="Event Name"
              error={touched["Event Name"] && errors["Event Name"]}
              className="mb-[7px]"
              onChange={handleChange}
              value={values["Event Name"]}
            />
          </div>

          <div>
            <label className="font-bold text-headingColor">Location</label>
            <Input
              placeholder="(e.g Convention Center)"
              name="Location"
              error={touched.Location && errors.Location}
              className="mb-[7px]"
              onChange={handleChange}
              value={values.Location}
            />
          </div>

          <div>
            <label className="font-bold text-headingColor">
              Organizer Name
            </label>
            <Input
              placeholder="(e.g Amy Clark)"
              name="Organizer Name"
              error={touched["Organizer Name"] && errors["Organizer Name"]}
              className="mb-[9px]"
              onChange={handleChange}
              value={values["Organizer Name"]}
            />
          </div>

          <div>
            <label className="font-bold text-headingColor">Address</label>
            <Input
              placeholder="(e.g 456 Career Rd)"
              name="Address"
              error={touched.Address && errors.Address}
              className="mb-[7px]"
              onChange={handleChange}
              value={values.Address}
            />
          </div>
          <div>
            <label className="font-bold text-headingColor">Event Time</label>
            <Input
              placeholder="(e.g 02:00 AM)"
              name="Event Time"
              error={touched["Event Time"] && errors["Event Time"]}
              className="mb-[7px]"
              onChange={handleChange}
              value={values["Event Time"]}
            />
          </div>
          <div>
            <label className="font-bold text-headingColor">
              Select the Event Type
            </label>
            <select
              name="Event Type"
              value={values["Event Type"]}
              onChange={handleChange}
              className="focus:outline-none border p-2 rounded w-full mb-[17px] h-[50px]"
            >
              <option value="Conference">Conference</option>
              <option value="Meeting">Meeting</option>
              <option value="Dining">Dining</option>
              <option value="Studying">Studying</option>
              <option value="Working">Working</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="font-bold text-headingColor">Event Date</label>
            <Input
              placeholder="(e.g Sun Dec 29 2024)"
              name="Event Date"
              error={touched["Event Date"] && errors["Event Date"]}
              className="mb-[7px]"
              onChange={handleChange}
              value={values["Event Date"]}
            />
          </div>
          <div>
            <label className="font-bold text-headingColor">City Name</label>
            <Input
              placeholder="(e.g Karachi)"
              name="City"
              error={touched.City && errors.City}
              className="mb-[7px]"
              onChange={handleChange}
              value={values.City}
            />
          </div>
        </div>
        <Button title="Submit Event" type="submit" className="rounded mt-4" />
      </div>
    </form>
  );
};

export default Form;
