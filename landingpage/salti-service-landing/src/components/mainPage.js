import React from 'react';
//mui
import { Container, Grid, Box, Button, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
//이미지
import salti1 from '../../public/asset/image/salti1.png';
import google from '../../public/asset/image/google.png';
import apple from '../../public/asset/image/apple.png';

export default function MainPage() {
  return (
    <Grid
      height="100%"
      style={{
        background: 'linear-gradient(180deg, #7DC3C6 6.77%, #EE5D50 100%)',
      }}
    >
      <section>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid mb={20} container justifyContent="center" item md={6}>
            <Stack spacing={2}>
              <Typography
                fontWeight={700}
                variant="h2"
                component="div"
                gutterBottom
                color="white"
              >
                나를 알아가는
                <br /> 소중한 시간
              </Typography>
              <Typography
                fontWeight={400}
                variant="h4"
                component="div"
                gutterBottom
                color="white"
              >
                데이터 커머스앱, 솔티
              </Typography>
              <Grid justifyContent="flex-start">
                <Button style={{ width: 200, padding: 0 }}>
                  <Image src={google} alt="구글" />
                </Button>
                <Button style={{ width: 200, padding: 0 }}>
                  <Image src={apple} alt="애플" />
                </Button>
              </Grid>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Image style={{ bottom: '0' }} src={salti1} alt="솔티" />
            </Box>
          </Grid>
        </Grid>
      </section>
    </Grid>
  );
}
