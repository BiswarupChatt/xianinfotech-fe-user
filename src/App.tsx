import Route from "./routes/AppRoute";
import AppDrawer from "./components/drawer/AppDrawer";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "98vw",
          overflowY: "hidden",
        }}
      >
        <AppDrawer />
        <Box sx={{ flex: 1, overflow: "auto", p: 3 }}>
          <Route />
        </Box>
      </Box>
    </>
  );
}

export default App;
