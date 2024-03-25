import css from "./ContactForm.module.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";

const phoneRegExp = /^(\d{3}-\d{2}-\d{2})$/;

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(30, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Please enter a 'xxx-xx-xx' number")
    .required("Required"),
});

export default function ContactForm({ onSubmit }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onSubmit({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm}>
        <div className={css.formField}>
          <label htmlFor={nameFieldId}>Name:</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>
        <div className={css.formField}>
          <label htmlFor={numberFieldId}>Phone Number:</label>
          <Field type="text" name="number" id={numberFieldId} />
          <ErrorMessage className={css.error} name="number" component="div" />
        </div>
        <button className={css.contactButton} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
