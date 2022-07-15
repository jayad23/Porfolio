import { useEffect } from "react"
import { getGitHubUserInfo } from "../redux/slices/gitHub/thunks"
import { useDispatch, useSelector } from "react-redux"
export const useGetGitHubData = () => {
    const dispatch = useDispatch()
    const gitHubData = useSelector(state => state.gitHubSlice.data)

    useEffect(() => {
        dispatch(getGitHubUserInfo())
    }, [])

    return {
        gitHubData
    }
}