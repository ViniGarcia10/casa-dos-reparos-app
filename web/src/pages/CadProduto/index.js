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
  ContainerData,
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
        <Form onSubmit={handleSubmit}>
          <FormInput>
            <ImageProd>
              <AltImage> Imagem do Produto </AltImage>
            </ImageProd>

            <ContainerData
              style={{
                width: 'auto',
                height: 34,
                gridColumnStart: 1,
                gridColumnEnd: 4,
              }}
            >
              <LabelInput>Descrição do Produto</LabelInput>
              <Input name="product" type="text" />
            </ContainerData>

            <ContainerData
              style={{ width: 161, height: 34, display: 'inline-grid' }}
            >
              <LabelInput>Unitário</LabelInput>
              <select
                name="unit"
                id="unit"
                style={{
                  width: 'auto',
                  height: 34,
                  boxSizing: 'border-box',
                  borderRadius: 4,
                  background: '#756A6A',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                <option value="unidade">Unidade</option>
                <option value="kg">Kilo</option>
                <option value="caixa">Caixa</option>
              </select>
            </ContainerData>

            <ContainerData style={{ width: 186, height: 34 }}>
              <LabelInput>Preço Custo</LabelInput>
              <Input name="preco_custo" type="text" />
            </ContainerData>

            <ContainerData style={{ width: 186, height: 34 }}>
              <LabelInput>Preço Venda</LabelInput>
              <Input name="preco_venda" type="text" />
            </ContainerData>

            <ContainerData style={{ width: 186, height: 34 }}>
              <LabelInput>Margem de Lucro</LabelInput>
              <Input name="margem_lucro" type="text" />
            </ContainerData>

            <ContainerData
              style={{
                width: 186,
                height: 34,
                gridColumnStart: 1,
                gridColumnEnd: 2,
              }}
            >
              <LabelInput>Marca</LabelInput>
              <Input name="brand" type="text" />
            </ContainerData>

            <ContainerData
              style={{
                width: 186,
                height: 34,
                gridColumnStart: 2,
              }}
            >
              <LabelInput>Fornecedor</LabelInput>
              <Input name="provider" type="text" />
            </ContainerData>

            <ContainerData
              style={{
                width: 355,
                height: 34,
                gridColumnStart: 3,
              }}
            >
              <LabelInput>Sobre o Produto</LabelInput>
              <Input
                name="about_product"
                type="text"
                width="100%"
                height="34"
              />
            </ContainerData>

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
