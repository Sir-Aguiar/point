"use client";
import Image from "next/image";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import styles from "./page.module.css";
import Point from "@/components/Point/Point";
import MTI from "../assets/mti.png";
import logout from "../assets/logout.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column gap-2 ">
          <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>Felipe Ferreira Aguiar</h1>
          <h2 style={{ fontSize: "14px" }}>felipeaguiar@mti.mt.gov.br</h2>
          <div className="d-flex gap-2 text-danger align-items-center" style={{ fontSize: "14px" }}>
            <Image src={logout} alt="logout" style={{ maxHeight: "15px", maxWidth: "15px" }} />
            Desconectar
          </div>
        </div>
        <Image src={MTI} alt="MTI Logo" style={{ maxHeight: "75px", maxWidth: "200px" }} />
      </header>
      <div className={styles.main_content}>
        <form className={styles.point_form}>
          <h1 style={{ fontSize: "16px", fontWeight: "500" }}>Registro referente ao dia 06/02/2024</h1>
          <FloatingLabel controlId="floatingTextarea2" label="Observação">
            <Form.Control
              as="textarea"
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
    </main>
  );
}
