import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, { payload }) => {
      const post = {
        image: payload.image,
        caption: payload.caption,
        reacts: {
          like: 0,
          haha: 0,
          sad: 0,
          angry: 0,
          love: 0,
          wow: 0,
        },
        comments: [],
        author: {
          name: payload.user.name,
          photoURL: payload.user.photo,
          uid: payload.user.uid,
        },
        time: new Date(),
      };
      state.posts.push(post);
    },
  },
});
export const { addPost } = postsSlice.actions;
export default postsSlice.reducer;
