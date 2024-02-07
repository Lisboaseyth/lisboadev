import { ProjectPageByid } from '../id'
import Logo from '../../../assets/pag/start-logo.webp'
import Start1 from '../../../assets/pag/backStart.webp'
import Start2 from '../../../assets/pag/start2.webp'
import Start3 from '../../../assets/pag/start3.webp'
import Start4 from '../../../assets/pag/start4.webp'
import Start5 from '../../../assets/pag/start5.webp'
import Start6 from '../../../assets/pag/start6.webp'
import Start7 from '../../../assets/pag/start7.webp'
import Start8 from '../../../assets/pag/start8.webp'
import LogoJava from '../../../assets/JavaScript.png'
import LogoReact from '../../../assets/react.webp'
import LogoType from '../../../assets/Typescript.png'

export const Startemy = () => {
  return (
    <ProjectPageByid
      title="Startemy"
      logo={Logo}
      description="O projeto foi realizado com React + TypeScript onde tentamos ao máximo consumir e aplicar o conhecimento de todos na aplicação utilizamos algumas bibliotecas de estilização para obter todo esse mega projeto. Em relação ao Back-end utilizamos uma FakeAPI criada com JSON Server, onde pudemos realizar todas as ações de requisições que necessitamos para ter sucesso no projeto."
      techs={[{ name: 'JavaScript', image: LogoJava }, { name: 'React', image: LogoReact }, { name: 'TypeScript', image: LogoType }]}
      screenshots={[{
        original: Start1,
        description: 'Dashboard',
        thumbnail: Start1
      },
      {
        original: Start2,
        description: 'Área de Cursos',
        thumbnail: Start2
      },
      {
        original: Start3,
        description: 'Área de Login',
        thumbnail: Start3
      },
      {
        original: Start4,
        description: 'Área de Registro',
        thumbnail: Start4
      },
      {
        original: Start5,
        description: 'Perfil do cliente',
        thumbnail: Start5
      },
      {
        original: Start6,
        description: 'Carrinho de compras',
        thumbnail: Start6
      },
      {
        original: Start7,
        description: 'Checkout',
        thumbnail: Start7
      },
      {
        original: Start8,
        description: 'Área do curso',
        thumbnail: Start8
      },
      ]}
      type="Website"
      linkGit='https://github.com/Lisboaseyth/Startemy-project'
    />
  )
}
