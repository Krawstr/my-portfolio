import { useRef, useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    styled,
    Alert,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import emailjs from "@emailjs/browser";

const StyledContact = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: theme.spacing(4),
    overflow: "hidden",
}));

const FormContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6),
    zIndex: 2,
    width: "100%",
    maxWidth: "600px",
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(4),
    },
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
                        color="primary.main"
                        textAlign="center"
                    >
                        Entre em Contato
                    </Typography>

                    <form ref={form} onSubmit={sendEmail}>
                        <Grid container spacing={3} mt={1}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="user_name"
                                    label="Nome"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="user_email"
                                    label="Email"
                                    type="email"
                                    variant="outlined"
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                            <Grid item xs={12} textAlign="center">
                                <StyledButton type="submit">
                                    <SendIcon style={{ marginRight: 8 }} />
                                    <Typography>Enviar</Typography>
                                </StyledButton>
                            </Grid>

                            {success === true && (
                                <Grid item xs={12}>
                                    <Alert severity="success">
                                        Mensagem enviada com sucesso!
                                    </Alert>
                                </Grid>
                            )}
                            {success === false && (
                                <Grid item xs={12}>
                                    <Alert severity="error">
                                        Erro ao enviar. Tente novamente.
                                    </Alert>
                                </Grid>
                            )}

                            {/* Redes Sociais */}
                            <Grid item xs={12} textAlign="center">
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
