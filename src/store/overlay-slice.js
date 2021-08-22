// Redux
import { createSlice } from "@reduxjs/toolkit";
//

// CSS
import styles from "../components/Home/Home.module.css";
//

const initialState = { cartActive: false };

const overlaySlice = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    toggleCart(state) {
      if (
        window.innerWidth > document.body.clientWidth ||
        document.body.classList.contains(styles["scrollbar-on"])
      ) {
        // User has scrollbar
        document.body.classList.toggle(styles["scrollbar-on"]);
      } else {
        // User has no scrollbar
        document.body.classList.toggle(styles["scrollbar-off"]);
      }

      if (state.cartActive === true) {
        state.cartActive = false;
      } else {
        state.cartActive = true;
      }
    },
  },
});

export const overlayAcitons = overlaySlice.actions;
export default overlaySlice;
