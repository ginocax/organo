import "./Form.css";
import { Textinput } from "../TextInputs/Index";
import { Dropdown } from "../Dropdown";

export const Form = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <Textinput label="Nome" placeholde="Digite seu nome" />
        <Textinput label="Cargo" placeholder="Digite seu cargo" />
        <Textinput label="Imagem" placeholder="Digite o endereço da imagem" />
        <Dropdown label="Times" itens={times} />
      </form>
    </section>
  );
};
