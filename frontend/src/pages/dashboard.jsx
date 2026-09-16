import "./dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-layout">
            <aside className="sidebar">
                <div className="sidebar-brand">HomeMed</div>
                <nav aria-label="Menu principal">
                    <ul>
                        <li>Dashboard</li>
                        <li>Pacientes</li>
                        <li>Atendimentos</li>
                    </ul>
                </nav>
            </aside>

            <main className="dashboard-content">
                <h1>Dashboard</h1>
                <p>Visão Geral dos pacientes e atendimentos</p>
                <section className="dashboard-stats" aria-label="Resumo do sistema">
                    <article className="stat-card">
                        <h2>Pacientes ativos</h2>
                        <p>12</p>
                    </article>

                    <article className="stat-card">
                        <h2>Atendimentos hoje</h2>
                        <p>5</p>
                    </article>

                    <article className="stat-card">
                        <h2>Cuidadores ativos</h2>
                        <p>8</p>
                    </article>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;