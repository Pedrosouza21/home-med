import "./pacientes.css";

const patients = [
  { id: 1, name: "Maria Aparecida", status: "Ativo" },
  { id: 2, name: "João Silva", status: "Inativo" },
  { id: 3, name: "Ana Lima", status: "Ativo" },
];

function Pacientes() {
  return (
    <main className="patients-page">
      <h1>Pacientes</h1>
      <div className="patients-search">
        <label htmlFor="patient-search">Buscar paciente</label>

        <input
          type="search"
          id="patient-search"
          placeholder="Digite o nome do paciente"
        />
      </div>

      <ul className="patients-list">
        {patients.map((patient) => (
          <li key={patient.id}>
            <strong>{patient.name}</strong>
            <span
              className={`patient-status ${patient.status === "Ativo" ? "is-active" : "is-inactive"
                }`}
            >
              {patient.status}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Pacientes;