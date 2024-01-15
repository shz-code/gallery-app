import { Formik } from "formik";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";

const Login = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "", conPass: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleBlur,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <p className="my-1 text-red-500 font-semibold">
            {errors.email && touched.email && errors.email}
          </p>
          <FormInput
            type="password"
            name="password"
            placeholder="Enter Your Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          <p className="my-1 text-red-500 font-semibold">
            {errors.password && touched.password && errors.password}
          </p>
          <FormInput
            type="password"
            name="conPass"
            placeholder="Confirm Your Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.conPass}
          />
          <p className="my-1 text-red-500 font-semibold">
            {errors.password && touched.password && errors.password}
          </p>
          <Button
            type="submit"
            isLoading={isSubmitting}
            allowed={values.email && values.password}
          />
        </form>
      )}
    </Formik>
  );
};

export default Login;
