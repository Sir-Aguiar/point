import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.wraper}>
      <form className={styles.login_form}>
        <h1 className={styles.title}>HomePONTO</h1>
        <div className="d-flex flex-column gap-2">
          <div className="form-floating ">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <div className="px-2">
            <a href="/cadastro" style={{ fontSize: "13px" }}>
              Cadastrar
            </a>
          </div>
        </div>
        <button className="btn btn-primary p-2" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
