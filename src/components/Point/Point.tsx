import styles from "./Point.module.css";

export default function Point() {
  return (
    <div className={styles.point}>
      <div className={styles.timer}>
        <span>Dia 05/02/2024</span>
        <span>Hora de entrada: 08:00</span>
        <span>Hora de saída: 14:00</span>
      </div>
      <span style={{ fontSize: "24px", fontWeight: "600" }}>6h</span>
    </div>
  );
}
