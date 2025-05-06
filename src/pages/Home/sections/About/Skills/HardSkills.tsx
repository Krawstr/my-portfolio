import { Box, Container, Grid, Typography, styled, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import { FaJs, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaDatabase } from "react-icons/fa";
// import { SiPandas } from "react-icons/si";
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

const StyledSkills = styled("div")(({ theme }) => ({
  position: "relative",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  width: "100%",
}));

const SkillBox = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  width: "100%",
  padding: theme.spacing(2),
  border: "1px solid #fff",
  borderRadius: "5px",
  boxShadow: "0 4px 8px rgba(67, 199, 96, 0.48)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const HardSkills = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledSkills>
      <Container maxWidth="md">
        <Typography
          variant={isSmall ? "h5" : "h4"}
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          margin={4}
          color="#fff"
        >
          Hard Skills
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid
              key={index}
              size={{ xs: 6, sm: 4, md: 3, lg: 2}}
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SkillBox>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Box fontSize={isSmall ? "1.8rem" : "2.2rem"} mb={1}>
                    {skill.icon}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: isSmall ? "0.85rem" : "1rem", color: "#fff" }}
                  >
                    {skill.name}
                  </Typography>
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
