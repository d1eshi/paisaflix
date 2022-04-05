import { StarIcon } from '@chakra-ui/icons'

import { Box, Button, Grid, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Movie, Trailer } from '../../interfaces'
import { transformDuration } from '../../utils'

interface Props {
  movieData: Movie
}

export const MovieInformation: FC<Props> = ({ movieData }) => {
  return (
    <>
      <Grid
        templateColumns="40% 58%"
        gap={8}
        background="linear-gradient(270degyy, #000000 6%, rgba(24, 24, 24, 0) 100%)"
        mb={8}
      >
        <Box zIndex="1" display="flex" flexDirection="column" gap={8} mt="20">
          <Box pb={6}>
            <Text fontSize="6xl" fontWeight="700">
              {movieData.name}
            </Text>
            <Box display="flex">
              {Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    mr={2}
                    color={i < movieData.rating ? 'yellow' : 'gray.300'}
                  />
                ))}
            </Box>
          </Box>
          <Box mt={3} maxW="404px">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Text>
          </Box>
          <Box>
            <Text>
              <Text as="span" fontWeight="700">
                Genre: {''}
              </Text>
              {movieData.genre}
            </Text>
            <Text>
              <Text as="span" fontWeight="700">
                Duration: {''}
              </Text>
              {transformDuration(movieData.duration)}
            </Text>
            <Text>
              <Text as="span" fontWeight="700">
                Rating: {''}
              </Text>
              {movieData.rating}
            </Text>
          </Box>
          <Box>
            <Button
              colorScheme="yellow"
              color="blackAlpha.800"
              size="lg"
              borderRadius="45px"
              fontSize="xl"
              w={80}
              h={16}
            >
              Watch now
            </Button>
          </Box>
        </Box>

        <Box
          top={0}
          right={0}
          zIndex={0}
          position="absolute"
          w="100%"
          maxW="781px"
        >
          <Box
            w="500px"
            h="100%"
            position="absolute"
            top="0"
            background="linear-gradient(270deg, #000000 6%, rgba(24, 24, 24, 0) 100%)"
            zIndex="1"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          ></Box>
          <Image
            src={movieData.coverImage}
            alt={movieData.name}
            width="100%"
            maxH="869px"
          />
        </Box>
      </Grid>
    </>
  )
}
