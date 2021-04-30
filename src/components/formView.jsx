import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { Button, Col, InputGroup, FormControl } from "react-bootstrap";
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
    .min(new Date("01-01-1900"), `Date should be older than ${new Date("01-01-1900").toLocaleDateString()}`)
    .max(new Date(),  `Date should be before than ${new Date().toLocaleDateString()}`)
    .required("Date is required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Password can only contain Latin letters and numbers.")
    .min(4, "Password is too short - should be 4 characters minimum.")
    .required("No password provided."),
  about: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("About field is required "),
});

const changeDateFormat = (values) => {
  const yourDate = values.birthday;
  const yourFormattedDate = yourDate.split("-").reverse().join("-");
  const updatedValues = { ...values, birthday: yourFormattedDate }

  return updatedValues;
}

const MyError = (props) => {
  if (props.error[props.name] && props.touched[props.name])
    return (<p>{props.error.firstName}</p>)
  else return null;
}

const FormView = (params) => {
  return (
    <>
      <h1>Data Form View</h1>
      <Formik
        validationSchema={SignupSchema}
        onSubmit={(values) => params.formSubmit(changeDateFormat(values))}
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "",
          birthday: "",
          email: "",
          password: "",
          about: "",
        }}
      >
        {({handleChange, values, touched, errors }) => (
          <Form>
            <div>
              <label htmlFor='firstName'>First Name</label>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <p>{errors.firstName}</p>
            ) : null}
          </div>

          <div>
            <label>Last Name</label>
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <p>{errors.lastName}</p>
              ) : null}
            </div>

            <div>
            <label>Gender</label>
            <Field name="gender" />
            {errors.gender && touched.gender ? (
              <p>{errors.gender}</p>
              ) : null}
            </div>
            
            <div>
            <label>Birthday</label>
              <Field
              type='date'
              format="DD/MM/YYYY"
              name="birthday"
              label="Your Birthday"/>
            {errors.birthday && touched.birthday ? (
              <p>{errors.birthday}</p>
              ) : null}
            </div>
            
            <div>
            <label>Email</label>
            <Field name="email" />
              {errors.email && touched.email ? <p>{errors.email}</p> : null}
            </div>
            
            <div>
            <label>Password</label>
            <Field name="password" type='password'/>
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
              ) : null}
            </div>
            
            <div>
            <label>About</label>
            <Field name="about" />
            {errors.about && touched.about ? <p>{errors.about}</p> : null}
            </div>
            
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};


export default FormView;


         /* <Form.Group as={Col} md="4" controlId="validationFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}/>
              <ErrorMessage name="firstname" />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}/>
               <ErrorMessage name="firstname" />
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationGender">
              <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="text"
                  name="gender"
                  value={values.gender}
                  onChange={handleChange}
                  isInvalid={!!errors.gender}/>
                <ErrorMessage name="firstname" />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationBirthday">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                name="birthday"
                format="DD/MM/YYYY"
                value={values.birthday}
                onChange={handleChange}
                isInvalid={!!errors.birthday}/>
               <ErrorMessage name="firstname" />
            </Form.Group>
            
            <Form.Group as={Col} md="3" controlId="validationEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="abc@xyz.com"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}/>
               <ErrorMessage name="firstname" />
            </Form.Group>

            <Form.Group as={Col} md="3" controlId="validationPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}/>
               <ErrorMessage name="firstname" />
            </Form.Group>
         
            <Form.Group as={Col} md="3" controlId="validationAbout">
              <Form.Label>About</Form.Label>
              <Form.Control
                type="text"
                name="about"
                value={values.about}
                onChange={handleChange}
                isInvalid={!!errors.about}/>
              <ErrorMessage name="firstname" />
        </Form.Group> */
