import { Flex, Text } from "@chakra-ui/react"
import { CardProject } from "../../components/CardProject"
import Back from "../../assets/pag/backStart.webp"

export const ProjectPage = ({ id }: any) => {

  return (
    <Flex id={id} direction={'column'} alignItems={'center'} mb={10}>
      <Text fontSize="1.5rem" fontWeight={'bold'} color="white" mb={6}>
        Meus projetos
      </Text>
      <Text fontSize="1rem" color="white" mb={6}>
        Alguns dos meus principais projetos!
      </Text>
      <CardProject name="Startemy" description="O projeto foi realizado com React + TypeScript onde tentamos ao máximo consumir e aplicar o conhecimento de todos na aplicação utilizamos algumas bibliotecas de estilização para obter todo esse mega projeto. Em relação ao Back-end utilizamos uma FakeAPI criada com JSON Server, onde pudemos realizar todas as ações de requisições que necessitamos para ter sucesso no projeto." techs={['JavaScript', 'React', 'TypeScript', 'Axios']} image={Back} link="/project/startemy"  />
    </Flex>
  )
}
