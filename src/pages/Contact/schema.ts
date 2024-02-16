import * as Yup from 'yup';

export const schema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    subject: Yup.string().required('Campo obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório'),
    message: Yup.string().required('Campo obrigatório'),
});