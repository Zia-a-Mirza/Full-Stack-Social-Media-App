import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import From from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center">
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
          sx={{
            color: "transparent",
            backgroundImage: "linear-gradient(45deg, #FF4E00, #f0cb81)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}>
          Ember
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "90%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}>
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Ember! Please log in to continue.
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
