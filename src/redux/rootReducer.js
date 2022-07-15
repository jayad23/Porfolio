// ** Reducers Imports
import layout from "./layout"
import navbar from "./navbar"
import gitHubSlice from "./slices/gitHub/githubData.slice"
import componentSlice from "./slices/componentSlice/componentSlice"

const rootReducer = { 
    navbar, 
    layout,
    gitHubSlice,
    componentSlice
}

export default rootReducer
