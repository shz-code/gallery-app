import apiSlice from "../api/apiSlice";

const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => "category",
    }),
  }),
});

export const { useGetCategoryQuery } = categorySlice;
