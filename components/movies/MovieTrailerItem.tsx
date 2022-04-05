import { Badge, Box, Grid, Image, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Trailer } from '../../interfaces'

interface Props {
  trailerData: Trailer
  number?: number
}

export const MovieTrailerItem: FC<Props> = ({ trailerData, number }) => {
  return (
    <>
      <Box key={trailerData._id} position="relative">
        <Image src={trailerData.trailerImage} />

        {number === 0 || number ? (
          <Badge
            colorScheme="white"
            fontSize="2xl"
            position="absolute"
            right={1}
            bottom={-4}
          >{`0${number + 1}`}</Badge>
        ) : null}
      </Box>
    </>
  )
}
