import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import firebase from '../../services/configFirebase';
import { formatter } from '../../utils/FunctionFormatterMoney';

import {
  BoxResult,
  BoxResultTr,
  BoxResultTh,
  BoxResultTh1,
  BoxResultTh2,
  BoxResultTh3,
  BoxResultTh4,
  BoxResultTh5,
  BoxResultTd,
  BoxResultTd1,
  BoxResultTd2,
  BoxResultTd3,
  BoxResultTd4,
  BoxResultTd5,
  BoxResultTrTitle,
} from './styles';

function TableProducts() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const base = firebase.database().ref('products');

    base
      .once('value')
      .then(function (snapshot) {
        const result = Object.values(snapshot.val());
        setProducts(result);
      })
      .then(() => {
        // console.log('carregamento finalizado!');
      });
  }, []);

  return (
    <>
      <BoxResultTrTitle>
        <BoxResultTh>Código</BoxResultTh>
        <BoxResultTh1>Descrição</BoxResultTh1>
        <BoxResultTh2>Unit.</BoxResultTh2>
        <BoxResultTh3>Preço Custo</BoxResultTh3>
        <BoxResultTh4>Preço Venda</BoxResultTh4>
        <BoxResultTh5>Estoque</BoxResultTh5>
      </BoxResultTrTitle>

      <BoxResult>
        {products.map((prod) => (
          <BoxResultTr
            key={prod.id}
            onClick={() =>
              dispatch({
                type: 'ADD_TO_SELECTED_PRODUCT',
                prod,
              })
            }
          >
            <BoxResultTd>{prod.id}</BoxResultTd>
            <BoxResultTd1>{prod.product}</BoxResultTd1>
            <BoxResultTd2>{prod.unit}</BoxResultTd2>
            <BoxResultTd3>{formatter.format(prod.preco_custo)}</BoxResultTd3>
            <BoxResultTd4>{formatter.format(prod.preco_venda)}</BoxResultTd4>
            <BoxResultTd5>{prod.unidades}</BoxResultTd5>
          </BoxResultTr>
        ))}
      </BoxResult>
    </>
  );
}

export default connect()(TableProducts);
