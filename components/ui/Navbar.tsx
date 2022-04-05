import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from '../layouts/ActiveLink'
import { Box, Text, Link, HStack, Avatar, Container } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

const menuItems = [
  {
    text: 'Home',
    href: '/',
  },

  {
    text: 'Contact Us',
    href: '/contact',
  },

  {
    text: 'FAQ',
    href: '/faq',
  },

  {
    text: 'Pricing',
    href: '/pricing',
  },
]

export const Navbar = () => {
  return (
    <Container
      as="nav"
      maxW="container.full"
      zIndex="2"
      position="relative"
      display="flex"
      justifyContent="start"
      alignItems="center"
      w="100%"
    >
      <Box display="flex" alignItems="center" flex="1">
        <Box mr="4em">
          <NextLink href="/" passHref>
            <Link>
              <Text fontSize="3xl" fontWeight="700" color="white">
                Paisaflix
              </Text>
            </Link>
          </NextLink>
        </Box>

        {menuItems.map((item, index) => (
          <HStack key={index} direction={['column', 'row']} spacing="2.5em">
            <ActiveLink text={item.text} href={item.href} />
          </HStack>
        ))}
      </Box>

      <HStack spacing="20px">
        <FiSearch style={{ marginRight: '18px', fontSize: '23px' }} />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Text color="white" fontSize="sm" fontWeight="700">
          Soy Paisanx
        </Text>
      </HStack>
    </Container>
  )
}
