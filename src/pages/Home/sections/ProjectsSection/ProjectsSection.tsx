import { Box, Container, Typography, styled } from "@mui/material";
import Grid from '@mui/material/Grid2';
import AnimationComponent from "../../../../components/StyledButton/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
    }));

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3} justifyContent="center">
                    <Grid size = {{ md: 6}}>
                        <AnimationComponent moveDirection="right">
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    height: '300px', 
                                    backgroundColor: 'grey.300', 
                                    borderRadius: 2 
                                }}
                            >
                                <Typography variant="h4" color="primary.main">
                                    Em breve
                                </Typography>
                            </Box>
                        </AnimationComponent>
                    </Grid>
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection;
