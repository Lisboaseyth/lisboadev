import { Box, Button, Flex, Image, SimpleGrid, Tag, Text, useMediaQuery } from '@chakra-ui/react'

import backStart from '../../../assets/pag/backStart.webp'

import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FaGithub, FaLongArrowAltLeft } from 'react-icons/fa';
import { ProjectId } from '../../../types';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const ProjectPageByid = ({ title, type, logo, description, techs, screenshots, linkGit }: ProjectId) => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const router = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    isMobile ? (
      <Flex direction={'column'}>
        <Box w={'100%'} minH={'100%'} h={'540px'} mb={'150px'}>
          <Image objectFit={'cover'} w={'100%'} minH={'80%'} h={'80%'} opacity={0.45} objectPosition={'0 0'} borderBottom={'4px solid #000000a6'} boxShadow={'0px 10px 19px 2px #000000a6'} src={backStart} />
          <Flex direction={'column'} alignItems={'center'} maxW={'1600px'}>
            <Flex direction={'column'} position={'relative'} alignItems={'center'} display={'flex'} bottom={'150px'} >
              <Box w={'200px'} h={'200px'}>
                <Image w={'100%'} h={'100%'} boxShadow={'0px 0px 20px 9px #000000a6'} borderRadius={'5px'} src={logo} />
              </Box>
              <Box textAlign={'center'} mb={3}>
                <Text whiteSpace={'nowrap'} fontSize={'42px'} fontWeight={'bold'} color={'white'}>{title}</Text>
                <Tag fontSize={'24px'} bg={'#0077FF'} borderRadius={5} color={'white'}>{type}</Tag>
              </Box>
              <Flex gap={5}>
                <Button
                  w="150px"
                  fontSize="18px"
                  borderRadius="6px"
                  paddingX="16px"
                  color="#121216"
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                  }}
                  transition="all 0.3s ease"
                  leftIcon={<FaGithub />}
                  onClick={() => window.open(linkGit, '_blank')}
                >
                  Github
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box w={'100%'} p={'0 40px'} margin={'0 auto'} alignItems={'center'} justifyContent={'space-between'} maxW={'1600px'} mb={'20px'}>
          <Box maxW={'800px'} textAlign={'center'} mb={10}>
            <Text fontSize={40} color={'#0077FF'} visibility={'visible'} textAlign={'center'} mb={'20px'} paddingTop={0}>Descrição</Text>
            <Text fontSize={18} color={'white'}>{description}</Text>
          </Box>
          <Box bg={'#0c0c0c'} w={'100%'} p={'20px'} borderRadius={'10px'} boxShadow={'0 0 20px 20px #0000002e'}>
            <Text fontSize={'28px'} color={'#0077FF'} margin={0} fontWeight={700} textAlign={'center'} mb={5}>Tecnologia</Text>
            <SimpleGrid columns={[2, 3, 3, 3]} gap={2}>
              {
                techs.map((tech, index) => (
                  <Flex alignItems={'center'} key={index} direction={'column'} textAlign={'center'} w={'50'}>
                    <Image w={'80px'} h={'80px'} borderRadius={10} src={tech.image} alt='Logo Start' />
                    <Text color={'white'} fontSize={20} fontWeight={600}>{tech.name}</Text>
                  </Flex>
                ))
              }
            </SimpleGrid>
          </Box>
        </Box>
        <Box textAlign={'center'} p={'50px 40px'}>
          <Text fontSize={40} color={'white'}>Screenshots</Text>
          <Gallery items={screenshots} />
        </Box>
        <Button onClick={(() => router('/'))} leftIcon={<FaLongArrowAltLeft />}>Voltar</Button>
      </Flex>
    ) : (
      <Flex direction={'column'}>
        <Box w={'100%'} minH={'100%'} h={'540px'} mb={'200px'}>
          <Image objectFit={'cover'} w={'100%'} minH={'100%'} h={'100%'} opacity={0.45} objectPosition={'0 0'} borderBottom={'4px solid #000000a6'} boxShadow={'0px 10px 19px 2px #000000a6'} src={backStart} />
          <Flex display={'flex'} justifyContent={'space-between'} margin={'0 auto'} maxW={'1600px'} p={'0 40px'}>
            <Flex position={'relative'} alignItems={'center'} display={'flex'} bottom={'150px'} >
              <Box w={'200px'} h={'200px'}>
                <Image w={'100%'} h={'100%'} boxShadow={'0px 0px 20px 9px #000000a6'} borderRadius={'5px'} src={logo} />
              </Box>
              <Box ml={'16px'}>
                <Text whiteSpace={'nowrap'} fontSize={'42px'} color={'white'} fontWeight={'bold'} mb={0}>{title}</Text>
                <Tag fontSize={'24px'} bg={'#0077FF'} borderRadius={5} textAlign='center' color={'white'}>{type}</Tag>
              </Box>
            </Flex>
            <Flex maxW={'1200px'} h={'80px'} float={'right'}>
              <Button
                w="150px"
                margin="20px 10px"
                fontSize="18px"
                borderRadius="6px"
                paddingX="16px"
                color="#121216"
                _hover={{
                  transform: 'translateY(2px)',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                }}
                transition="all 0.3s ease"
                leftIcon={<FaGithub />}
                onClick={() => window.open(linkGit, '_blank')}
              >
                Github
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Flex w={'100%'} display={'grid'} p={'0 40px'} margin={'0 auto'} gridTemplateColumns={'1fr 1fr'} maxW={'1600px'} mb={'80px'} gap={10}>
          <Box maxW={'800px'} textAlign={'center'}>
            <Text fontSize={40} color={'#0077FF'} visibility={'visible'} textAlign={'center'} mb={'20px'} paddingTop={0}>Descrição</Text>
            <Text fontSize={18} color={'white'}>{description}</Text>
          </Box>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} h={'auto'} bg={'#0c0c0c'} w={'100%'} p={'5px'} borderRadius={'10px'} boxShadow={'0 0 20px 20px #0000002e'}>
            <Text fontSize={'28px'} color={'#0077FF'} margin={0} fontWeight={700} textAlign={'center'} mb={5}>Tecnologia</Text>
            <SimpleGrid columns={[2, 2, 3, 3]} gap={5}>
              {
                techs.map((tech, index) => (
                  <Flex alignItems={'center'} key={index} direction={'column'} textAlign={'center'} w={'50'}>
                    <Image w={'80px'} h={'80px'} borderRadius={10} src={tech.image} alt='Logo Start' />
                    <Text color={'white'} fontSize={20} fontWeight={600}>{tech.name}</Text>
                  </Flex>
                ))
              }
            </SimpleGrid>
          </Box>
        </Flex>
        <Box textAlign={'center'} m={'0 auto'} p={'50px 40px'}>
          <Text fontSize={40} color={'white'}>Screenshots</Text>
          <Gallery items={screenshots} />
        </Box>
        <Button onClick={(() => router('/'))} leftIcon={<FaLongArrowAltLeft />}>Voltar</Button>
      </Flex>
    )
  )
}
