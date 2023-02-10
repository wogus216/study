import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import logo from '../../public/asset/logo/logo.png';
import { color } from '@mui/system';

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
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <Grid style={{ background: '#7DC3C6' }} container spacing={2}>
      <Grid textAlign="center" item md={8}>
        <Image alt="로고" src={logo} />
      </Grid>
      <Grid item md={4}>
        <Box sx={{ width: '100%' }}>
          <Tabs>
            <LinkTab
              style={{ color: 'white' }}
              label="서비스 소개"
              href="/drafts"
            />
            <LinkTab style={{ color: 'white' }} label="FAQ" href="/trash" />
            <LinkTab
              style={{ color: 'white' }}
              label="기업 제휴"
              href="/spam"
            />
          </Tabs>
        </Box>
      </Grid>
    </Grid>
  );
}
