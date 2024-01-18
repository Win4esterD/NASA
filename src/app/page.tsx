import Image from "next/image";
import styles from "./page.module.css";
import { getPictureOfTheDay } from "@/services/requests";
import { OtherDaysFotos } from "@/sections";

export default async function Home() {
  const pictureOfTheDay = await getPictureOfTheDay();
  console.log(pictureOfTheDay);
  return (
    <main className={styles.main}>
      <h1>Picture of the day: {pictureOfTheDay.date}</h1>
      <Image
        priority={true}
        src={pictureOfTheDay?.url}
        alt="Picture of the day"
        width="800"
        height="550"
      />
      <OtherDaysFotos defaultDate={pictureOfTheDay.date} />
    </main>
  );
}
