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


