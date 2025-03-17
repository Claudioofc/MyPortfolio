import {Box, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up('xs')]: {
        display: "block",
        padding: "20px",
        paddingTop: "100px",
        paddingBottom: "40px",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        height: "100vh"
    },
}));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "50%",
    position: "relative"
}));

const handleDownload = () => {
  console.log("download")
  // Create a link element
  const link = document.createElement('a');
  link.href = CV
  link.download = 'example.pdf'; // Set the download attribute to specify the file name
  // Append the link to the body
  document.body.appendChild(link);
  // Trigger the click event
  link.click();
  // Remove the link from the body
  document.body.removeChild(link);
};

const handleEmail = () => {
  const emailAddress = 'example@example.com';
  const subject = 'Subject';
  const body = 'Hello! I saw your portfolio...';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
}


  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box position= "relative">
              <Box position= "absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground/>
              </Box>
              <Box position="relative" textAlign="center">
              <StyledImg src={Avatar} />
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}> Tiago Santos</Typography>
            <Typography color="primary.contrastText" variant="h2" textAlign="center"> I'm a Software Engineer</Typography>
            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
              <Grid size={{ xs: 12, md:4}} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("download")}>
                <DownloadIcon />
                <Typography>
                Download CV
                </Typography>
                </StyledButton>
              </Grid>
              <Grid size={{ xs: 12, md:4}} display="flex" justifyContent="center">
                <StyledButton onClick={() => console.log("download")}>
                  <MailOutlineIcon />
                  <Typography>
                  Contact me
                  </Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
