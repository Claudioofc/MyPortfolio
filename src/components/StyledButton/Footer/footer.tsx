import { Box, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
    const handleEmail = () => {
        const emailAddress = 'tiagosantos.01016@gmail.com';
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/tiagostz")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/tiagosantos016/")}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton onClick={handleEmail}> {/* Use o método handleEmail */}
                            <EmailIcon />
                        </IconButton>
                    </Box>
                    <Typography textAlign="center">
                        © 2024 Tiago dos Santos - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    );
};

export default Footer;
