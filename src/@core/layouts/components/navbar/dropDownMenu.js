import styled from "styled-components"
import { useSelector } from "react-redux"
const Div = styled.div`
    padding: 10px 10px 10px 20px;
    border-radius: 8px;
    &:hover{
        background-color: ${props => (props.skin === "dark" ? "#293462" : "#EAF6F6")};
    }
`

export const DropDownComponent = ({ Element, name, link }) => {
    const skin = useSelector(state => state.layout.skin)
    return (
        <Div skin={skin} style={{ padding: "10px 10px 10px 20px"}}>
          <Element size={14} className="me-75" />
          <a href={link} target="_blank" rel="noreferrer" className="align-middle">{name}</a>
        </Div>
    )
}