import { FaGithub, FaLinkedin } from "react-icons/fa";
import { css } from "../../../styled-system/css";
import { networks } from "../../../styled-system/recipes";

function Networks() {
  return (
    <div className={css({
      height: "auto",
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      bottom: 0,
      right: 0
    })}>
      <a 
        href="https://github.com/Samuel-Nun3s"
        target="blank"
        rel="external"
        className={networks()}
      >
        <FaGithub 
          className={css({
            fontSize: "20px"
          })}
        />
      </a>
      <a 
        href="https://www.linkedin.com/in/samuel-nunes-5b4b72270/"
        target="blank"
        rel="external"
        className={networks()}  
      >
        <FaLinkedin
          className={css({
            fontSize: "20px"
          })}
        />
      </a>
    </div>
  )
}

export default Networks;
