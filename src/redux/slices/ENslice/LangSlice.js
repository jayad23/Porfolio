import { createSlice } from "@reduxjs/toolkit"
import { languages } from "prismjs"

const LangSlice = createSlice({
    name: "ENG",
    initialState: {
        base: "",
        followers: "",
        repos: "",
        friends: "",
        contributions: "",
        bio: "",
        profile: "",
        welcome: "",
        welcome_info: "",
        born: "",
        selection: ""
    },
    reducers: {
        getGitHubTranslated: (state, action) => {
            state.base = action.payload.base
            state.followers = action.payload.followers
            state.repos = action.payload.repos
            state.friends = action.payload.friends
            state.contributions = action.payload.contributions
            state.bio = action.payload.bio
            state.profile = action.payload.profile      
        },
        getHomeTranslated: (state, action) => {
            state.welcome = action.payload.welcome
            state.welcome_info = action.payload.welcome_info
            state.born = action.payload.born
            state.selection = action.payload.selection
        }
    }
})

export const { getGitHubTranslated, getHomeTranslated } = LangSlice.actions
export default LangSlice.reducer