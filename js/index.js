var infosUsuario = ''; 

$(document).ready(function(){
    $("#entrarButton").click(function(){
        $("a#products")[0].click();
    });
});

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
	var senha = $('#idSenhaLogin').val();
    
  $.ajax({
    url:    'http://localhost/SweetDream.API/api/cliente/logon',
    type:   "post",
    dataType:"json",
    data:   {'email': email, 'senha': senha},
    async: false,
    success: function( data ){
        retorno = data;
        infosUsuario = retorno;

        window.location.href = "areaLogada.html";

    } ,
    error: function( result ) {
        
        swal("Erro ao efetuar login!", "Verifique as informações digitadas e tente novamente", "error");

    }  
});
}

function cadastrarUsuario(){
    var nome = $('#idNomeCadastro').val();
    var email = $('#idEmailCadastro').val();
    var cpf = $('#idCPFCadastro').val();
    var telefone = $('#idTelefoneCadastro').val();
    var senha = $('#idSenhaCadastro').val();

    if(!nome || !email || !cpf || !telefone || !senha) {
        swal("Ocorreu um erro!", "Verifique se todos os campos foram preenchidos.", "error");
    }
    
    else {
        var data = {
            "email": email,
            "senha": senha,
            "nome" : nome,
            "telefone": telefone
        }
    
      $.ajax({
        url:    'http://localhost/SweetDream.API/api/cliente/',
        type:   "post",
        dataType:"json",
        data:  data,
        async: false,
        success: function( data ){
            $('#idNomeCadastro').val("");
            $('#idEmailCadastro').val("");
            $('#idCPFCadastro').val("");
            $('#idTelefoneCadastro').val("");
            $('#idSenhaCadastro').val("");     
           
           swal("Cadastro realizado com sucesso!", "Efetue o login com o usuário e senha criados!", "success");           
    
        },
        error: function ( response ) {
            swal("Ocorreu um erro!", "Verifique as informações digitadas e tente novamente", "error");
        } 
    });
    }
    
}

function areaLogada() {

}
