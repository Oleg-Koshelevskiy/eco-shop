import { InputProps } from "@/types";

const Input = (props: InputProps) => {
  return (
    <input
      type={props.type || "text"}
      id={props.id}
      onChange={props.onChange}
      disabled={props.disabled}
      className={`border border-lime-600 rounded-md text-center font-semibold text-lime-800 ${props.className}`}
      value={props.value}
      step={props.step}
      min={props.min}
      max={props.max}
      readOnly={props.readOnly}
    />
  );
};

export default Input;
