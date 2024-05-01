import React from "react";
import { Formik } from "formik";
import { Form } from "react-bootstrap";

import { TextField, SelectInput } from "./FormTypes";
import * as Yup from "yup";
export default function AddJob(props) {
  let initialValues = {
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    category: "",
    city: "",
    salary:"",
    companyname:""
  };

  if (props.jobInfo) {
    initialValues = {
      title: props.jobInfo.title,
      description: props.jobInfo.description,
      startDate: props.jobInfo.startDate,
      endDate: props.jobInfo.endDate,
      category: props.jobInfo.category,
      city: props.jobInfo.city,
      salary: props.jobInfo.salary,
      companyname:props.jobInfo.companyname
    };
  }

  // VALIDATION
  const validate = Yup.object({
    title: Yup.string().max(30).required("Required"),
    description: Yup.string()
      .max(100, "Must be 100 characters or less")
      .required("Required"),
    startDate: Yup.date().required("Required"),
    endDate: Yup.date().required("Required"),
    category: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    salary: Yup.string().required("Required"),
    salary: Yup.string().required("Required"),
    companyname: Yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validate}
        onSubmit={(values, { setSubmitting }) => {
          const editedValues = { ...props.jobInfo, ...values };
          props.onAdd(editedValues);
        }}
      >
        {(formik) => (
          // console.log(formik);
          <Form onSubmit={formik.handleSubmit} id="manageJob-form">
            <div>
              <TextField label="Title" name="title" type="text" />
              <TextField
                label="Description "
                name="description"
                type="text-area"
              />
              <TextField
                label="City "
                name="city"
                type="text-area"
              />
              <TextField
                label="Salary "
                name="salary"
                type="text-area"
              />
              <TextField
                label="Category "
                name="category"
                type="text-area"
              />
              <TextField
                label="Companyname "
                name="companyname"
                type="text-area"
              />
              <TextField label="Start date " name="startDate" type="date" />
              <TextField label="  End date " name="endDate" type="date" />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
