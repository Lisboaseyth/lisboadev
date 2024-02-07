import { Flex, SimpleGrid, Text } from '@chakra-ui/react';
import JavaScript from '../../assets/JavaScript.png'
import nextjs from '../../assets/Next.png'
import nodejs from '../../assets/nodejs.png'
import Typescript from '../../assets/Typescript.png'
import react from '../../assets/react.webp'
import { CardTech } from '../../components/CardTech';

export const TechStack = ({ id }: any) => {

  return (
    <Flex id={id} direction={'column'} alignItems={'center'} mb={10}>
      <Text fontSize="1.5rem" fontWeight={'bold'} color="white" mb={6}>
        Tecnologias
      </Text>
      <Text fontSize="1rem" color="white" mb={6}>
        Essas são as tecnologias que mais utilizo nos meus projetos
      </Text>
      <SimpleGrid columns={[2, null, 3, 5]} gap={5}>
        <CardTech image={JavaScript} name='JavaScript' color='yellow' text='Uma linguagem de script para criar conteúdos de páginas web dinâmicos' />
        <CardTech image={react} name='ReactJS' color='#0255C1' text='Uma biblioteca Javascript para construir interfaces de usuário' />
        <CardTech image={Typescript} name='TypeScript' color='#0362C1' text='Uma linguagem de programação tipada que gera Javascript' />
        <CardTech image={nextjs} name='NextJS' color='black' text='Um framework de desenvolvimento web baseado no React.js' />
        <CardTech image={nodejs} name='NodeJs' color='#039C27' text='Um runtime do Javascript construído no motor V8 do Chrome' />
      </SimpleGrid>
    </Flex>
  )
}
