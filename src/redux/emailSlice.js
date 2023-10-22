import { createSlice } from "@reduxjs/toolkit";

let pages = {
  all: false,
  read: false,
  unread: false,
  favourites: false,
};

//  initial state
const initialState = {
  emails: [],
  readEmails: [],
  unReadEmails: [],
  favouritesEmails: [],
  page: pages,
  curView: "",
  curEmail: null,
  fullView: false,
};

// slice
const slice = createSlice({
  name: "email",
  initialState,
  reducers: {
    setMails(state, action) {
      const { emails } = action.payload;
      state.emails = emails.map((el, i) => ({
        ...el,
        favourite: false,
        read: false,
      }));
    },
    setReadEmails(state, action) {
      state.readEmails = state.emails.filter((el) => el.read);
    },
    setUnReadEamils(state, action) {
      state.unReadEmails = state.emails.filter((el) => !el.read);
    },
    setFavouriteEamils(state, action) {
      state.favouritesEmails = state.emails.filter((el) => el.favourite);
    },
    markAsRead(state, action) {
      const { id } = action.payload;
      let item = state.emails.find((el) => el.id === id);
      item.read = true;
    },
    setPage(state, action) {
      const { page } = action.payload;
      state.page = {
        ...pages,
        [page]: true,
      };
    },
    setFullView(state, action) {
      const { id, email } = action.payload;

      if (state.curView === id) {
        state.fullView = false;
        state.curView = "";
        state.curEmail = null;
      } else {
        state.curEmail = email;
        state.fullView = true;
        state.curView = id;
      }
      console.log(state.curView, id);
    },
    cancelFullView(state, action) {
      state.curView = "";
      state.fullView = false;
      state.curEmail = null;
    },
    markAsFavourite(state, action) {
      const { id } = action.payload;
      let item = state.emails.find((el) => el.id === id);

      item.favourite = true;
    },
  },
});

// actions
export const actions = slice.actions;

// selector

export const stateSelector = (s) => s.emailReducer;

// reducer
export const emailReducer = slice.reducer;
