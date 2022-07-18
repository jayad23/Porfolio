import { FlagButton } from "../../@core/components/flagButton/FlagButton"
const Home = ({ values, technologies, arrOfBtn }) => {
  return (
    <div>
        <section style={{ display: "flex", alignItems: "center", padding: "0"}}>
          <h1 style={{width: "350px"}}>{values?.welcome}</h1>
          <img src="https://www.logigroup.com/images/modules/react.gif" alt="react_logo" style={{ width: "40px", marginLeft: "5px", paddingBottom: "4px"}} />
          <FlagButton arr={arrOfBtn}/>
        </section>
        <section>
          <p>{values?.welcome_info}</p>
          <ul style={{ width: "100%", display: "flex", gap: "20px", textAlign: "center", alignItems: "center"}}>
            {
              technologies?.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))
            }
          </ul>
        </section>
    </div>
  )
}

export default Home