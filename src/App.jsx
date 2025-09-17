import { useState } from "react";
import { Banner } from "./components/Banner/Index";
import { Form } from "./components/Form";

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const onNewCollaboratorAdded = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div className="App">
      <Banner />
      <Form
        onNewCollaborator={(colaborador) => onNewCollaboratorAdded(colaborador)}
      />
    </div>
  );
}

export default App;
