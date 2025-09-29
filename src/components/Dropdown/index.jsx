import "./Dropdown.css";

export const Dropdown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        onChange={(evento) => props.onTyped(evento.target.value)}
        required={props.required}
        value={props.value}
      >
        <option value=""></option>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
