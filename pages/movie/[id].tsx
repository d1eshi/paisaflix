import { GetStaticPaths } from 'next'
import { NextPage } from 'next'
import { MovieInformation } from '../../components/layouts/MovieInformation'
import {
  ListMoviesResponse,
  Movie,
  MovieResponse,
  Trailer,
  TrailersMovieResponse,
} from '../../interfaces'
import { GetStaticProps } from 'next'
import { movieApi } from '../../api'
import { Layout } from '../../components/layouts'
import { HeroMovie, MovieTrailerItem } from '../../components/movies'
import { Box, Container, Text } from '@chakra-ui/react'

interface Props {
  movieData: Movie
  trailerData: Trailer
}

const MoviePage: NextPage<Props> = ({ movieData, trailerData }) => {
  return (
    <>
      <Layout>
        <Container maxW="container.full">
          <MovieInformation movieData={movieData} />
          <Box gridColumnStart="1" gridColumnEnd="3" zIndex="1">
            <Text fontSize="3xl" fontWeight="700">
              Trailer
            </Text>
            <Box display="flex" gap="2" minW="100%" w="100%" mt={6}>
              <MovieTrailerItem trailerData={trailerData} />
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ctx => {
  const moviesResponse = await movieApi.get<ListMoviesResponse>('movies') // your fetch function here
  const moviesId = moviesResponse.data.data.map(movie => movie._id)

  return {
    paths: moviesId.map(id => ({
      params: { id },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }

  const movieResponse = await movieApi.get<MovieResponse>(`/movies/${id}`)
  const movieData = movieResponse.data.data

  const trailersResponse = await movieApi.get<TrailersMovieResponse>(
    `/trailers`
  )
  const trailerData = trailersResponse.data.data.find(
    trailer => trailer._id === id
  )

  return {
    props: {
      movieData,
      trailerData,
    },
  }
}

export default MoviePage
