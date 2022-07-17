import { createSlice } from "@reduxjs/toolkit"
import { languages } from "prismjs"

const LangSlice = createSlice({
    name: "ENG",
    initialState: {
        home: "",
        followers: "",
        repos: "",
        friends: "",
        contributions: "",
        bio: "",
        profile: ""
    },
    reducers: {
        getTranslated: (state, action) => {
            state.home = action.payload.home
            state.followers = action.payload.followers
            state.repos = action.payload.repos
            state.friends = action.payload.friends
            state.contributions = action.payload.contributions
            state.bio = action.payload.bio
            state.profile = action.payload.profile      
        }
    }
})

export const { getTranslated } = LangSlice.actions
export default LangSlice.reducer