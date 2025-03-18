import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/StyledButton/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
    }));

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={{ xs: 3, sm: 5 }} pb={{ xs: 2, sm: 3 }}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">
                        Projetos
                    </Typography>
                </Box>
                <Grid container spacing={{ xs: 3, sm: 5 }} pb={3} justifyContent="center">
                    <Grid item xs={12} sm={6} md={4}>
                        <AnimationComponent moveDirection="right">
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center', 
                                    height: { xs: '200px', sm: '300px' }, 
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
    );
}

export default ProjectsSection;
