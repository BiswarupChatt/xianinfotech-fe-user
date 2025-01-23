import { Box, Typography } from "@mui/material";
import BusinessPromoterTable from "./components/BusinessPromoterTable";

export default function BusinessPromoters() {
  return (
    <Box>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="body1">01 - 25 March, 2020</Typography>
      <BusinessPromoterTable />
    </Box>
  );
}
