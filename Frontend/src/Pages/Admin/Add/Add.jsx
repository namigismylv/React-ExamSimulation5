import React, { useContext } from "react";
import axios from "axios";
import { Formik } from "formik";
import MainContext from "../../../Context/Context";
const Add = () => {
  const { setData } = useContext(MainContext);
  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={{ image: "", title: "", desc: "" }}
        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:4000/moda",{...values}).then((res) => {
            setData(res.data)
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="image"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
              placeholder="Image"
            />
            {errors.image && touched.image && errors.image}
            <input
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              placeholder="Title"
            />
            {errors.title && touched.title && errors.title}
            <input
              type="text"
              name="desc"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.desc}
              placeholder="Description"
            />
            {errors.desc && touched.desc && errors.desc}
            <button type="submit" onClick={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Add;
