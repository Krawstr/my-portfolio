import { Box, Container, Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { FaJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
// import { SiPandas} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const skills = [
  { name: "JavaScript", icon: <FaJs /> },
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "C#", icon: <TbBrandCSharp /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "SQL", icon: <FaDatabase /> },
  // { name: "Pandas", icon: <SiPandas /> },

];

const StyledSkills = styled("div")(() => ({
  position: "absolute",
  left: "40%",
  bottom: "45%",
}))

const SkillBox = styled(Box)(() => ({
  backgroundColor: "transparent",
  width: "110px",
  padding: "20px ",
  margin: "5px",
  border: "1px solid #fff",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(67, 199, 96, 0.48)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },

}));

const HardSkills = () => {
  return (

    <StyledSkills>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          margin={4}
        >
          Hard Skills
        </Typography>

        <Grid
          container
          justifyContent="center"
          sx={{ flexWrap: "wrap", gap: 2 }}
        >
          {skills.map((skill, index) => (
            <Grid
              key={index}
              component={motion.div}
              sx={{
                width: "19%", 
              }}
            >
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
    </StyledSkills>
  );
};

export default HardSkills;
