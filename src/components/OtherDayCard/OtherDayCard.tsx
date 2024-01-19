import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

type OtherDayCardProps = {
  link: string,
  date: string,
};

export function OtherDayCard({ link, date }: OtherDayCardProps) {
 return (
   <Box sx={{ marginTop: "1.5rem" }}>
     <Image src={link} width="200" height="150" alt={date} />
     <Typography>
       Date: <Link href={date} target="_blank">{date}</Link>
     </Typography>
   </Box>
 );
}