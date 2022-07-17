import { getTranslated } from "./LangSlice"

export const Translate = (values) => (dispatch) => {
    dispatch(getTranslated(values))
}