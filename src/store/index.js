// Redux
import { configureStore } from "@reduxjs/toolkit";
import commerceSlice from "./commerce-slice";
import overlaySlice from "./overlay-slice";
//

const store = configureStore({
  reducer: { commerce: commerceSlice.reducer, overlay: overlaySlice.reducer },
});

export default store;
