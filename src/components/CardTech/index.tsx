import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Techs } from '../../types'

export const CardTech = ({ image, name, color, text }: Techs) => {
  return (
    <Flex direction={'column'} border={'solid 2px white'} textAlign={'center'} alignItems={'center'} w={'150px'} h={'300px'} borderRadius={15} p={19} color="white" bg={'#475569'} transition="border 0.4s ease-out, background 0.4s ease-out, font-size 0.4s ease-out"
      _hover={{
        border: `solid 2px ${color}`,
        background: '#0255C1',
        fontSize: '16px',
      }}>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={'100px'} h={'100px'}>
        <Image borderRadius={5} src={image} w={'70px'} mb={2} color="white" />
      </Box>
      <Text mb={4} fontWeight={600}>
        {name}
      </Text>
      <Text fontSize={13} fontWeight={300}>
        {text}
      </Text>
    </Flex>
  )
}
