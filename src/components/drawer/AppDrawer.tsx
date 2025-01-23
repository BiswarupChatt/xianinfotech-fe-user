import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AppDrawer() {
  const menuItems = [
    { label: "User List", path: "/user-list" },
    { label: "Transaction List", path: "/trnsaction-list" },
    { label: "Video Management", path: "/video-management" },
    { label: "Top Receivers List", path: "/top-receivers-list" },
  ];

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: 240,
        height: "auto",
        minHeight: "100vh",
        backgroundColor: "#002855",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" sx={{ margin: 4 }} textAlign="center">
        User Panel
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              padding: "10px 16px",
              cursor: "pointer",
              backgroundColor:
                location.pathname === item.path ? "#fff" : "inherit",
              color: location.pathname === item.path ? "#000" : "#fff",
              "&:hover": {
                backgroundColor:
                  location.pathname === item.path ? "#fff" : "#004080",
              },
            }}
            onClick={() => navigate(item.path)}
          >
            <ListItemText
              primary={item.label}
              sx={{ color: location.pathname === item.path ? "#000" : "#fff" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
