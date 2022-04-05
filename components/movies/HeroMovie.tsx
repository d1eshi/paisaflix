import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
} from '@chakra-ui/react'

import { FC } from 'react'
import { Movie, Trailer } from '../../interfaces'
import { MovieTrailerItem } from './MovieTrailerItem'
import { MovieInformation } from '../layouts/MovieInformation'

interface Props {
  heroData: Movie
  trailersData: Trailer[]
}

export const HeroMovie: FC<Props> = ({ heroData, trailersData }) => {
  return (
    <Container maxW="container.full">
      <MovieInformation movieData={heroData} />

      <Box gridColumnStart="1" gridColumnEnd="3" zIndex="1">
        <Text fontSize="3xl" fontWeight="700">
          Trailers
        </Text>
        <Box display="flex" gap="2" minW="100%" w="100%" mt={6}>
          {trailersData.map((trailer, i) => (
            <MovieTrailerItem
              key={trailer._id}
              trailerData={trailer}
              number={i}
            />
          ))}
        </Box>
      </Box>
    </Container>
  )
}
