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
  LabelInput,
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

        <Form onSubmit={handleSubmit}>
          <FormInput>
            <LabelInput>Descrição do Produto</LabelInput>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              width="634px"
              height="34px"
            />

            <LabelInput>Unitário</LabelInput>
            <select name="unit" id="unit" style={{ width: 68, height: 34 }}>
              <option value="teste1">teste1</option>
            </select>

            <LabelInput>Preço Custo</LabelInput>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              width="225px"
              height="34px"
            />

            <LabelInput>Preço Venda</LabelInput>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              width="226px"
              height="34px"
            />

            <LabelInput>Margem de Lucro</LabelInput>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              width="145px"
              height="34px"
            />

            <LabelInput>Marca</LabelInput>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              width="225px"
              height="34px"
            />

            <LabelInput>Fornecedor</LabelInput>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              width="226px"
              height="34px"
            />

            <LabelInput>Sobre o Produto</LabelInput>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              width="225px"
              height="34px"
              marginBottom="21px"
            />

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
          </FormInput>
        </Form>
      </Container>
    </>
  );
}

export default CadProduto;
