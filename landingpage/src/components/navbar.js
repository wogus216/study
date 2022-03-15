import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import logo from '../../public/asset/logo/logoWhite.png';
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function DeskNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Grid container>
        <Grid item md={8}>
          <Image alt="로고" src={logo} />
        </Grid>
        <Grid>
          <Box sx={{ width: '100%' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
            >
              <LinkTab label="Page One" href="/drafts" />
              <LinkTab label="Page Two" href="/trash" />
              <LinkTab label="Page Three" href="/spam" />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
