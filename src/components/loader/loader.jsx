import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader(props) {
  return (
    <Stack
      sx={{ color: "white", justifyContent: "center" }}
      spacing={1}
      direction="row"
    >
      <CircularProgress size={props.loaderSize} color="inherit" />
    </Stack>
  );
}
