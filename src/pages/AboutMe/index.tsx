import { Box, Flex, IconButton, Image, Link, Text, useMediaQuery } from '@chakra-ui/react'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import myImage from "../../assets/lisboa.jpeg"
import { IoLogoWhatsapp } from 'react-icons/io';

export const AboutMe = ({ id }: any) => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex id={id}>
      {
        !isMobile ? (
          <Box mb={10}>
            <Flex alignItems={'center'} gap={5}>
              <Flex direction={'column'} alignItems="flex-start" mb={4} color="white">
                <Text fontSize="1rem">
                  Olá, meu nome é
                </Text>
                <Text fontSize="2rem" fontWeight={'bold'} color="white" mb={6}>
                  Pedro Lisboa
                </Text>
                <Text fontSize="lg" color="white">
                  Sou desenvolvedor fullstack com mais de 3 anos de experiência. Mantenho-me constantemente atualizado com as últimas tecnologias, buscando sempre inovações para os projetos em que estou envolvido. Minha paixão pela programação e dedicação ao aprendizado contínuo me capacitam a criar soluções robustas e integradas. Estou animado para contribuir com minha experiência e habilidades para projetos desafiadores.</Text>
              </Flex>
              <Image src={myImage} width={'250px'} borderRadius={'50%'} />
            </Flex>
            <Flex alignItems={'center'} gap={2}>
              <Link href="#contact" color="white" fontWeight="bold" bg={"#006FFF"} p={5} borderRadius={10}>
                Fale comigo! <Box as="span" color="white" fontWeight="normal">→</Box>
              </Link>
              <Link
                href="https://github.com/lisboaseyth"
                isExternal
              >
                <IconButton
                  aria-label="Ir para o GitHub"
                  fontSize={25}
                  icon={<FaGithub />}
                  bg="none"
                  color="grey"
                  transition="color 0.2s ease-out, font-size 0.2s ease-out"
                  _hover={{
                    color: 'white',
                    fontSize: 30,
                    WebkitTransition: '0.2s ease-out',
                    MozTransition: '0.2s ease-out',
                    OTransition: '0.2s ease-out',
                    transition: '0.2s ease-out',
                  }}
                />
              </Link>
              <Link href='https://www.linkedin.com/in/pedro-lisboa-developer/' isExternal>
                <IconButton
                  aria-label='Search database'
                  fontSize={25}
                  icon={<FaLinkedinIn />}
                  bg={'none'}
                  color={'grey'}
                  transition="color 0.2s ease-out, font-size 0.2s ease-out"
                  _hover={{
                    color: 'white',
                    fontSize: 30,
                    WebkitTransition: '0.2s ease-out',
                    MozTransition: '0.2s ease-out',
                    OTransition: '0.2s ease-out',
                    transition: '0.2s ease-out',
                  }}
                />
              </Link>
              <Link href='https://api.whatsapp.com/send/?phone=%2B5588992710349&text&type=phone_number&app_absent=0' isExternal>
                <IconButton
                  aria-label='Search database'
                  fontSize={25}
                  icon={<IoLogoWhatsapp />}
                  bg={'none'}
                  color={'grey'}
                  transition="color 0.2s ease-out, font-size 0.2s ease-out"
                  _hover={{
                    color: 'white',
                    fontSize: 30,
                    WebkitTransition: '0.2s ease-out',
                    MozTransition: '0.2s ease-out',
                    OTransition: '0.2s ease-out',
                    transition: '0.2s ease-out',
                  }}
                />
              </Link>
            </Flex>
          </Box>
        ) : (
          <Box mb={10}>
            <Flex direction={'column'} alignItems={'center'} gap={5} mb={5}>
              <Image src={myImage} width={'150px'} borderRadius={'50%'} />
              <Flex direction={'column'} alignItems="center" mb={4} color="white">
                <Text fontSize="1rem">
                  Olá, meu nome é
                </Text>
                <Text fontSize="2rem" fontWeight={'bold'} color="white" mb={6}>
                  Pedro Lisboa
                </Text>
                <Text fontSize="lg" color="white" textAlign={'center'}>
                  Sou desenvolvedor fullstack com mais de 3 anos de experiência. Mantenho-me constantemente atualizado com as últimas tecnologias, buscando sempre inovações para os projetos em que estou envolvido. Minha paixão pela programação e dedicação ao aprendizado contínuo me capacitam a criar soluções robustas e integradas. Estou animado para contribuir com minha experiência e habilidades para projetos desafiadores.
                </Text>
              </Flex>
            </Flex>
            <Flex direction={'column'} justifyContent={'center'} alignItems={'center'} gap={2}>
              <Link w={'90%'} textAlign={'center'} href="#contact" color="white" fontWeight="bold" bg={"#006FFF"} p={5} borderRadius={10}>
                Fale comigo! <Box as="span" color="white" fontWeight="normal">→</Box>
              </Link>
              <Flex>

                <IconButton
                  aria-label='Search database'
                  fontSize={25}
                  icon={<FaGithub />}
                  bg={'none'}
                  color={'grey'}
                  transition="color 0.2s ease-out, font-size 0.2s ease-out"
                  _hover={{
                    color: 'white',
                    fontSize: 30,
                    WebkitTransition: '0.2s ease-out',
                    MozTransition: '0.2s ease-out',
                    OTransition: '0.2s ease-out',
                    transition: '0.2s ease-out',
                  }}
                />
                <IconButton
                  aria-label='Search database'
                  fontSize={25}
                  icon={<FaLinkedinIn />}
                  bg={'none'}
                  color={'grey'}
                  transition="color 0.2s ease-out, font-size 0.2s ease-out"
                  _hover={{
                    color: 'white',
                    fontSize: 30,
                    WebkitTransition: '0.2s ease-out',
                    MozTransition: '0.2s ease-out',
                    OTransition: '0.2s ease-out',
                    transition: '0.2s ease-out',
                  }}
                />
                <IconButton
                  aria-label='Search database'
                  fontSize={25}
                  icon={<FaWhatsapp />}
                  bg={'none'}
                  color={'grey'}
                  transition="color 0.2s ease-out, font-size 0.2s ease-out"
                  _hover={{
                    color: 'white',
                    fontSize: 30,
                    WebkitTransition: '0.2s ease-out',
                    MozTransition: '0.2s ease-out',
                    OTransition: '0.2s ease-out',
                    transition: '0.2s ease-out',
                  }}
                />
              </Flex>
            </Flex>
          </Box>
        )
      }
    </Flex>
  )
}
