import { Divider, Flex, useMediaQuery } from "@chakra-ui/react";
import { HeaderComponent } from "../../components/Header";
import { AboutMe } from "../AboutMe";
import { TechStack } from "../Techs";
import { ProjectPage } from "../Projetos";
import { MyJobs } from "../Jobs";

export const DashboardPage = () => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");
  
  return (
    <Flex direction="column" p={8} margin={isMobile ? '' : '0 100px'}>
      <HeaderComponent />
      <AboutMe id="inicio" />
      <Divider margin={'30px 0'} />
      <TechStack id="sobre-mim" />
      <Divider margin={'30px 0'} />
      <ProjectPage id="projetos" />
      <Divider margin={'30px 0'} />
      <MyJobs id="contato" />
    </Flex>
  );
};
