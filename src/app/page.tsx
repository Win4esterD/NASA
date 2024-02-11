import { getPictureOfTheDay } from "@/services/requests";
import { OtherDaysFotos } from "@/sections";
import {PictureOfTheDay, Main} from '@/components';

export default async function Home() {
  const pictureOfTheDay = await getPictureOfTheDay();
  return (
    <Main>
      <PictureOfTheDay
        date={pictureOfTheDay?.date}
        url={pictureOfTheDay?.url}
        author={pictureOfTheDay?.copyright}
        explanation={pictureOfTheDay?.explanation}
      />
      <OtherDaysFotos defaultDate={pictureOfTheDay?.date} />
    </Main>
  );
}
