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
        bio: ""
    },
    reducers: {
        getTranslated: (state, action) => {
            state.home = action.payload.home
            state.followers = action.payload.followers
            state.repos = action.payload.repos
            state.friends = action.payload.friends
            state.contributions = action.payload.contribute
            state.bio = action.payload.bio      
        }
    }
})

export const { getTranslated } = LangSlice.actions
export default LangSlice.reducer