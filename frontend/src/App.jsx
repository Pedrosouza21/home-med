import { useState } from "react";
import CadastroPaciente from "./pages/CadastroPaciente";
import Pacientes from "./pages/pacientes";

function App() {
  const [patients, setPatients] = useState([]);

  function handleAddPatient(patient) {
    setPatients((currentPatients) => [
      ...currentPatients,
      patient,
    ]);
  }

  function handleEditPatient(patient) {
    console.log("Paciente selecionado:", patient);
  }


  return (
    <>
      <CadastroPaciente onAddPatient={handleAddPatient} />

      <Pacientes
        patients={patients}
        onEditPatient={handleEditPatient}
      />

      <p>Pacientes cadastrados: {patients.length}</p>
    </>
  );
}

export default App;