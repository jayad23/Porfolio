import { useSelector } from "react-redux"
import { useState, useEffect } from 'react'

export const usePaginate = () => {
    const repos = useSelector(state => state.gitHubSlice.repos)
    const [reposShow, setReposToShow] = useState([])
    const [countBtn, setCountBtn] = useState([])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const count = Math.ceil(repos?.length / 3)
        setCountBtn(repos?.slice(0, count))
    }, [repos])
    useEffect(() => {
        const limit = Math.ceil(repos?.length / 9)
        const initialIndex = (index * limit)
        const finalIndex = (initialIndex + limit)
        if (index >= 0 && finalIndex <= repos?.length) {
          setReposToShow(repos?.slice(initialIndex, finalIndex))
        }
    }, [repos, index])

    return {
        countBtn,
        reposShow,
        setIndex,
        index
    }
}