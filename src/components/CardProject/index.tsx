import { Box, Button, Flex, Image, Tag, Text, useMediaQuery } from '@chakra-ui/react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Project } from '../../types'
import { useNavigate } from 'react-router-dom';

export const CardProject = ({ name, description, image, techs, link }: Project) => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const router = useNavigate()

  return (
    !isMobile ? (
      <Flex border={'solid 2px white'} textAlign={'center'} alignItems={'center'} w={'100%'} h={'100%'} borderRadius={15} p={19} gap={15} color="white" bg={'#475569'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={'40%'} h={'100%'} bg={'red'} borderRadius={15}>
          <Image borderRadius={5} src={image}w={'100%'} h={'100%'}  color="white" />
        </Box>
        <Box textAlign={'left'} w={'60%'} >
          <Text mb={4} fontWeight={600} fontSize={'1.5rem'}>
            {name}
          </Text>
          <Text fontSize={13} fontWeight={300} mb={2} >
            {description}
          </Text>
          <Flex gap={2} flexDirection={'row'} w={'60%'} flexWrap={'wrap'} mb={4}>
            {
              techs.map((tech, index) => (
                <Tag color={'white'} key={index} fontWeight={300} bg={'#00A2FF'}>{tech}</Tag>
              ))
            }
          </Flex>
          <Button onClick={() => router(link)} rightIcon={<FaLongArrowAltRight />}>Acessar projeto</Button>
        </Box>
      </Flex>
    ) : (
      <Flex direction={'column'} border={'solid 2px white'} textAlign={'center'} alignItems={'center'} w={'100%'} borderRadius={15} p={19} gap={15} color="white" bg={'#475569'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w={'100%'} h={'100%'} bg={'red'} borderRadius={15}>
          <Image borderRadius={5} src={image} color="white" />
        </Box>
        <Box textAlign={'left'} w={'100%'} >
          <Text mb={4} fontWeight={600} fontSize={'1.5rem'}>
            {name}
          </Text>
          <Text fontSize={13} fontWeight={300} mb={2} >
            {description}
          </Text>
          <Flex gap={2} flexDirection={'row'} w={'100%'} flexWrap={'wrap'} mb={4}>
            {
              techs.map((tech, index) => (
                <Tag color={'white'} key={index} fontWeight={300} bg={'#00A2FF'}>{tech}</Tag>
              ))
            }
          </Flex>
          <Button onClick={() => router(link)} rightIcon={<FaLongArrowAltRight />}>Acessar projeto</Button>
        </Box>
      </Flex>
    )
  )
}
