import { createSlice } from "@reduxjs/toolkit";

const pageInfoSlice = createSlice({
    name: "pageInfo",
    initialState: {
        page: "About Me"
    },
    reducers: {
        setPage: (state, action) => {
            const {page} = action.payload
            state.page = page
        }
    }
})


// Exported actions and reducers
export const { setPage } = pageInfoSlice.actions;

export default pageInfoSlice.reducer;