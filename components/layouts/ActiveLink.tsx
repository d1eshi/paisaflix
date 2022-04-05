import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { CSSProperties, FC } from 'react'
import { HStack, Text } from '@chakra-ui/react'

const style = {
  borderBottom: '3px solid #FED530',
  color: '#eee',
}

interface Props {
  text: string
  href: string
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { asPath } = useRouter()

  return (
    <>
      <NextLink href={href} passHref>
        <Text
          fontSize="sm"
          color="whiteAlpha.800"
          css={asPath === href ? style : undefined}
        >
          {text}
        </Text>
      </NextLink>

      <HStack spacing="2.5em" />
    </>
  )
}
