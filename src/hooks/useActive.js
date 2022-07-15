import { useDispatch, useSelector } from "react-redux"
import { ComponentIs } from "../redux/slices/componentSlice/thunk"
export const useActive = () => {
    const component = useSelector(state => state.componentSlice.component)
    const dispatch = useDispatch()
    const handlerActive = (value) => {
        dispatch(ComponentIs(value))
    }

    return {
        component,
        handlerActive
    }
}