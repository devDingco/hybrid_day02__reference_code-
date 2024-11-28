import { Title } from "@/components/commons/title";
import SolplaceLogsDetailAddress from "./address";
import styles from "./styles.module.css";

export default function SolplaceLogsDetailPlaceInfoSection() {
  return (
    <section className={styles.section}>
      <Title title="Bramble & Brioche 한남점" />
      <SolplaceLogsDetailAddress />
    </section>
  );
}
