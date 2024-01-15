import apiSlice from "../api/apiSlice";
import { addModalPhoto } from "../modalPhoto/modalPhotoSlice";

const imageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getImageList: builder.query({
      query: () => "image",
    }),
    addComment: builder.mutation({
      query: ({ id, body }) => ({
        url: `image/${id}`,
        method: "POST",
        body: body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const res = await queryFulfilled;
        dispatch(addModalPhoto(res.data));
        dispatch(
          apiSlice.util.updateQueryData("getImageList", undefined, (draft) => {
            const newDraft = draft.map((item) => {
              if (item._id === arg.id) {
                return {
                  ...item,
                  comments: [
                    ...item.comments,
                    { name: arg.body.name, comment: arg.body.comment },
                  ],
                };
              } else return { ...item };
            });
            return newDraft;
          })
        );
      },
    }),
  }),
});

export const { useGetImageListQuery, useAddCommentMutation } = imageApi;
