// ** Icons Import
import { Heart } from "react-feather"

const Footer = () => {
  return (
    <p className="clearfix mb-0">
      <span className="float-md-start d-block d-md-inline-block mt-25">
        See profile @:{" "}
        <a
          href="https://www.linkedin.com/in/jaidervanegas23/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </span>
      <span className="float-md-end d-none d-md-block">
        Hand-crafted & Made with
        <Heart size={14} />
      </span>
    </p>
  )
}

export default Footer
