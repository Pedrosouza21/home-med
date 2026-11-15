import "./CadastroPaciente.css";
import { useState } from "react";


function CadastroPaciente({ onAddPatient }) {
    const [patientName, setPatientName] = useState("");
    const [patientStatus, setPatientStatus] = useState("Ativo");

    function handleSubmit(event) {
        event.preventDefault();

        const newPatient = {
            id: Date.now(),
            name: patientName,
            status: patientStatus,
        };

        onAddPatient(newPatient);

        setPatientName("");
        setPatientStatus("Ativo");
    }

    return (
        <section className="patient-form-page">
            <h1>Cadastrar paciente</h1>
            <p>Preencha os dados básicos do paciente.</p>

            <form className="patient-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="patient-name">Nome Completo:</label>

                    <input
                        type="text"
                        id="patient-name"
                        name="name"
                        placeholder="Digite o nome do paciente"
                        required
                        value={patientName}
                        onChange={(event) => setPatientName(event.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="patient-status">Status: </label>

                    <select
                        id="patient-status"
                        name="status"
                        value={patientStatus}
                        onChange={(event) => setPatientStatus(event.target.value)}
                    >
                        <option value="Ativo">Ativo</option>
                        <option value="Inativo">Inativo</option>
                    </select>
                </div>

                <button type="submit">Cadastrar paciente</button>
            </form>
        </section>
    );
}

export default CadastroPaciente;