import { Button } from "./flag.styled"
import { useSelector } from "react-redux"
export const Flag = ({ flag, alt, onTranslate, selection }) => {
    const skin = useSelector(state => state.layout.skin)
    return (
        <Button skin={skin} onClick={() => onTranslate(selection)}>
            <img src={flag} alt={alt}/>
        </Button>
    )
}