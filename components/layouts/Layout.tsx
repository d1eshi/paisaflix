import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import { FC } from 'react'
import { Footer } from '../ui'
import { Navbar } from '../ui/Navbar'

interface Props {
  title?: string
}

export const Layout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || 'Painflix'}</title>
        <meta name="author" content="Diego Silva (d1eshi)" />
        <meta name="description" content={`Information about movie ${title}`} />
        <meta name="keywords" content={`${title}, movie, movies, painflix`} />

        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`This the page about ${title}`}
        />
      </Head>

      <Container
        maxW="container.full"
        color="#eee"
        p="1em 3em"
        backgroundColor="#000"
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </Container>
    </>
  )
}
