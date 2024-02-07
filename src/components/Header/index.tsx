import { Flex, Image, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, useMediaQuery } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Hacker from "../../assets/my logo.png";
import Brasil from "../../assets/flags/br.png";
import Usa from "../../assets/flags/usa.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-scroll';

export const HeaderComponent = () => {

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <Flex direction="column" p={8}>
      {isMobile ? (
        <Flex justifyContent="space-between" alignItems={'center'}>
          <Image src={Hacker} w={'30%'} />
          <Menu>
            <MenuButton as={IconButton} color={isOpen ? '#000A92' : 'white'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} variant="outline" onClick={toggleMenu} />
            <MenuList>
              <Link to="inicio" smooth={true} duration={500}>
                <MenuItem>Início</MenuItem>
              </Link>
              {/* <MenuItem>Sobre mim</MenuItem> */}
              <MenuItem>Projetos</MenuItem>
              {/* <MenuItem>Artigos</MenuItem> */}
              <MenuItem>Contato</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      ) : (
        <Flex justify="space-between" alignItems={'center'} mb={4}>
          <Image src={Hacker} w={'120px'} />
          <Flex>
            <Button mr={2} bg={'none'} color={'grey'} transition="color 0.2s ease-out" _hover={{ color: 'white' }}>Início</Button>
            {/* <Button mr={2} bg={'none'} color={'grey'} transition="color 0.2s ease-out" _hover={{ color: 'white' }}>Sobre mim</Button> */}
            <Button mr={2} bg={'none'} color={'grey'} transition="color 0.2s ease-out" _hover={{ color: 'white' }}>Projetos</Button>
            {/* <Button mr={2} bg={'none'} color={'grey'} transition="color 0.2s ease-out" _hover={{ color: 'white' }}>Artigos</Button> */}
            <Button mr={2} bg={'none'} color={'grey'} transition="color 0.2s ease-out" _hover={{ color: 'white' }}>Contato</Button>
            {/* <IconButton
              mr={2}
              bg={'none'}
              color={'grey'}
              icon={<Image src={Brasil} w={'30px'} />}
              aria-label={t('portuguese')}
              onClick={() => changeLanguage('pt')}
            />
            <IconButton
              mr={2}
              bg={'none'}
              color={'grey'}
              icon={<Image src={Usa} w={'30px'} />}
              aria-label={t('english')}
              onClick={() => changeLanguage('en')}
            /> */}
          </Flex>
        </Flex>
      )}

    </Flex>
  );
}
