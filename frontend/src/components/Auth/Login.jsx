import { Formik } from "formik";
import { useLoginMutation } from "../../features/auth/authApi";
import Button from "../ui/Button";
import FormInput from "../ui/FormInput";

const Login = () => {
  const [login] = useLoginMutation();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
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
      onSubmit={async (values, { setSubmitting }) => {
        await login(values);
        setSubmitting(false);
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
