import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Container } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return <div>

      <Container maxWidth="sm">
        <Component {...pageProps} />
      </Container>
    </div>
}
