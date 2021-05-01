import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import createMeta from '../lib/meta'
import { useRouter } from 'next/router'

export default function NextApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        {/* Individual pages *should* override these tags, but we can keep it here as a fallback just in case */}
        <title>ttv-nes</title>
        { createMeta() }
      </Head>
      <Component {...pageProps} />
    </>
  )
}