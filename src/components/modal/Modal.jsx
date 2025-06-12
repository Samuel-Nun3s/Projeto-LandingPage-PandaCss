import { useEffect, useState } from "react";
import { css } from "../../../styled-system/css";

function Modal({ status }) {
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
          display: status ? "block" : "none"
        })}
      >
        <div>
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
