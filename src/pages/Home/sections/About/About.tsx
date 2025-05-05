import { styled } from "@mui/material";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import RocketIcon from "@mui/icons-material/RocketLaunch"; // ou outro ícone que combine

const StyledAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(8),
    color: "#f1f1f1",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgb(51, 91, 177)",
}));

const FloatingBox = styled("div")({
    position: "absolute",
    width: 80,
    height: 80,
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    opacity: 0.1,
    animation: "float 10s ease-in-out infinite",
});

const Highlight = styled("span")(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 600,
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    width: 64,
    height: 64,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 20px rgba(255, 165, 0, 0.4)",
    marginBottom: theme.spacing(3),
}));

const About = () => {
    return (
        <StyledAbout>
            <FloatingBox style={{ top: 100, left: 60 }} />
            <FloatingBox style={{ top: 200, right: 90 }} />
            <FloatingBox style={{ bottom: 100, left: 150 }} />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    backgroundColor: "#1a1a1a",
                    padding: "3rem",
                    borderRadius: "16px",
                    maxWidth: "1000px",
                    boxShadow: "0 4px 20px rgba(255,255,255,0.05)",
                }}
            >
                <IconWrapper>
                    <RocketIcon sx={{ color: "#000" }} />
                </IconWrapper>

                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "#fff" }}>
                    Sobre Mim
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ maxWidth: "900px", fontSize: "1.25rem", lineHeight: "1.8", color: "#ccc" }}
                >
                    Olá! Me chamo <Highlight>João Victor</Highlight>, sou desenvolvedor full stack com formação pelo{" "}
                    <Highlight>Instituto PROA</Highlight> e entusiasta em <Highlight>Python</Highlight> e{" "}
                    <Highlight>Análise de Dados</Highlight>.
                    <br />
                    <br />
                    Atualmente, curso o primeiro semestre de <Highlight>Ciência da Computação</Highlight> na UNIP e estou
                    aprofundando meus conhecimentos em <Highlight>dados</Highlight>, <Highlight>desenvolvimento web</Highlight> e{" "}
                    <Highlight>inteligência artificial</Highlight>.
                    <br />
                    <br />
                    Tenho experiência prática com linguagens como <Highlight>JavaScript</Highlight>, <Highlight>HTML</Highlight>,{" "}
                    <Highlight>CSS</Highlight> e <Highlight>C#</Highlight>, e estou sempre evoluindo tanto no aspecto técnico
                    quanto na resolução criativa de problemas.
                    <br />
                    <br />
                    Conquistei uma <Highlight>medalha de prata</Highlight> em uma Olimpíada de Matemática durante o ensino médio —
                    um reflexo da minha afinidade com lógica e raciocínio estruturado, habilidades que aplico diariamente na
                    tecnologia.
                    <br />
                    <br />
                    Atualmente, foco em projetos que unem <Highlight>funcionalidade</Highlight>, <Highlight>clareza</Highlight> e{" "}
                    <Highlight>boas práticas de desenvolvimento</Highlight>.
                </Typography>
            </motion.div>
        </StyledAbout>
    );
};

export default About;
