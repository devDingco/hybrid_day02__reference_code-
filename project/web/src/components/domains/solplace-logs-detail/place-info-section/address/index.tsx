"use client";

import { AddressDetail } from "@/components/commons/address";
import styles from "./styles.module.css";
import Image from "next/image";
import { ICONS } from "@/commons/constants/images";
import { useKakaoMap } from "../hook";
import SolplaceMap from "@/components/commons/solplace-map";

export default function SolplaceLogsDetailAddress() {
  const { openMap, currentAddress, center, handleCenterChanged, toggleMap } = useKakaoMap(
    "서울특별시 중구 세종대로 110",
    { lat: 37.5666, lng: 126.979 }
  );

  return (
    <div className={styles.address_container}>
      <div className={styles.address_box}>
        <AddressDetail address={currentAddress} />
        <div className={styles.map_folder} onClick={toggleMap}>
          <div>지도 {openMap ? "접기" : "보기"}</div>
          <Image
            className={openMap ? styles.rotate : styles.rotate_reverse}
            src={ICONS.downArrow.src}
            alt={ICONS.downArrow.alt}
            width={0}
            height={0}
          />
        </div>
      </div>
      {openMap && <SolplaceMap center={center} onCenterChanged={handleCenterChanged} />}
    </div>
  );
}
