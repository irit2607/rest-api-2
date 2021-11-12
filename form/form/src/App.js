import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

// export default function SignIn() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
          Hire a ninja in your area!
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
          {/* onSubmit={} */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Longitude"
              name="lng"
              
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="lat"
              label="Latitude"
              type=""
              id="lat"
              
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Hire Ninjasss
            </Button>
           
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}



export default App;

