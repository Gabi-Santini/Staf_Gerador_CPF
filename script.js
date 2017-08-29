$(document).ready(function(){
	$('.cpf').mask('000.000.000-00', {reverse: true});
});

function gerarCPF(){
	var v1 = 0, v2 = 0, i;	
	var cpf = [];

 	for (i = 0; i < 9; i++)
 		cpf.push(Math.floor(Math.random() * 10));

 	cpf.reverse();

 	for (i = 0; i < 9; i++){
 		v1 += cpf[i] * (9 - (i % 10))
		v2 += cpf[i] * (9 - ((i + 1) % 10))
	}

	v1 = (v1 % 11) % 10;
	v2 += v1 * 9;
	v2 = (v2 % 11) % 10;

	cpf.reverse();

	cpf.push(v1);
	cpf.push(v2);

	
	$("#cpf").val(	cpf[0] +""+ cpf[1] +""+ cpf[2] +"."+ 
					cpf[3] +""+ cpf[4] +""+ cpf[5] +"."+ 
					cpf[6] +""+ cpf[7] +""+ cpf[8] +"-"+ 
					cpf[9] +""+ cpf[10]); 
}


function validarCPF(){
	var digitos = [], v1 = 0, v2 = 0;

	var cpf = $("#cpf").val();
	

	cpf = cpf.replace(".", "");
	cpf = cpf.replace(".", "");
	cpf = cpf.replace("-", "");
	
	for (i = 0; i < 9; i++)
		digitos.push(parseInt(cpf[i]));

	digitos.reverse();

 	for (i = 0; i < 9; i++){
 		v1 += digitos[i] * (9 - (i % 10))
		v2 += digitos[i] * (9 - ((i + 1) % 10))
	}

	v1 = (v1 % 11) % 10;
	v2 += v1 * 9;
	v2 = (v2 % 11) % 10;

	if(v1==parseInt(cpf[9]) & v2==parseInt(cpf[10])){

		if(digitos[0]==digitos[1] & digitos[2]==digitos[3] & digitos[4]==digitos[5]){
			$('.underlineHover').html('CPF inválido');
			$("#formFooter").css("background-color", "red");
		}
		else{

		$('.underlineHover').html('CPF Válido');
		$("#formFooter").css("background-color", "blue");
	}

	}
	else{
		$('.underlineHover').html('CPF inválido');
		$("#formFooter").css("background-color", "red");
	}
		
}
