import { forwardRef, InputHTMLAttributes } from "react";
import { css } from "../../../styled-system/css";
import { SystemStyleObject } from "../../../styled-system/types";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  css?: SystemStyleObject;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ css: cssProps, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={css(style, cssProps)}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

const style = css.raw({
  display: "flex",
  height: "2.5rem",
  width: "100%",
  borderRadius: ".45rem",
  border: "1px solid",
  borderColor: "#27272a",
  backgroundColor: "#09090b",
  padding: ".5rem .75rem",
  fontSize: "14px",
  transition: "ease-in-out .1s",
  ringColor: "#000",
  _focusVisible: {
    ringOffset: "2px",
    ringColor: "#d4d4d8",
    ringWidth: "2px",
    outline: "2px solid transparent",
  },
  _placeholder: {
    color: "#a1a1aa",
  },
  _disabled: {
    opacity: "50%",
  }
})

export { Input }
