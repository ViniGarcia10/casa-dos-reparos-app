import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { MdSearch, MdAdd, MdEdit, MdDelete } from 'react-icons/md';
import { GiExitDoor } from 'react-icons/gi';
import { FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatter } from '../../utils/FunctionFormatterMoney';

import Prod1 from '../../assets/prod1.png';

import DescriptionPage from '../../components/DescriptionPage';
import TableProducts from '../../components/TableProducts';

import {
  Container,
  BoxSearch,
  DescriptionSearch,
  BoxRight,
  BoxLeft,
  ContainerBox,
  ComboOptions,
  ItemsOptionsProd,
  ItemTitle,
  PictureProd,
  ContainerCombo,
  DetailsProd,
  DetailsPicture,
  ImageProd,
  DescriptionProd,
  DescriptionProdBlue,
  TitleDescription,
  TitleDescriptionResult,
  DescriptionProdBlueBig,
  TitleDescriptionBig,
  TitleDescriptionResultBig,
} from './styles';

function Produto({ product }) {
  const [itemSelected, setItemSelected] = useState({});

  useEffect(() => {
    const Items = product.map((prod) => prod);
    const ItemEnd = new Object(Items[Items.length - 1]);

    setItemSelected(ItemEnd);
  }, [product]);

  return (
    <Container>
      <Header />
      <DescriptionPage description="Estoque" />

      <ContainerBox>
        <BoxLeft>
          <BoxSearch>
            <MdSearch
              style={{
                height: '100%',
                justifyContent: 'center',
                flex: 2,
                color: '#757575',
              }}
            />
            <DescriptionSearch placeholder="Buscar" />
          </BoxSearch>
          <TableProducts />
        </BoxLeft>

        <BoxRight modeClean={Boolean(Object.keys(itemSelected).length !== 0)}>
          <ContainerCombo>
            <Link
              to="/cadProdutos"
              style={{ textDecoration: 'none', color: '#000' }}
            >
              <ComboOptions>
                <ItemsOptionsProd>
                  <MdAdd size={40} />
                </ItemsOptionsProd>
                <ItemTitle> Novo Produto </ItemTitle>
              </ComboOptions>
            </Link>

            <ComboOptions>
              <ItemsOptionsProd>
                <MdEdit size={30} />
              </ItemsOptionsProd>
              <ItemTitle> Editar </ItemTitle>
            </ComboOptions>

            <ComboOptions>
              <ItemsOptionsProd>
                <MdDelete size={30} />
              </ItemsOptionsProd>
              <ItemTitle> Excluir </ItemTitle>
            </ComboOptions>

            <ComboOptions>
              <ItemsOptionsProd>
                <FaFilter size={30} />
              </ItemsOptionsProd>
              <ItemTitle> Filtrar </ItemTitle>
            </ComboOptions>

            <ComboOptions>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                }}
              >
                <ItemsOptionsProd>
                  <GiExitDoor size={30} />
                </ItemsOptionsProd>
                <ItemTitle> Sair </ItemTitle>
              </Link>
            </ComboOptions>
          </ContainerCombo>
          {Object.keys(itemSelected).length !== 0 && (
            <>
              {' '}
              <PictureProd>
                <DetailsPicture>código {itemSelected.id}</DetailsPicture>
                <ImageProd src={Prod1} />
              </PictureProd>
              <DetailsProd>
                <DescriptionProd>{itemSelected.product}</DescriptionProd>

                <DescriptionProdBlue>
                  <TitleDescription>Disponiveis</TitleDescription>
                  <TitleDescriptionResult>
                    {itemSelected.unidades} Unidades
                  </TitleDescriptionResult>
                </DescriptionProdBlue>

                <DescriptionProdBlue>
                  <TitleDescription>Preço Custo</TitleDescription>
                  <TitleDescriptionResult color="#FFE600">
                    {formatter.format(itemSelected.preco_custo)}
                  </TitleDescriptionResult>
                </DescriptionProdBlue>

                <DescriptionProdBlue>
                  <TitleDescription>Preço Venda</TitleDescription>
                  <TitleDescriptionResult color="#01F428">
                    {formatter.format(itemSelected.preco_venda)}
                  </TitleDescriptionResult>
                </DescriptionProdBlue>

                <DescriptionProdBlue>
                  <TitleDescription>Marca</TitleDescription>
                  <TitleDescriptionResult>
                    {itemSelected.brand}
                  </TitleDescriptionResult>
                </DescriptionProdBlue>

                <DescriptionProdBlue>
                  <TitleDescription>Vendidos</TitleDescription>
                  <TitleDescriptionResult>5 Unidades</TitleDescriptionResult>
                </DescriptionProdBlue>

                <DescriptionProdBlue>
                  <TitleDescription>Fornecedor</TitleDescription>
                  <TitleDescriptionResult>
                    {itemSelected.provider}
                  </TitleDescriptionResult>
                </DescriptionProdBlue>

                <DescriptionProdBlueBig>
                  <TitleDescriptionBig>Sobre o Produto</TitleDescriptionBig>
                  <TitleDescriptionResultBig>
                    Indicado para o motor ms170 stihl.
                  </TitleDescriptionResultBig>
                </DescriptionProdBlueBig>

                <DescriptionProdBlue>
                  <TitleDescription>Margem de Lucro</TitleDescription>
                  <TitleDescriptionResult>
                    {itemSelected.margem_lucro}%
                  </TitleDescriptionResult>
                </DescriptionProdBlue>

                <DescriptionProdBlue disable={true}>
                  <TitleDescription>Ultima Venda</TitleDescription>
                  {/* <TitleDescriptionResult>10/06/2020</TitleDescriptionResult> */}
                </DescriptionProdBlue>
              </DetailsProd>
            </>
          )}
        </BoxRight>
      </ContainerBox>
    </Container>
  );
}

export default connect((state) => ({
  product: state.tableProducts,
}))(Produto);
