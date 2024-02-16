import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
  useToast,
  useMediaQuery,
} from '@chakra-ui/react';
import { EmailContact } from '../../types';
import { schema } from './schema';
import emailjs from '@emailjs/browser';

const Contact = ({ id }: any) => {

  const toast = useToast()

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });


  const sendEmail = (data: EmailContact) => {

    const templateParams = {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message
    }

    try {
      emailjs.send('service_b6ihaqr', 'template_lo4tovh', templateParams, 'pxvHNhPOhtHMTpOi2')
      toast({
        title: 'Email enviado com sucesso',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      reset()
    } catch (error) {
      console.error(error)
      toast({
        title: 'Erro ao enviar o email',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex justify="center" align="center" direction="column" h="100vh" id={id}>
      <Text fontSize="1.5rem" fontWeight="bold" color="white" mb={6}>
        Contato
      </Text>
      <Text fontSize="1rem" color="white" mb={6}>
        Entre em contato!
      </Text>
      <form onSubmit={handleSubmit(sendEmail)} style={{ width: isMobile ? '70%' : '60%' }}>
        <FormControl color="white" mb={4}>
          <FormLabel htmlFor="name">Nome</FormLabel>
          <Input
            type="text"
            id="name"
            placeholder="Seu nome"
            {...register('name')}
          />
          <Text color="red.500">
            {errors.name && <p>{errors.name?.message}</p>}
          </Text>
        </FormControl>

        <FormControl color="white" mb={4}>
          <FormLabel htmlFor="subject">Assunto</FormLabel>
          <Input
            type="text"
            id="subject"
            placeholder="Assunto"
            {...register('subject')}
          />
          <Text color="red.500">{errors.subject?.message}</Text>
        </FormControl>

        <FormControl color="white" mb={4}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type="email"
            id="email"
            placeholder="Seu email"
            {...register('email')}
          />
          <Text color="red.500">{errors.email?.message}</Text>
        </FormControl>

        <FormControl color="white" mb={4}>
          <FormLabel htmlFor="message">Mensagem</FormLabel>
          <Textarea
            id="message"
            placeholder="Sua mensagem"
            {...register('message')}
          />
          <Text color="red.500">{errors.message?.message}</Text>
        </FormControl>

        <Button type="submit" colorScheme={'blue'} w={'100%'} bg={'#00A2FF'}>
          Enviar
        </Button>
      </form>
    </Flex>
  );
};

export default Contact;
