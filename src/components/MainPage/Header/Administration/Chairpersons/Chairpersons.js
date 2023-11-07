import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ugColumns, ugRows } from "./Ugdata.js"; // Import named exports from Ugdata
import { pgColumns, pgRows } from "./Pgdata.js"; // Import named exports from Pgdata
import ChairPersonTable from "./ChairPersonTable.js";

export default function Chairpersons() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CHAIRPERSONS OF BOARDS OF STUDIES(U.G.)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChairPersonTable columns={ugColumns} rows={ugRows} />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>CHAIRPERSONS OF BOARDS OF STUDIES(P.G.)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ChairPersonTable columns={pgColumns} rows={pgRows} />
        </AccordionDetails>
      </Accordion>

      {/* Other Accordions or content here */}
    </div>
  );
}
