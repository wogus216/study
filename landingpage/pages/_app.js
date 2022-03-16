import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import DeskNav from '../src/components/deskNav';
import MobileNav from '../src/components/mobileNav';
import useMediaQuery from '@mui/material/useMediaQuery';
// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // 인자로 주어진 미디어쿼리 조건에 따라 true와 false를 리턴한다.
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>소개페이지</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {isMobile ? <MobileNav /> : <DeskNav />}

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant,
				consistent, and simple baseline to
				build upon. */}

        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
