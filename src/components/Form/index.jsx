import { useState } from "react";
import { Textinput } from "../TextInputs/Index";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import "./Form.css";

export const Form = (props) => {
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (evento) => {
    evento.preventDefault();

    props.onNewCollaborator({
      name,
      cargo,
      image,
      team,
    });

    setName("");
    setCargo("");
    setImage("");
    setTeam("");
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Textinput
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onTyped={(value) => setName(value)}
        />
        <Textinput
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          value={cargo}
          onTyped={(value) => setCargo(value)}
        />
        <Textinput
          required={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          onTyped={(value) => setImage(value)}
        />
        <Dropdown
          required={true}
          label="Times"
          itens={props.teams}
          value={team}
          onTyped={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
