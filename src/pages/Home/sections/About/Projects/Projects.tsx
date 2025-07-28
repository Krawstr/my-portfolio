import { styled, Box, Typography, Card, CardContent, CardMedia, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import broaImage from "../../../../../assets/images/broa.png";
import portfolioImage from "../../../../../assets/images/portfolio.png";
import ohmproject from "../../../../../assets/images/leisdOhm.png";
import emergia from "../../../../../assets/images/emergia.png";
import langchain from "../../../../../assets/images/langchain.png";    

const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(8, 2),
    overflow: "hidden",
    color: theme.palette.getContrastText(theme.palette.primary.main),
    textAlign: "center",
    position: "relative",
    boxShadow: "0 4px 8px rgb(51, 91, 177)",
}));

const ProjectCard = styled(Card)(({ theme }) => ({
    width: "100%",
    maxWidth: 400,
    height: "300px",
    maxHeight: 300,
    margin: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[6],
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: theme.shadows[12],
    },
    [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(2, 1),
    },
}));

const ProjectImage = styled(CardMedia)({
    height: 180,
    objectFit: "cover",
});

const projects = [
    {
        title: "Pipeline de Vetorização de Documentos com Python e LangChain",
        description: "Desenvolvi um pipeline automatizado para processar arquivos PDF e prepará-los para aplicações de Inteligência Artificial (RAG). A solução realiza a segmentação de texto e a criação de embeddings com a API do Google, armazenando os resultados em um banco de dados vetorial ChromaDB de forma eficiente e escalável.",
        image: "/images/langchain.png",
        link: "https://github.com/Krawstr/pdf-rag-langchain-gemini",
    },
    {
        title: "Emergia",
        description: "Site que explica de forma intuitiva o funcionamento da emergia. Feito com HTML, CSS e JavaScript.",
        image: "/images/emergia.png",
        link: "https://github.com/Krawstr/emergia-unip.git",
    },
    {
        title: "Portfólio",
        description: "Meu portfólio pessoal feito com Typescript, React e MUI.",
        image: "/images/portfolio.png",
        link: "https://github.com/Krawstr/my-portifolio",
    },
    {
        title: "Lei de Ohm",
        description: "Projeto feito com HTML, CSS e JavaScript para NP1 da faculdade Unip. O objetivo do projeto era explica por meio de um site web o que são as leis de Ohm com exemplos práticos",
        image: "/images/leisdOhm.png",
        link: "https://github.com/Krawstr/Leis-de-Ohm",
    },
    {
        title: "Broa",
        description: [
            "Plataforma com foco na sustentabilidade e diminuição do disperdício.",
            "Utilizou HTML, CSS, JavaScript e C#. Feito para o Demoday no Instituto Proa.",
        ],
        image: "/images/broa.png",
        link: "#",
    }
];

const Projects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <StyledProjects>
            <Typography
                variant={isMobile ? "h4" : "h3"}
                gutterBottom
                sx={{ zIndex: 1 }}
            >
                Meus Projetos
            </Typography>

            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="stretch"
                gap={isMobile ? 2 : 4}
                mt={2}
                zIndex={1}
                width="100%"
                maxWidth="1200px"
            >
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", flex: "1 1 300px", maxWidth: 400 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: index * 0.3,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                    >
                        <ProjectCard>
                            <ProjectImage image={project.image} title={project.title} />
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {project.title}
                                </Typography>
                                {Array.isArray(project.description) ? (
                                    project.description.map((line, i) => (
                                        <Typography key={i} variant="body2" color="text.secondary" paragraph>
                                            {line}
                                        </Typography>
                                    ))
                                ) : (
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                )}
                            </CardContent>
                        </ProjectCard>
                    </motion.a>
                ))}
            </Box>
        </StyledProjects>
    );
};

export default Projects;
