import styles from "./styles.module.css";
import { ButtonPrimaryMFull } from "@/components/commons/button";

export default function SolplaceLogsNewLayoutFooter() {
  return (
    <section className={styles.button}>
      <ButtonPrimaryMFull buttonText="로그 등록" />
    </section>
  );
}
