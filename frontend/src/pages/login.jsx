import "./login.css";

function Login() {
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="logo">HomeMed</div>
        <h1>Bem-vindo à HomeMed</h1>
        <p>Entre para acompanhar pacientes e atendimentos.</p>

        <form className="login-form">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            placeholder="Digite seu e-mail"
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            placeholder="Digite sua senha"
            required
          />

          <button type="submit">Entrar</button>
        </form>
      </section>
    </main>
  );
}

export default Login;
