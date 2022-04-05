import { PhoneIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'

export const Footer = () => {
  return (
    <Container maxW="container.full" maxH="300px">
      <Grid templateColumns="20% 58%" mt={32} gap={52}>
        <GridItem>
          <Heading mb={4} fontSize="6xl" fontWeight="medium">
            Paisaflix
          </Heading>
          <Text fontSize="sm" mb={4} fontWeight="bold">
            Join Newsletters
          </Text>
          <InputGroup maxW="223px">
            <Input
              borderColor="#464646"
              focusBorderColor="lime"
              placeholder="Insert your email here"
              _placeholder={{ fontSize: 'sm' }}
              pl={2}
              p="23px 10px"
            />
            <InputRightElement
              backgroundColor="yellow"
              borderRadius={8}
              top="4px"
              right="5px"
            >
              <ArrowForwardIcon color="black" fontSize={20} />
            </InputRightElement>
          </InputGroup>
        </GridItem>
        <GridItem
          display="flex"
          gap="10em"
          alignItems="flex-start"
          fontWeight="regular"
          color="#E6E6E6"
          mt={10}
        >
          <VStack spacing={6} alignItems="baseline">
            <Text fontWeight="bold">Product</Text>
            <Text>Movies</Text>
            <Text>TV Show</Text>
            <Text>Videos</Text>
          </VStack>
          <VStack spacing={6} alignItems="baseline">
            <Text fontWeight="bold">Media Group</Text>
            <Text>Nice Studio</Text>
            <Text>Nice News</Text>
            <Text>Nice TV</Text>
          </VStack>
          <VStack spacing={6} alignItems="baseline">
            <Text fontWeight="bold">Sitemap</Text>
            <Text>About</Text>
            <Text>Carrers</Text>
            <Text>Press</Text>
          </VStack>
        </GridItem>
        <GridItem
          display="flex"
          gridColumnStart="2"
          alignItems="center"
          mt="-13em"
        >
          <HStack spacing={4}>
            <Box display="flex" alignItems="center">
              <GoLocation />
              <Text ml={2}>8819 Enrique Martinez, Bs As., 90280</Text>
            </Box>

            <Box display="flex" alignItems="center">
              <AiOutlineMail />
              <Text ml={2}>hola@paisanos.io</Text>
            </Box>

            <Box display="flex" alignItems="center">
              <PhoneIcon />
              <Text ml={2}>+271 386-647-3637</Text>
            </Box>
          </HStack>
        </GridItem>
      </Grid>
    </Container>
  )
}
