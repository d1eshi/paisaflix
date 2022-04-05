import { Box, Container, Grid } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { HeroMovie, ListMovies } from '../components/movies'

import {
  MovieResponse,
  ListMoviesResponse,
  Movie,
  Trailer,
  TrailersMovieResponse,
} from '../interfaces'
import { GetStaticProps } from 'next'
import { movieApi } from '../api'

interface Props {
  heroData: Movie
  trailersData: Trailer[]
  listMovies: Movie[]
}

const Home: NextPage<Props> = ({ heroData, trailersData, listMovies }) => {
  return (
    <Layout title="Paisaflix - Home">
      <Box p={0} m={0} mb={32}>
        <HeroMovie heroData={heroData} trailersData={trailersData} />
      </Box>

      <ListMovies listMovies={listMovies} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ctx => {
  const heroResponse = await movieApi.get<MovieResponse>('/hero') // your fetch function here
  const heroData = heroResponse.data.data

  const trailersResponse = await movieApi.get<TrailersMovieResponse>(
    '/trailers'
  ) // your fetch function here
  const trailersData = trailersResponse.data.data

  const listMoviesResponse = await movieApi.get<ListMoviesResponse>('/movies')
  const listMovies = listMoviesResponse.data.data

  return {
    props: {
      heroData,
      trailersData,
      listMovies,
    },
  }
}

export default Home
