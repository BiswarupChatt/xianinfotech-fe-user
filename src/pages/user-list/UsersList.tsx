import { Box, Typography } from "@mui/material";
import UserListTable from "./components/UserListTable";

export default function UsersList() {
  return (
    <Box>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="body1">01 - 25 March, 2020</Typography>
      <UserListTable />
    </Box>
  );
}
