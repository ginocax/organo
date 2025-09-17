import "./TextInputs.css";

export const Textinput = (props) => {
  const modifiedPlaceholder = `${props.placeholder}...`;

  const onTyped = (event) => {
    props.onTyped(event.target.value);
  };

  return (
    <div className="text-input">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={onTyped}
        required={props.required}
        placeholder={modifiedPlaceholder}
      />
    </div>
  );
};
