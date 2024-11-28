import SolplaceLogsDetailImageSection from "@/components/domains/solplace-logs-detail/image-section";
import SolplaceLogsDetailPlaceInfoSection from "@/components/domains/solplace-logs-detail/place-info-section";
import SolplaceLogsDetailContentsSection from "@/components/domains/solplace-logs-detail/contents-section";
import styles from "./styles.module.css";
import Divider from "@/components/commons/divider";

export default function SolplaceLogsDetailPage() {
  return (
    <>
      <main>
        <SolplaceLogsDetailImageSection />
        <div className={styles.info_container}>
          <SolplaceLogsDetailPlaceInfoSection />
          <Divider />
          <SolplaceLogsDetailContentsSection />
        </div>
      </main>
    </>
  );
}
