import { Divider, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import Cartaxo from '../../assets/company/cartaxo.png'
import Setebit from '../../assets/company/setebit.jpeg'
import Bmo from '../../assets/company/bmo.jpg'
import { CardJob } from '../../components/CardJob';

export const MyJobs = ({ id }: any) => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex id={id} direction={'column'} alignItems={'center'} mb={10}>
      <Text fontSize="1.5rem" fontWeight={'bold'} color="white" mb={6}>
        Experiência Profissional
      </Text>
      <Text fontWeight={'bold'} fontSize="1rem" color="white" mb={6}>
        Experiências
      </Text>
      <Divider w={'70%'} mb={10} />
      <CardJob name='BeMore - BMO' position='Tech Leader Front End' data='Abril/2023 - Atual' description='Como Tech Leader Front-End na empresa, sou responsável por liderar a equipe de desenvolvimento front-end, garantindo a entrega de soluções de alta qualidade, aprimorando a arquitetura técnica e promovendo as melhores práticas de desenvolvimento para alcançar nossos objetivos de negócio de forma eficaz e inovadora.'
        image={Bmo} techs={['React', 'React Native', 'JavaScript', 'Typescript']}
      />
      <Divider w={'70%'} mb={10} mt={10} />
      <CardJob name='Setebit APP' position='Desenvolvedor Front End & Mobile' data='Julho/2023 - Atual' description='Atualmente, desempenho o papel de responsável pelo desenvolvimento front-end e mobile na empresa Setebit. Ao longo dessa jornada, tenho liderado projetos desafiadores, aplicando minhas habilidades fullstack para criar soluções inovadoras. Minha dedicação contínua visa aprimorar a eficiência e a qualidade dos produtos desenvolvidos, fortalecendo ainda mais minha posição como peça-chave na equipe de desenvolvimento.'
        image={Setebit} techs={['React', 'React Native', 'JavaScript', 'Typescript', 'NextJs']}
      />
      <Divider w={'70%'} mb={10} mt={10} />
      <CardJob name='Cartaxo Petroléo LTDA' position='Técnico em Informática' data='Fevereiro/2021 - Novembro/2023' description='Atuava em toda a área tech na empresa, desde a consulta de preços de
        equipamentos a montagem e instalação. Montagem e configuração de
        redes e roteadores e cabeamento para a utilização dos mesmos,
        manutenções preventivas semanais em todos os computadores e PDVs,
        instalações de softwares e apoio em possíveis bugs e criação de mídias
        digitais para o marketing e todo conteúdo visual da empresa (logo, placas,
        adesivos, etc...)'
        image={Cartaxo} techs={['React', 'JavaScript', 'NodeJS', 'Infraestruturas de redes', 'Manutenções em Hardware']}
      />
    </Flex>
  )
}
