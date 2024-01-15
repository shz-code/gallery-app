import { Formik } from "formik";
import { useRegisterMutation } from "../../features/auth/authApi";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";

const Login = () => {
  const [register] = useRegisterMutation();
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", conPass: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!values.name) {
          errors.name = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        } else if (values.password.length < 3) {
          errors.password = "Password should be minimum of 3 characters";
        } else if (values.conPass != values.password) {
          errors.conPass = "Passwords do not match";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await register(values);
        setSubmitting(true);
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
            type="text"
            name="name"
            placeholder="Enter Your name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <p className="my-1 text-red-500 font-semibold">
            {errors.name && touched.name && errors.name}
          </p>
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
            {errors.conPass && touched.conPass && errors.conPass}
          </p>
          <Button
            type="submit"
            isLoading={isSubmitting}
            allowed={values.email && values.password && values.conPass}
          />
        </form>
      )}
    </Formik>
  );
};

export default Login;
