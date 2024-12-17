"use client"
import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { useFormik } from "formik";
import { EVENT } from "@/constants";
import { addEventSchema } from "../../../utils/validationSchema";
import { Event } from "@/types";

type IProps = {
  submitHandler: (arg: Event) => void;
  isLoading: boolean;
};

const Form = () => {
  const { handleSubmit, handleChange, values, touched, errors } = useFormik({
    initialValues:EVENT,
    validationSchema: addEventSchema,
    onSubmit: (values: Event) => {
      // submitHandler(values);
    console.log('values', values)
    },
  });
  return (
    <form
      className="w-full max-h-full "
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="mx-4">
      <h1 className="text-[45px] font-bold mb-4 text-headingColor font-sans">Add New Event</h1>
        <h2 className="w-full text-center my-4 text-textColor">
        Are you hosting a tech event? Our easy-to-use platform lets you create new events
        </h2>
        <Input
          placeholder="Event Name"
          name="Event Name"
          error={touched["Event Name"] && errors["Event Name"]}
          className="mb-[9px]"
          onChange={handleChange}
          value={values["Event Name"]}
        />
        <Input
          placeholder="Location"
          name="Location"
          error={touched.Location && errors.Location}
          className="mb-[9px]"
          onChange={handleChange}
          value={values.Location}
        />
        <Input
          placeholder="Organizer Name"
          name="Organizer Name"
          error={touched["Organizer Name"] && errors["Organizer Name"]}
          className="mb-[19px]"
          onChange={handleChange}
          value={values["Organizer Name"]}
        />
        <Input
          placeholder="Address"
          name="Address"
          error={touched.Address && errors.Address}
          className="mb-[19px]"
          onChange={handleChange}
          value={values.Address}
        />
        <Input
          placeholder="Event Time"
          name="Event Time"
          error={touched["Event Time"] && errors["Event Time"]}
          className="mb-[9px]"
          onChange={handleChange}
          value={values["Event Time"]}
        />
        <Input
          placeholder="Event Type"
          name="Event Type"
          error={touched["Event Type"] && errors["Event Type"]}
          className="mb-[9px]"
          onChange={handleChange}
          value={values["Event Type"]}
        />
          <Input
          placeholder="City"
          name="City"
          error={touched.City && errors.City}
          className="mb-[9px]"
          onChange={handleChange}
          value={values.City}
        />

        <Button title={"Submit Event"} type="submit"  />
       
      </div>
    </form>
  );
};

export default Form;