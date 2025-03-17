import { Box, Container, Typography, styled } from "@mui/material"
import Grid from '@mui/material/Grid2';
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/images/pdfs/CV_TiagoSantos .pdf"
import { AnimatedBackground } from "../../../../components/StyledButton/AnimatedBackground/AnimatedBackground";
import Typewriter from "../../../../components/StyledButton/Typewriter/Typewriter";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }));

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

    const handleDownload = () => {
        console.log("download")
        // Create a link element
        const link = document.createElement('a');
        link.href = CV
        link.download = 'CV_TiagoSantos.pdf'; // Set the download attribute to specify the file name
        // Append the link to the body
        document.body.appendChild(link);
        // Trigger the click event
        link.click();
        // Remove the link from the body
        document.body.removeChild(link);
    };

    const handleEmail = () => {
      const emailAddress = 'tiagosantos.01016@gmail.com';
      
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
      window.open(mailtoLink, '_blank'); // Isso abre o Gmail em uma nova aba
  };

  const handleWhatsApp = () => {
    const phoneNumber = '5519998059027'; // Coloque seu número de telefone aqui com DDD (exemplo: 55XX999999999)
    const message = 'Olá, gostaria de conversar sobre o seu trabalho!'; // Mensagem inicial
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };


    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size = {{xs: 12, md:5}}>
                            <Box position="relative" pb={3}>
                                <Box width={"150%"} position="absolute" top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size = {{xs: 12, md:7}}>
                            <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">
                                Tiago Santos
                            </Typography>
                            <Typewriter text="Desenvolvedor Full Stack" delay={120} variant="h2" color="primary.contrastText" />
                            <Box mt={3}>
                                <Grid container spacing={3} display="flex" justifyContent="center">
                                    <Grid size = {{xs: 10, md:4}}>
                                        <StyledButton onClick={() => handleDownload()}>
                                            <DownloadIcon />
                                            <Typography>
                                               Baixar CV
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid size = {{xs: 10, md:4}}>
                                        <StyledButton onClick={() => handleEmail()}>
                                            <EmailIcon />
                                            <Typography>
                                                Contato
                                            </Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid size={{ xs: 10, md: 4 }}>
                                    <StyledButton onClick={() => handleWhatsApp()}>
                                        <WhatsAppIcon />
                                        <Typography>
                                            WhatsApp
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default HeroSection
