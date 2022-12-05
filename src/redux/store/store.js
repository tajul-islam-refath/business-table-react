import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../state-slice/settings-slice";
import dataReducer from "../state-slice/data";

export default configureStore({
  reducer: {
    settings: settingsReducer,
    data: dataReducer,
  },
});
