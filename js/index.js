function somenteNumeros(num) {
    var er = /[^0-9.]/;
    er.lastIndex = 0;
    var campo = num;
    if (er.test(campo.value)) {
      campo.value = "";
    }
}

function validaLogin(){
	var email = document.getElementById("idEmailLogin");
	var senha = document.getElementById("idEmailSenha");

	if(email ="jsimoni@ciandt.com"){
		alert("I am an alert box!");
	}
}