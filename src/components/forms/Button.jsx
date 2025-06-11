import { css } from '../../../styled-system/css';

function Button({textButton, wd}) {
  return (
    <button
      className={css({
        padding: "10px",
        position: "absolute",
        bottom: 10,
        left: wd != "mobile" ? "0" : "50%",
        transform: wd != "mobile" ? "translate(-30%, 0%)" : "translate(-50%, 0%)",
        backgroundColor: "rgb(55, 161, 50)",
        color: "#DAE3EC",
        border: "none",
        fontSize: "1.3em",
        fontWeight: "bold",
        boxShadow: "0px 0px 20px black",
        borderRadius: "10px",
        transition: ".4s",
        _hover: {
          backgroundColor:"rgb(55, 190, 48)",
          cursor: "pointer",
          transform: wd != "mobile" ? "translate(-30%, -25%)" : "translate(-50%, -25%)"
        }
      })}
    >
      {textButton}
    </button>
  )
}

export default Button;
