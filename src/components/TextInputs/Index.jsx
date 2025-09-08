import "./TextInputs.css";

export const Textinput = (props) => {
  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </div>
  );
};
