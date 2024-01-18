import { getSpecificPicture } from "@/services/requests";
import { PictureOfTheDay, Main } from "@/components";
import { OtherDaysFotos } from "@/sections";

export default async function PhotoPage({
  params,
}: {
  params: { date: string };
}) {
  const picture = await getSpecificPicture(params.date);
  console.log(picture);
  return (
    <Main>
      <PictureOfTheDay
        date={picture.date}
        url={picture.url}
        author={picture.copyright}
        explanation={picture.explanation}
      />
      <OtherDaysFotos defaultDate={picture.date} />
    </Main>
  );
}
