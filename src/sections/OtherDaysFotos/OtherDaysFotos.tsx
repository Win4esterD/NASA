"use client";
import { OtherDayCard, LoadingIndicator } from "@/components";
import { getOtherDaysPicture } from "@/services/requests";
import { useState } from "react";
import {
  Typography,
  Box,
  OutlinedInput,
  Button,
  InputLabel,
} from "@mui/material";
import { styles } from "./styles";
import Grid from "@mui/material/Unstable_Grid2";

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
    <Box component="section" sx={styles.section}>
      <Typography variant="h2" sx={styles.h2}>
        Show other days pictures
      </Typography>
      <Box sx={styles.labelsContainer}>
        <Box sx={styles.labelAndInput}>
          <InputLabel htmlFor="start">Start date:</InputLabel>
          <OutlinedInput
            type="date"
            id="start"
            name="start-date"
            defaultValue={defaultDate}
            onChange={(e) => setStartDate(e.currentTarget.value)}
          />
        </Box>
        <Box sx={styles.labelAndInput}>
          <InputLabel htmlFor="end">End date:</InputLabel>
          <OutlinedInput
            type="date"
            id="end"
            name="end date"
            defaultValue={defaultDate}
            onChange={(e) => setEndDate(e.currentTarget.value)}
          />
        </Box>
        <Button
          variant="contained"
          sx={styles.button}
          onClick={async () => {
            setIsPending(true);
            setFetchedData(await getOtherDaysPicture(startDate, endDate));
            setIsPending(false);
          }}
        >
          Show
        </Button>
      </Box>
      <Grid sx={styles.otherDaysFotos}>
        {!isPending ? (
          fetchedData
            ?.reverse()
            .map((item: fetchedDataItem) => (
              <OtherDayCard link={item.url} date={item.date} key={item.url} />
            ))
        ) : (
          <LoadingIndicator />
        )}
      </Grid>
    </Box>
  );
}
