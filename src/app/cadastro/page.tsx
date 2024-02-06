import styles from "./page.module.css";

export default function Cadastro() {
  return (
    <div className={styles.wraper}>
      <form className={styles.login_form}>
        <h1 className={styles.title}>HomePONTO</h1>
        <div className="d-flex flex-column gap-2">
          <div className="form-floating ">
            <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-floating ">
            <input type="text" className="form-control" id="name" placeholder="Josézinho da feira" />
            <label htmlFor="name">Nome</label>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="form-floating">
            <input type="password" className="form-control" id="password" placeholder="Password" />
            <label htmlFor="password">Senha</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="confirm-password" placeholder="Password" />
            <label htmlFor="confirm-password">Confirmar a senha</label>
          </div>
        </div>
        <div className="px-2">
          <a href="/login" style={{ fontSize: "13px" }}>
            Entrar
          </a>
        </div>
        <button className="btn btn-primary p-2" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
