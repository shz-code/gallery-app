import { toast } from "react-hot-toast";
import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";
export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "user",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              name: result.data.name,
              email: result.data.email,
            })
          );
          dispatch(
            userLoggedIn({
              name: result.data.name,
              email: result.data.email,
            })
          );
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              name: result.data.name,
              email: result.data.email,
            })
          );
          dispatch(
            userLoggedIn({
              name: result.data.name,
              email: result.data.email,
            })
          );
        } catch (err) {
          toast.error(err.error.data);
        }
      },
    }),
    adminLogin: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // Check if user role is admin
          if (result?.data.user.role === "admin") {
            localStorage.setItem(
              "auth",
              JSON.stringify({
                accessToken: result.data.accessToken,
                user: result.data.user,
                isAdmin: true,
              })
            );
            dispatch(
              userLoggedIn({
                accessToken: result.data.accessToken,
                user: result.data.user,
                isAdmin: true,
              })
            );
          }
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useAdminLoginMutation } =
  authApi;
