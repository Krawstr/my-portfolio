import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import HardSkills from "../About/Skills/HardSkills";

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

const StyledText = styled("div")(() => ({
    maxWidth: "500px",
    position: "relative",
    left: "-25%",
    textAlign: "left",
}));

const Highlight = styled("span")(({ theme }) => ({
    color: theme.palette.secondary.main,
    fontWeight: 600,
}));

const About = () => {
    return (
        <StyledAbout>
            <HardSkills />
            <StyledText>
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
                    Atualmente, curso o primeiro semestre de <Highlight>Ciência da Computação</Highlight> na UNIP e estou
                    aprofundando meus conhecimentos em <Highlight>dados</Highlight>, <Highlight>desenvolvimento web</Highlight> e{" "}
                    <Highlight>inteligência artificial</Highlight>.
                    <br />
                    Tenho experiência prática com linguagens como <Highlight>JavaScript</Highlight>, <Highlight>HTML</Highlight>,{" "}
                    <Highlight>CSS</Highlight> e <Highlight>C#</Highlight>, e estou sempre evoluindo tanto no aspecto técnico
                    quanto na resolução criativa de problemas.
                    <br />
                    Conquistei uma <Highlight>medalha de prata</Highlight> em uma Olimpíada de Matemática durante o ensino médio —
                    um reflexo da minha afinidade com lógica e raciocínio estruturado, habilidades que aplico diariamente na
                    tecnologia.
                    <br />
                    Atualmente, foco em projetos que unem <Highlight>funcionalidade</Highlight>, <Highlight>clareza</Highlight> e{" "}
                    <Highlight>boas práticas de desenvolvimento</Highlight>.
                </Typography>
            </StyledText>
        </StyledAbout>
    );
};

export default About;
