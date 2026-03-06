import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = Array.isArray(action.payload) ? action.payload : [];
    },

    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },

    addPost: (state, action) => {
      state.posts.push(action.payload);
    },

    updatePost: (state, action) => {
      const updatedPost = action.payload;
      state.posts = state.posts.map((post) =>
        post.slug === updatedPost.slug ? updatedPost : post
      );

      if (state.currentPost?.slug === updatedPost.slug) {
        state.currentPost = updatedPost;
      }
    },

   deletePost: (state, action) => {
  const id = action.payload; // Pass the $id here
  state.posts = state.posts.filter((post) => (post.$id || post.slug) !== id);
  if ((state.currentPost?.$id || state.currentPost?.slug) === id) {
    state.currentPost = null;
  }
},

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setPosts,
  setCurrentPost,
  addPost,
  updatePost,
  deletePost,
  setLoading,
  setError,
} = postSlice.actions;

export default postSlice.reducer;