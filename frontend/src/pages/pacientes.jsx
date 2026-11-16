import { useState } from "react";
import "./pacientes.css";

function Pacientes({ patients, onEditPatient }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  );

  return (
    <main className="patients-page">
      <h1>Pacientes</h1>

      <div className="patients-search">
        <label htmlFor="patient-search">
          Buscar paciente
        </label>

        <input
          type="search"
          id="patient-search"
          placeholder="Digite o nome do paciente"
          value={searchTerm}
          onChange={(event) =>
            setSearchTerm(event.target.value)
          }
        />
      </div>

      {filteredPatients.length > 0 ? (
        <ul className="patients-list">
          {filteredPatients.map((patient) => (
            <li key={patient.id}>
              <strong>{patient.name}</strong>

              <div className="patient-actions">
                <span
                  className={`patient-status ${
                    patient.status === "Ativo"
                      ? "is-active"
                      : "is-inactive"
                  }`}
                >
                  {patient.status}
                </span>

                <button
                  type="button"
                  onClick={() => onEditPatient(patient)}
                >
                  Editar
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="patients-empty">
          Nenhum paciente encontrado.
        </p>
      )}
    </main>
  );
}

export default Pacientes;