import { Flex, Text, Link, IconButton, Stack, Box } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" mt="auto" w={'100%'}>
      <Flex
        align="center"
        justify="space-between"
        p="4"
        bg="gray.800"
        color="white"
      >
        <Text>&copy; Pedro Lisboa</Text>
        <Stack direction="row" spacing="2">
          <Link href="https://github.com/lisboaseyth" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              fontSize="20px"
              color="white"
              variant="ghost"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/pedro-lisboa-developer" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              fontSize="20px"
              color="white"
              variant="ghost"
            />
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Footer;
