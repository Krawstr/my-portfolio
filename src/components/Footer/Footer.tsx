import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  color: '#fff',
  padding: theme.spacing(4),
  textAlign: 'center',
  marginTop: 'auto',
  fontSize: '0.875rem',
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Typography variant="body2">
        © {new Date().getFullYear()} João Grama. Todos os direitos reservados.
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
