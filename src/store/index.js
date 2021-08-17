// Redux
import { configureStore } from "@reduxjs/toolkit";
import commerceSlice from "./commerce-slice";
//

const store = configureStore({
  reducer: { commerce: commerceSlice.reducer },
});

export default store;
