import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { FaJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
// import { SiPandas, SiMui, SiMysql } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "C#", icon: <TbBrandCSharp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "SQL", icon: <FaDatabase /> },
//   { name: "Pandas", icon: <SiPandas /> },

];

const StyledHardSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
  padding: theme.spacing(4),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  color: theme.palette.primary.contrastText,
  overflow: "hidden",
  boxShadow: "0 4px 8px rgba(51, 91, 177, 0.5)",
}));

const SkillBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.getContrastText(theme.palette.secondary.main),
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  fontSize: "1rem",
  margin: theme.spacing(1),
  textAlign: "center",
  boxShadow: `0 2px 6px rgba(0,0,0,0.2)`,
  transition: "transform 0.3s ease",
}));

const HardSkills = () => {
  return (
    <StyledHardSkills>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Hard Skills
        </Typography>

        <Grid container justifyContent="center">
          {skills.map((skill) => (
            <Grid  component={motion.div}>
              <SkillBox>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    fontSize="2.2rem"
                    mb={1}
                  >
                    {skill.icon}
                  </Box>
                  <Typography variant="body1">{skill.name}</Typography>
                </Box>
              </SkillBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledHardSkills>
  );
};

export default HardSkills;
