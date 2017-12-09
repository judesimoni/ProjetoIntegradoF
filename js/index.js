var infosUsuario = ''; 


function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}

function validaLogin(){
	var email = $('#idEmailLogin').val();
	var senha = $('#idSenhaLoginz').val();

  $.ajax({
    url:    'http://localhost:52926/api/cliente/logon',
    type:   "post",
    dataType:"json",
    data:   {'email': email, 'senha': senha},
    async: false,
    success: function( data ){
        retorno = data;
        infosUsuario = retorno;
    }
});
}

function cadastrarUsuario(){
    var nome = $('#idNomeCadastro').val();
    var email = $('#idEmailCadastro').val();
    var cpf = $('#idCPFCadastro').val();
    var telefone = $('#idTelefoneCadastro').val();
    var senha = $('#idSenhaCadastro').val();

    var data = {
        "email": email,
        "senha": senha,
        "nome" : nome,
        "telefone": telefone
    }

  $.ajax({
    url:    'http://localhost:52926/api/cliente/',
    type:   "post",
    dataType:"json",
    data:  data,
    async: false,
    success: function( data ){
        console.log('retorno cadastro', data)
    }
});
}