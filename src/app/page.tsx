import Box from "@mui/material/Box";
import { NavBar } from "./components/nav-bar/nav-bar";
import { Hero } from "./components/hero/hero";
import { AboutMe } from "./components/about-me/about-me";

export default function Home() {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          padding: "20px 20px 20px 20px",
        }}
      >
        <Hero />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <AboutMe />
        </Box>
      </Box>
    </Box>
  );
}
