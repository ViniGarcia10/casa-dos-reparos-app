class ProductsController {
  index(req, res) {
    return res.json({
      products: [
        {
          id: 1,
          descricao: 'Reparo do Carburadores',
          undDisponiveis: 30,
          precoCusto: 20,
          precoVenda: 28,
          marca: 'Stihl',
          vendidos: 5,
          fornecedor: 'Machadão',
          margemLucro: 40,
          ultimaVenda: 1592320862,
        },
      ],
    });
  }
}

export default new ProductsController();
