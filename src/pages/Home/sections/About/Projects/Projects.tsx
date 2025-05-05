import { styled, Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import broaImage from "../../../../../assets/images/broa.png";
import portfolioImage from "../../../../../assets/images/portfolio.png";

// Container principal
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

// Card estilizado
const ProjectCard = styled(Card)(({ theme }) => ({
    width: 400,
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
}));

// Imagem
const ProjectImage = styled(CardMedia)({
    height: 180,
});

// Dados dos projetos
const projects = [
    {
        title: "Broa",
        description: "Plataforma com foco na sustentabilidade e diminuição do disperdicio. Foi utilizado HTMl, CSS, JavaScript e C#.",
        image: broaImage,
        link: "https://InfelizmenteBroaNãoestánoAr"
    },
    {
        title: "Portfólio",
        description: "Meu portfólio pessoal com Typescriprt, React e MUI.",
        image: portfolioImage,
        link: "https://github.com/Krawstr/my-portifolio",
    },
    
];

const Projects = () => {
    return (
        <StyledProjects>
            <Typography variant="h3" gutterBottom sx={{ zIndex: 1 }}>
                Meus Projetos
            </Typography>
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                gap={4}
                mt={2}
                zIndex={1}
            >
                {projects.map((project, index) => (
                    <motion.a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
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
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                        </ProjectCard>
                    </motion.a>
                ))}
            </Box>
        </StyledProjects>
    );
};

export default Projects;
