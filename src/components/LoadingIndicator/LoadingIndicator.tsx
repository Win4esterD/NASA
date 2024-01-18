import Image from "next/image"
import styles from './LoadingIndicator.module.css';

export function LoadingIndicator () {
  return (
    <Image
      src={"/images/icons/rolling.png"}
      alt="Loading indicator"
      width="100"
      height="100"
      className={styles.rot}
    />
  );
}