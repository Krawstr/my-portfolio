import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Profile from "../../../../assets/images/profile.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";

const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: theme.spacing(4),
    overflow: "hidden",
    boxShadow: "0 -8px 16px -4px rgba(51, 91, 177, 0.6)",

}));

const StyledImg = styled("img")(({ theme }) => ({
    width: "220px",
    height: "40%",
    borderRadius: "50%",
    objectFit: "cover",
    border: `2px solid ${theme.palette.primary.contrastText}`,
    zIndex: 2,
}));

const Hero = () => {
    return (
        <StyledHero>

            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                zIndex={0}
                sx={{ opacity: 0.2 }}
            >
                <AnimatedBackground />
            </Box>

            <Container maxWidth="lg" sx={{ zIndex: 1 }}>
                <Grid
                    container
                    spacing={4}
                    alignItems="center"
                    justifyContent="center"
                >

                    <Grid textAlign="center">
                        <StyledImg src={Profile} alt="Profile" />
                    </Grid>


                    <Grid textAlign={{ xs: "center", md: "left" }}>
                        <Typography
                            color="primary.contrastText"
                            variant="h2"
                            fontWeight="bold"
                            gutterBottom
                        >
                            João Grama
                        </Typography>
                        <Typography
                            color="primary.contrastText"
                            variant="h5"
                            gutterBottom
                        >
                            Sou um estudante de Análise de Dados!
                        </Typography>

                        <Grid
                            container
                            spacing={2}
                            mt={2}
                            justifyContent={{ xs: "center", md: "flex-start" }}
                        >
                            <Grid >
                                <StyledButton onClick={() => window.open('https://drive.google.com/file/d/1IEO1NSl_hiInCL7yaJJPAMNG1Z2U8NpH/view', '_blank')}>
                                    <DownloadIcon style={{ marginRight: 8 }} />
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid >
                                <StyledButton onClick={() => window.open('mailto:joaovictorseverianogram@gmail.com', '_blank')} >
                                    <MailOutlineIcon style={{ marginRight: 8 }} />
                                    <Typography>Me contate</Typography>
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
