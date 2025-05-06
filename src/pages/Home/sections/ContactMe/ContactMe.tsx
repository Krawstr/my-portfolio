import { useRef, useState } from "react";
import {
    Box,
    Container,
    Typography,
    TextField,
    styled,
    Alert,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import SendIcon from "@mui/icons-material/Send";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import emailjs from "@emailjs/browser";
import contactMeImage from "../../../../assets/images/contactMeImage.png";

const StyledContact = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: theme.spacing(4),
    overflow: "hidden",
    boxShadow: "0 4px 8px rgb(51, 91, 177)",
}));

const FormContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(6),
    zIndex: 2,
    width: "100%",
    maxWidth: "600px",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4),
    },
    boxShadow: " 4px 8px rgba(43, 116, 59, 0.4)"
}));

const StyledImg = styled("img")(() => ({
   position: "absolute",
   right: "10%",
   width: "37%",
   bottom: "15%",
}));

const ContactMe = () => {
    const form = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState<boolean | null>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm(
                "service_2i2wvp4",
                "template_wlqvrhb",
                form.current,
                "5yw2kd7Uw5PKwbuMI"
            )
            .then(() => {
                setSuccess(true);
                form.current?.reset();
            })
            .catch(() => setSuccess(false));
    };

    return (
        <StyledContact>
            <StyledImg src={contactMeImage} alt="contact-me" />
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
                <FormContainer>
                    <Typography
                        variant={isMobile ? "h5" : "h4"}
                        fontWeight="bold"
                        gutterBottom
                        color="#000"
                        textAlign="center"
                    >
                        Entre em Contato
                    </Typography>

                    <form ref={form} onSubmit={sendEmail}>
                        <Grid container spacing={3} mt={1}>
                            <Grid >  
                                <TextField
                                    fullWidth
                                    name="user_name"
                                    label="Nome"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    fullWidth
                                    name="user_email"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid >
                                <TextField
                                    fullWidth
                                    name="message"
                                    label="Mensagem"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid textAlign="center">
                                <StyledButton >
                                    <SendIcon style={{ marginRight: 8 }} />
                                    <Typography>Enviar</Typography>
                                </StyledButton>
                            </Grid>

                            {success === true && (
                                <Grid >
                                    <Alert severity="success">
                                        Mensagem enviada com sucesso!
                                    </Alert>
                                </Grid>
                            )}
                            {success === false && (
                                <Grid>
                                    <Alert severity="error">
                                        Erro ao enviar. Tente novamente.
                                    </Alert>
                                </Grid>
                            )}

                            <Grid  textAlign="center">
                                <Box
                                    display="flex"
                                    justifyContent={isMobile ? "center" : "center"}
                                    gap={2}
                                    mt={2}
                                    flexDirection={isMobile ? "column" : "row"}
                                >
                                    <StyledButton
                                        onClick={() => window.open("https://www.linkedin.com/in/joao-vs-grama/", "_blank")}
                                    >
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                                            alt="LinkedIn"
                                            style={{ width: 24, height: 24, marginRight: 8 }}
                                        />
                                        <Typography>LinkedIn</Typography>
                                    </StyledButton>

                                    <StyledButton
                                        onClick={() => window.open("https://github.com/krawstr", "_blank")}
                                    >
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                            alt="GitHub"
                                            style={{ width: 24, height: 24, marginRight: 8 }}
                                        />
                                        <Typography>GitHub</Typography>
                                    </StyledButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </FormContainer>
            </Container>
        </StyledContact>
    );
};

export default ContactMe;