import { useState } from "react";
import { Textinput } from "../TextInputs/Index";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import "./Form.css";

export const Form = (props) => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const onSave = (evento) => {
    evento.preventDefault();

    props.onNewCollaborator({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <Textinput
          required={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={nome}
          onTyped={(value) => setNome(value)}
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
          value={imagem}
          onTyped={(value) => setImagem(value)}
        />
        <Dropdown
          required={true}
          label="Times"
          itens={times}
          value={time}
          onTyped={(value) => setTime(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};
