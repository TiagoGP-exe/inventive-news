import Head from 'next/head'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import { SessionProvider } from 'next-auth/react'
import { useLocalStorage, useHotkeys } from '@mantine/hooks'
import { QueryClient } from 'react-query'
import { QueryClientProvider } from 'react-query'
import { AppProps } from 'next/app'
import {} from '@mantine/core'
import { Container } from '../components/Container'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useHotkeys([['mod+J', () => toggleColorScheme()]])

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      },
    },
  })

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            fontFamily: 'Outfit, sans-serif',
            breakpoints: {
              xs: 375,
              sm: 425,
              md: 768,
              lg: 1120,
              xl: 1280,
            },
            transitionTimingFunction: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
          }}
        >
          <Container>
            <QueryClientProvider client={queryClient}>
              {/* <SessionProvider session={session}> */}
              <Component {...pageProps} />
              {/* </SessionProvider> */}
            </QueryClientProvider>
          </Container>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}
