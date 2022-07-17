// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import gitHubSlice from "./slices/gitHub/githubData.slice"
import componentSlice from "./slices/componentSlice/componentSlice"
import LangSlice from "./slices/ENslice/LangSlice"
import personalInfoSlice from "./slices/personalInfo/personalInfoSlice"

const rootReducer = { 
    navbar, 
    layout,
    gitHubSlice,
    componentSlice,
    LangSlice,
    personalInfoSlice
}

export default rootReducer
