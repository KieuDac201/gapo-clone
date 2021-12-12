import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: postsSlice,
});
