import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { SessionProvider } from 'next-auth/react'

export default function App(props: AppProps) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          fontFamily: 'Outfit, sans-serif',
          breakpoints: {
            xs: 375,
            sm: 425,
            md: 768,
            lg: 1024,
            xl: 1440,
          },
          transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        }}
      >
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MantineProvider>
    </>
  )
}
