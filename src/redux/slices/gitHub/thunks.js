import axios from "axios"
import { getGitHubData, getGitHubError, getGitHubRepos} from "./githubData.slice"
import { gitHubApi } from "../../../assets/global/variables"
export const getGitHubUserInfo = () => (dispatch) => {
    axios.get(gitHubApi)
        .then(res => {
            dispatch(getGitHubData(res.data))
        })
        .catch(err => dispatch(getGitHubError(err)))
}
export const getRepos = (repoUrl) => (dispatch) => {
    axios.get(repoUrl)
        .then(res => {
            dispatch(getGitHubRepos(res.data))
        })
        .catch(err => dispatch(getGitHubError(err)))
}