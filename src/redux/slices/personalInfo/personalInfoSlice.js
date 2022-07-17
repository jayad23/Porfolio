import { createSlice } from "@reduxjs/toolkit"
export const personalInfoSlice = createSlice({
    name: "personal_info",
    initialState: {
        data: {},
        status: "idle",
        error: null
    },
    reducers: {
        getPersonalData: (state, action) => {
            state.data = action.payload
            state.status = "success"
        },
        getPersonalDataError: (state, action) => {
            state.status = "failed"
            state.error = action.payload
        }
    }
})

export const { getPersonalData, getPersonalDataError } = personalInfoSlice.actions
export default personalInfoSlice.reducer