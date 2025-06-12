import { css } from "../../../styled-system/css";

function Modal() {
  return (
    <>
      <div
        className={css({
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
      <div></div>
    </>
  )
}

export default Modal;
