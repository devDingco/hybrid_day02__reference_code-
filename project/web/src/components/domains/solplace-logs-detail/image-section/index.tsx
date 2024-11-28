import { IMAGES } from "@/commons/constants/images";
import Image from "next/image";
import styles from "./styles.module.css";

export default function SolplaceLogsDeatilImageSection() {
  return (
    <section className={styles.imageWrapper}>
      <Image
        className={styles.image}
        src={IMAGES.detailDefaultImage.src}
        alt={IMAGES.detailDefaultImage.alt}
        width={0}
        height={0}
        sizes="100vw"
      />
    </section>
  );
}
