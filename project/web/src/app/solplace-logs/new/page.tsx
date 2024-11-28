import Form from "@/components/commons/form";
import SolplaceLogsNewAddImage from "@/components/domains/solplace-logs-new/add-image-section";
import SolplaceLogsNewInputSection from "@/components/domains/solplace-logs-new/input-section";
import SolplaceLogsNewLayoutFooter from "@/components/domains/solplace-logs-new/layout-footer";
import styles from "./styles.module.css";
import { useInitialize } from "./form.initialize";
import { ISolplaceLogsNewSchema, solplaceLogsNewSchema } from "./form.schema";

export default async function SolplaceLogsNewPage() {
  return (
    <main>
      <Form<ISolplaceLogsNewSchema>
        schema={solplaceLogsNewSchema}
        defaultValue={{ address: "서울특별시 중구 세종대로 110", lat: 37.5666, lng: 126.979 }}
        useInitialize={useInitialize}
      >
        <div className={styles.container}>
          <SolplaceLogsNewAddImage />
          <SolplaceLogsNewInputSection />
          <SolplaceLogsNewLayoutFooter />
        </div>
      </Form>
    </main>
  );
}
