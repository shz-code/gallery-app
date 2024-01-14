import apiSlice from "../api/apiSlice";

const imageSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getImageList: builder.query({
      query: () => "image",
    }),
  }),
});

export const { useGetImageListQuery } = imageSlice;
