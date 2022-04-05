import {
  Badge,
  Box,
  Container,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from '@chakra-ui/react'
import { FC } from 'react'
import { Movie } from '../../interfaces'
import { TimeIcon, ViewIcon } from '@chakra-ui/icons'
import { ListMovieItem } from './ListMovieItem'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  listMovies: Movie[]
}

export const ListMovies: FC<Props> = ({ listMovies }) => {
  return (
    <Container maxW="container.full">
      <Box display="flex" alignItems="center">
        <Text fontSize="3xl" fontWeight="700" flex="1">
          Featured
        </Text>
        <Text fontSize="lg" color="yellow">
          View More
        </Text>
      </Box>

      <Grid templateColumns="repeat(3,  1fr)" templateRows="masonry" gap={3}>
        {listMovies.map(movie => (
          <ListMovieItem movie={movie} key={movie._id} />
        ))}
      </Grid>
    </Container>
  )
}
