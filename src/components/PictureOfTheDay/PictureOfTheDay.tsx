import Image from "next/image";
import styles from "./PictureOfTheDay.module.css";
import { Typography } from "@mui/material";

type PictureOfTheDayProps = {
  date: string;
  url: string;
  author: string | undefined| null;
  explanation: string| undefined| null;
};

export function PictureOfTheDay({ date, url, author, explanation }: PictureOfTheDayProps) {
  return (
    <>
      <Typography variant="h1" sx={{fontSize: '2.5rem'}}>Picture of the day: {date}</Typography>
      <Image
        priority={true}
        src={url}
        alt="Picture of the day"
        width="800"
        height="550"
        style={{maxWidth: '95%'}}
      />
      <Typography sx={{marginTop: '1rem'}}>
        <b>Author</b>: {author}
      </Typography>
      <Typography sx={{width: '80%', marginTop: '1rem'}}>{explanation}</Typography>
    </>
  );
}
