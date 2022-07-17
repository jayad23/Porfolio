import { getPersonalInfo } from "../redux/slices/personalInfo/thunks"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
export const usePersonalData = () => {
    const personalInfo = useSelector(state => state.personalInfoSlice.data)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPersonalInfo())
    }, [])

    return { personalInfo }
}