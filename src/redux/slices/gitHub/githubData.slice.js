import { createSlice } from "@reduxjs/toolkit"

const gitHubSlice = createSlice({
    name: "githubData",
    initialState:{
        status: "idle",
        gitHubData: {},
        repos: [],
        error: null
    },
    reducers: {
        getGitHubData: (state, action) => {
            state.status = "success"
            state.gitHubData = action.payload
        },
        getGitHubError: (state, action) => {
            state.status = "Failed"
            state.error = action.payload
        },
        getGitHubRepos: (state, action) => {
            state.status = "success"
            state.repos = action.payload.map(repo => ({id: repo?.id, repo_name: repo?.name,  repo_url: repo?.html_url, created_at: repo?.created_at, deployed: repo?.homepage}))
        }
    }
})

export const { getGitHubData, getGitHubRepos, getGitHubError } = gitHubSlice.actions
export default gitHubSlice.reducer