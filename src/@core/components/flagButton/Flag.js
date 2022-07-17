import { Button } from "./flag.styled"

export const Flag = ({ flag, alt, onTranslate, selection, skin, bg_light, bg_dark }) => {
    return (
        <Button bg_light={bg_light} bg_dark={bg_dark} skin={skin} onClick={() => onTranslate(selection)}>
            <img src={flag} alt={alt}/>
        </Button>
    )
}