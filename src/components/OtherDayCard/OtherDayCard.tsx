import Image from "next/image";
import Link from "next/link";

type OtherDayCardProps = {
  link: string,
  date: string,
};

export function OtherDayCard({ link, date }: OtherDayCardProps) {
 return (
   <div style={{marginTop: '1.5rem'}}>
     <Image src={link} width="200" height="150" alt={date} />
     <p>
       Date: <Link href={date}>{date}</Link>
     </p>
   </div>
 );
}