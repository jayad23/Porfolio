import { setComponent } from "./componentSlice"
export const ComponentIs = (component) => (dispatch) => {
    dispatch(setComponent(component))
}