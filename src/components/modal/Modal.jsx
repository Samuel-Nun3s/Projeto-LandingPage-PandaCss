import { css } from "../../../styled-system/css";

import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../forms/Button";

function Modal({ status, action }) {
  return (
    <>
      <div
        className={css({
          display: status ? "block" : "none",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: "5"
        })}
      >
      </div>
      <div
        className={css({
          display: status ? "block" : "none",
          padding: "15px",
          borderRadius: "10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#526B6F",
          zIndex: "7"
        })}
      >
        <div>
          <div>
            <Button 
              textButton={<IoMdCloseCircleOutline />}
              action={action}
              type="close"
            />
          </div>
          <h2>Secure your spot</h2>
        </div>
        <form>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <button>
            Register
          </button>
        </form>
      </div>
    </>
  )
}

export default Modal;
