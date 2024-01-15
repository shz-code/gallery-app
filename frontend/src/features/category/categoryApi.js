import apiSlice from "../api/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "category",
    }),
  }),
});

export const { useGetCategoryQuery } = categoryApi;
