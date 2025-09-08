import "./Form.css";
import { Textinput } from "../TextInputs/Index";

export const Form = () => {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <Textinput label="Nome" placeholde="Digite seu nome" />
        <Textinput label="Cargo" placeholder="Digite seu cargo" />
        <Textinput label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
};
