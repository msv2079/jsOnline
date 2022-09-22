/*window.addEventListener("orientationchange", function() {
  if(window.orientation == 0){
	document.getElementById("ColunaLinhas").style.display = "none";
  }
  else if(window.orientation == 90){
	document.getElementById("ColunaLinhas").style.display = "table-cell";
  }
}, false);
*/

function Saudacao(){
	var horaAtual = new Date().getHours();
	var saudacao = "";

	if(horaAtual >= 0 && horaAtual <= 6) {
		saudacao = "Boa madrugada, reservou um tempo para você descansar?";
	}
	else if(horaAtual > 6) {
		saudacao = "Bom dia, já se exercitou hoje?";
	}
	else if(horaAtual >= 12 && horaAtual < 18) {
		saudacao = "Boa tarde, já tomou quantos litros de água hoje?";
	}
	else {
		saudacao = "Boa noite, relaxe e se programe para amanhã";
	}

	alert(saudacao);	
}

window.onload = function() {
	CarregarLinhas();
	
	Saudacao();

    /*if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		document.getElementById("ColunaLinhas").style.display = "table-cell";
    }*/
}
document.getElementById("AnoAtual").innerHTML = new Date().getFullYear();

function VerificarScroll(){
	var scriptDinamico = document.getElementById("ScriptDinamico");
			
	if(scriptDinamico.scrollTop > 20000){
		alert("Só é possível utilizar 500 linhas");
	}
}

function AjustarScroll(){
	var scriptDinamico = document.getElementById("ScriptDinamico");
	var linhas = document.getElementById("Linhas");
			
	linhas.scrollTop = scriptDinamico.scrollTop;
}

function CarregarLinhas(){
	var texto = "";
	
	for(var x = 1; x <= 1000; x++){
		if(x.toString().length == 1){
			texto += "  ";
		}
		else if(x.toString().length == 2){
			texto += " ";
		}
		
		texto += x + "\n";
	}
	
	document.getElementById("Linhas").value = texto;
}

function RemoverMeuScript(){
	var meuScript = document.getElementById("MeuScript");

	if(meuScript != null) {
		document.body.removeChild(meuScript);
	}
}

function Limpar(){
	var result = confirm("Está certo disso?");
	
	if(result){
		RemoverMeuScript();
		document.getElementById("ScriptDinamico").value = "";
	}
}

function Executar(){
	RemoverMeuScript();
	
	var texto = document.getElementById("ScriptDinamico").value;

	var scriptTag = document.createElement("script");
	scriptTag.id = "MeuScript";
	
	scriptTag.innerText = texto;

	document.body.appendChild(scriptTag); 
}