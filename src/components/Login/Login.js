import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import Logo from "../../assets/images/hunger-box.png";

const Login = () => (
    
    <Formik
        validate={values => {
            let errors = {};
            if (!values.email) {
            errors.email = "Required";
            } else if (!EmailValidator.validate(values.email)) {
            errors.email = "Invalid email address.";
            }

            const passwordRegex = /(?=.*[0-9])/;
            if (!values.password) {
            errors.password = "Required";
            } else if (values.password.length < 8) {
            errors.password = "Password must be 8 characters long.";
            } else if (!passwordRegex.test(values.password)) {
            errors.password = "Invalid password. Must contain one number.";
            }

            return errors;
        }}
        validationSchema={Yup.object().shape({
        email: Yup.string()
      .email()
      .required("Required"),
      password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number.")
  })}


    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
  >
   {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
          <div className="login">
              
        <form onSubmit={handleSubmit}>
            <img className="login-img" src={Logo} alt="" />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
             />
            {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
        )}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
        )}
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
     </div>
    );
 }}
</Formik>
);

export default Login;