import { Divider, Flex, useMediaQuery, IconButton, Icon } from "@chakra-ui/react";
import { HeaderComponent } from "../../components/Header";
import { AboutMe } from "../AboutMe";
import { TechStack } from "../Techs";
import { ProjectPage } from "../Projetos";
import { MyJobs } from "../Jobs";
import Contact from "../Contact";
import Footer from "../../components/Footer";
import { FaArrowUp } from "react-icons/fa"; // Importe o ícone de seta para cima
import { useEffect, useState } from "react";

export const DashboardPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showButton = scrollY > 200; // Ajuste conforme necessário
    setShowScrollButton(showButton);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex direction="column" minHeight="100vh">
      <Flex direction="column" margin={isMobile ? '0 20px' : '0 100px'}>
        <HeaderComponent />
        <AboutMe id="inicio" />
        <Divider margin={'30px 0'} />
        <TechStack id="aboutMe" />
        <Divider margin={'30px 0'} />
        <ProjectPage id="projects" />
        <Divider margin={'30px 0'} />
        <MyJobs id="myJobs" />
        <Divider margin={'30px 0'} />
        <Contact id="contact" />
      </Flex>
      <Footer />
      {showScrollButton && (
        <IconButton
          icon={<Icon as={FaArrowUp} />}
          isRound
          size="lg"
          position="fixed"
          bottom="90px"
          right="20px"
          onClick={() => handleScrollToTop()}
          aria-label="Scroll to top"
        />
      )}
    </Flex>
  );
};
