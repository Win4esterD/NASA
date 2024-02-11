export const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.5rem",
  },
  h2: {
    fontSize: "2rem",
    padding: "0 0.5rem",
    marginTop: "1.5rem",
    "@media (max-width: 390px)": {
      fontSize: "1.5rem",
    },
  },
  labelsContainer: {
    display: "flex",
    gap: "2rem",
    marginTop: "1rem",
    padding: "0 0.5rem 1rem 0.5rem",
    flexWrap: "wrap",
  },
  labelAndInput: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    height: "3.3rem",
    marginTop: "1.2rem",
  },
  otherDaysFotos: {
    width: "80%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
};
