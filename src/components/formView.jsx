import { Formik, Form, Field } from "formik";
import { Button } from "react-bootstrap";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is required "),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is required"),
  gender: Yup.string().oneOf(["F", "M"]).required("Gernder is required"),
  birthday: Yup.date()
    .min(new Date("01-01-1900"))
    .max(new Date())
    .required("Date is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(4, "Password is too short - should be 4 characters minimum.")
    .matches(
      /[a-zA-Z0-9]/,
      "Password can only contain Latin letters and numbers."
    )
    .required("No password provided."),
  about: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("About field is required "),
});

const FormView = (params) => {
  return (
    <>
      <h1>Data Form View</h1>
      <Formik
        validationSchema={SignupSchema}
        onSubmit={(values) => params.formSubmit(values)}
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "",
          birthdate: "",
          email: "",
          password: "",
          about: "",
        }}
      >
        {({ touched, errors }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="gender" />
            {errors.gender && touched.gender ? (
              <div>{errors.gender}</div>
            ) : null}
            <Field name="birthday" />
            {errors.birthday && touched.birthday ? (
              <div>{errors.birthday}</div>
            ) : null}
            <Field name="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <Field name="about" />
            {errors.about && touched.about ? <div>{errors.about}</div> : null}

            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormView;
