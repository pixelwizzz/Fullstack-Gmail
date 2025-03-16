import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  emails: {
    primary: [],
    promotions: [],
    social: [],
    updates: [],
    starred: [],
    snoozed: [],
    sent: [],
    drafts: [],
  },
  selectedEmail: null,
  loading: false,
  error: null,
};

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmails: (state, action) => {
      const { category, emails } = action.payload;
      state.emails[category] = emails;
    },
    addEmail: (state, action) => {
      const { category, email } = action.payload;
      state.emails[category].unshift(email);
    },
    deleteEmail: (state, action) => {
      const { category, emailId } = action.payload;
      state.emails[category] = state.emails[category].filter(
        email => email.id !== emailId
      );
    },
    starEmail: (state, action) => {
      const { emailId, isStarred } = action.payload;
      // Add to or remove from starred
      if (isStarred) {
        const emailToStar = Object.values(state.emails)
          .flat()
          .find(email => email.id === emailId);
        if (emailToStar && !state.emails.starred.find(e => e.id === emailId)) {
          state.emails.starred.unshift(emailToStar);
        }
      } else {
        state.emails.starred = state.emails.starred.filter(
          email => email.id !== emailId
        );
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectedEmail = action.payload;
    },
  },
});

export const {
  setEmails,
  addEmail,
  deleteEmail,
  starEmail,
  setLoading,
  setError,
  setSelectedEmail,
} = emailSlice.actions;

export default emailSlice.reducer; 