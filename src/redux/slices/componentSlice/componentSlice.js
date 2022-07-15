import { createSlice } from "@reduxjs/toolkit"

const componentSlice = createSlice({
    name: "component",
    initialState: {
        component: ""
    },
    reducers: {
        setComponent: (state, action) => {
            state.component = action.payload
        }
    }
})
export const { setComponent } = componentSlice.actions
export default componentSlice.reducer