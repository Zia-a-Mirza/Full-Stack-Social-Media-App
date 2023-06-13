import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 800px)");
  const logoLeft = theme.palette.gradient.logoLeft;
  const logoRight = theme.palette.gradient.logoRight;

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center">
        {/* Site Logo */}
        <img
          src="/assets/logo.png"
          alt="Logo"
          style={{ width: "30px", marginRight: "3px" }}
        />
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color="primary"
          sx={{
            color: "transparent",
            background: `linear-gradient(45deg, ${logoLeft}, ${logoRight})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            display: "inline-block",
          }}>
          Ember
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "90%"}
        p="2rem"
        m="3rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}>
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to Ember! Please log in to continue.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
