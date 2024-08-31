import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "../components/Header";
import SideNavbar from "../components/SideNavbar";
import { styled } from "@mui/system";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <Box display='flex'>
      <CssBaseline />
      <Header />
      <SideNavbar />

      <Container component='main'>
        <Outlet />
      </Container>
    </Box>
  );
}

const Container = styled(Box)(({ theme }) =>
  theme.unstable_sx({
    flexGrow: 1,
    p: 3,
    mt: 10,
    width: { sm: `calc(100% - 240px)` },
  })
);
