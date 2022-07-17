import { getGitHubTranslated, getHomeTranslated } from "./LangSlice"

export const TranslateGitHub = (values) => (dispatch) => {
    dispatch(getGitHubTranslated(values))
}

export const TranslateHome = (values) => (dispatch) => {
    dispatch(getHomeTranslated(values))
}