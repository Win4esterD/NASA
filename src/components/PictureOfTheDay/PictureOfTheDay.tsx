import Image from "next/image";
import styles from "./PictureOfTheDay.module.css";

type PictureOfTheDayProps = {
  date: string;
  url: string;
  author: string | undefined| null;
  explanation: string| undefined| null;
};

export function PictureOfTheDay({ date, url, author, explanation }: PictureOfTheDayProps) {
  return (
    <>
      <h1>Picture of the day: {date}</h1>
      <Image
        priority={true}
        src={url}
        alt="Picture of the day"
        width="800"
        height="550"
        className={styles.picture}
      />
      <p>
        <b>Author</b>: {author}
      </p>
      <p className={styles.explanation}>{explanation}</p>
    </>
  );
}
