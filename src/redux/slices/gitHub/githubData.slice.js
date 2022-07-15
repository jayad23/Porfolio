import { createSlice } from "@reduxjs/toolkit"

const gitHubSlice = createSlice({
    name: "githubData",
    initialState:{
        status: "idle",
        data: {},
        error: null
    },
    reducers: {
        getGitHubData: (state, action) => {
            state.status = "success"
            state.data = action.payload
        },
        getGitHubError: (state, action) => {
            state.status = "Failed"
            state.error = action.payload
        }
    }
})

export const { getGitHubData, getGitHubError } = gitHubSlice.actions
export default gitHubSlice.reducer