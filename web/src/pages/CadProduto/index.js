import React from 'react';
import Header from '../../components/Header';
import DescriptionPage from '../../components/DescriptionPage';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import {
  ImageProd,
  AltImage,
  Container,
  ButtonSave,
  ButtonCancel,
  ComboButton,
  TextBtn,
  FormInput,
} from './styles';
import { MdClose, MdSave } from 'react-icons/md';
import Input from '../../components/Form/Input';

function handleSubmit(data) {
  console.log(data);
}

function CadProduto() {
  return (
    <>
      <Header />
      <DescriptionPage description="Cadastro de Produto" />
      <Container>
        <ImageProd>
          <AltImage> Imagem do Produto </AltImage>
        </ImageProd>
        <FormInput>
          <Form onSubmit={handleSubmit}>
            <div>
              <Input name="email" type="email" autoComplete="email" />
            </div>
            <ComboButton>
              <ButtonSave>
                <MdSave color="#fff" size={20} type="submit" />{' '}
                <TextBtn>Salvar</TextBtn>
              </ButtonSave>
              <Link
                to="/produtos"
                style={{ textDecoration: 'none', color: '#000' }}
              >
                <ButtonCancel>
                  <MdClose color="#fff" size={25} /> <TextBtn>Cancelar</TextBtn>
                </ButtonCancel>
              </Link>
            </ComboButton>
          </Form>
        </FormInput>
      </Container>
    </>
  );
}

export default CadProduto;
