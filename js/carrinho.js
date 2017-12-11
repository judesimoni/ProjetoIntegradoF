function AddCarrinho(produto, qtd, valor, posicao){ 
	localStorage.setItem("produto" + posicao, produto);
	localStorage.setItem("qtd" + posicao, qtd);
	valor = valor * qtd;
	localStorage.setItem("valor" + posicao, valor);
	swal("Sucesso!", "Pedido adicionado ao carrinho!", "success");
 }

 function finalizarCompra() {

	var rua = $('#idRua').val();
	var bairro = $('#idBairro').val();
	var numero = $('#idNumero').val();
	var cep = $('#idCEP').val();


	var nomeImpresso = $('#idNomeImpresso').val();
	var numeroCartao = $('#idNumeroCartao').val();
	var validade = $('#idValidade').val();
	var codigo = $('#idCodigo').val();

	if (!rua || !bairro || !numero || !cep) {
		swal("Erro!", "Verifique o endereço digitado", "error");
	}
	else if (!nomeImpresso || !numeroCartao || !validade || !codigo) {
		swal("Erro!", "Verifique as informações do cartão", "error");
	} else 
	swal("Sucesso!", "Compra finalizada com sucesso!", "success");
 }