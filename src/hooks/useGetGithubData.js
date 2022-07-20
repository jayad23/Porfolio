import { useEffect } from "react"
import { getGitHubUserInfo, getRepos } from "../redux/slices/gitHub/thunks"
import { useDispatch, useSelector } from "react-redux"
export const useGetGitHubData = () => {
    const dispatch = useDispatch()
    const { gitHubData, repos } = useSelector(state => state.gitHubSlice)

    useEffect(() => {
        dispatch(getGitHubUserInfo())
    }, [])
    useEffect(() => { 
        if (gitHubData) {
            dispatch(getRepos(gitHubData?.repos_url))
        }
    }, [gitHubData])
    return {
        gitHubData,
        repos
    }
}
