import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import logo from '../../public/asset/logo/logo.png';
import Image from 'next/image';
import { Grid } from '@mui/material';
import IconMenu from './iconMenu';

function appBarLabel(label) {
  return (
    <Toolbar>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Image alt="로고" src={logo} />
        </Grid>
        <Grid item xs={2}>
          <IconButton aria-label="menu" sx={{ mt: 1 }}>
            <IconMenu />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

const whiteTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function MobileNav() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#7DC3C6' }} color="primary">
        {appBarLabel('default')}
      </AppBar>
    </Stack>
  );
}
