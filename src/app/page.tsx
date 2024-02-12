"use client";
import Image from "next/image";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import Point from "@/components/Point/Point";
import MTI from "../assets/mti.png";
import logout from "../assets/logout.png";
import { BaterPonto } from "@/services/BaterPonto";
import { useAuthContext } from "@/contexts/Auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { authState, isUserAuthenticated, logOut } = useAuthContext();
  const [observacao, setObservacao] = useState<string | undefined>();
  useEffect(() => {
    if (isUserAuthenticated) {
      return router.replace("/");
    }
    return router.replace("/login")
  }, [isUserAuthenticated]);
  const {
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  return (
    <main className={styles.main}>
      <header className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column gap-2 ">
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{authState?.name}</h1>
          <h2 style={{ fontSize: "14px" }}>{authState?.email}</h2>
          <div className="d-flex gap-2 text-danger align-items-center" style={{ fontSize: "14px" }} onClick={() => logOut()}>
            <Image src={logout} alt="logout" style={{ maxHeight: "15px", maxWidth: "15px" }} />
            Desconectar
          </div>
        </div>
        <Image src={MTI} alt="MTI Logo" style={{ maxHeight: "75px", maxWidth: "200px" }} />
      </header>
      <div className={styles.main_content}>
        <form className={styles.point_form} onSubmit={handleSubmit(async () => { await BaterPonto(authState?.email, authState?.userId, observacao) })}>
          <h1 style={{ fontSize: "16px", fontWeight: "500" }}>Registro referente ao dia {new Date().toLocaleDateString()}</h1>
          <FloatingLabel controlId="floatingTextarea2" label="Observação">
            <Form.Control
              as="textarea"
              value={observacao}
              onChange={(e) => { setObservacao(e.target.value) }}
              placeholder="Descreva a razão de alguma irregularidade ou observação em relação ao horário (Opcional)"
              style={{ height: "100px", maxHeight: "200px", minHeight: "100px" }}
            />
          </FloatingLabel>
          <Button type="submit" variant="primary">
            Registrar ponto
          </Button>
        </form>
        <div className={styles.points}>
          <h1 style={{ fontSize: "16px" }}>Histórico de pontos</h1>
          <Point />
          <Point />
          <Point />
          <Point />
        </div>
      </div>
    </main >
  );
}
