import { TimeIcon, ViewIcon } from '@chakra-ui/icons'
import {
  GridItem,
  Box,
  Image,
  Text,
  Container,
  Badge,
  Link,
  LinkBox,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Movie } from '../../interfaces'

interface Props {
  movie: Movie
}
export const ListMovieItem: FC<Props> = ({ movie }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/movie/${movie._id}`)
  }

  return (
    <GridItem
      key={movie._id}
      position="relative"
      gridColumn={movie.name.includes('Star') ? '1 / 3' : undefined}
    >
      <Link onClick={onClick}>
        <Image src={movie.coverImage} alt={movie.name} h="100%" />
        <Box
          display="flex"
          flexDir="column"
          fontSize="2xl"
          w="100%"
          h="100%"
          p="1em 1em 2em "
          bottom={0}
          position="absolute"
          background="linear-gradient(to  top, #000000 6%, rgba(24, 24, 24, 0) 70%)"
        >
          <Box flex={2}>
            <Text
              backgroundColor="#FED530"
              color="black"
              fontSize="md"
              borderRadius={12}
              p="3px 10px"
              fontWeight="thin"
              maxW="78px"
              textAlign="center"
            >
              {movie.genre}
            </Text>
          </Box>
          <Container m={0} p={0}>
            <Box
              display="flex"
              color="whiteAlpha.700"
              alignItems="center"
              justifyContent="space-between"
              maxW="214px"
              mb={6}
            >
              <TimeIcon w={6} h={4} />
              <Text fontSize="sm">1hr 24mins</Text>
              <ViewIcon w={6} h={4} ml={4} />
              <Text fontSize="md">21.3 views</Text>
            </Box>
            <Text fontSize="4xl" fontWeight="bold">
              {movie.name}
            </Text>
          </Container>
        </Box>
      </Link>
    </GridItem>
  )
}
