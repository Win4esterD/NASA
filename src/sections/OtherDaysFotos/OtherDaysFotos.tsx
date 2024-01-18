"use client";
import styles from "./OtherDaysFotos.module.css";
import { Button, OtherDayCard, LoadingIndicator } from "@/components";
import { getOtherDaysPicture } from "@/services/requests";
import { useState } from "react";

type fetchedDataItem = {
  copyright: string;
  url: string;
  date: string;
};

export function OtherDaysFotos({ defaultDate }: { defaultDate: string }) {
  const [startDate, setStartDate] = useState(defaultDate);
  const [endDate, setEndDate] = useState(defaultDate);
  const [fetchedData, setFetchedData] = useState([]);
  const [isPending, setIsPending] = useState(false);

  return (
    <section className={styles.section}>
      <h2>Show other days pictures</h2>
      <div className={styles.labelsContainer}>
        <div className={styles.labelsBlock}>
          <label htmlFor="start">Start date:</label>
          <input
            type="date"
            id="start"
            name="start-date"
            defaultValue={defaultDate}
            onChange={(e) => setStartDate(e.currentTarget.value)}
          />
        </div>
        <div className={styles.labelsBlock}>
          <label htmlFor="end">End date:</label>
          <input
            type="date"
            id="end"
            name="end date"
            defaultValue={defaultDate}
            onChange={(e) => setEndDate(e.currentTarget.value)}
          />
        </div>
        <Button
          clickHandler={async () => {
            setIsPending(true);
            setFetchedData(await getOtherDaysPicture(startDate, endDate));
            setIsPending(false);
          }}
        >
          Show
        </Button>
      </div>
      <div className={styles.otherDays}>
        {!isPending ? (
          fetchedData?.reverse().map((item: fetchedDataItem) => (
            <OtherDayCard link={item.url} date={item.date} key={item.url} />
          ))
        ) : (
          <LoadingIndicator />
        )}
      </div>
    </section>
  );
}
