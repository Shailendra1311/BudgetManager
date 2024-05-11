import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  budgetEntries: [],
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.budgetEntries.push(action.payload);
      serializableCheck: false    },
    // Define more reducers here if needed
  },
});

export const { addItem } = budgetSlice.actions;

export default budgetSlice.reducer;
