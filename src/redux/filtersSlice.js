import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

const persistConfig = {
  key: "filters",
  storage,
  whitelist: ["name"],
};

export const filtersReducer = persistReducer(
  persistConfig,
  filtersSlice.reducer
);

export const { changeFilter } = filtersSlice.actions;
export const selectFilter = (state) => state.filters.name;
