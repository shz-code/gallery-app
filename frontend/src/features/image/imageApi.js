import apiSlice from "../api/apiSlice";

const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getImageList: builder.query({
      query: () => "image",
    }),
  }),
});

export const { useGetImageListQuery } = imageApi;
