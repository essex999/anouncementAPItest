import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./pagination.css";
export default function CustomPagination(props) {
  return (
    <Stack
      style={{ display: "flex", alignItems: "center", paddingTop: "20px" }}
      spacing={2}
    >
      <Pagination
        onChange={(e, page) => {
          props.pageSet(page);
          props.scroll();
        }}
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
