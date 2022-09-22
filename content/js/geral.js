var tamanhoFonte = "20px";
var larguraBotao = "130px";
var alturaBotao = "60px";
var raioBordaBotao = "19px";

var tamanhoFonteModoRetrato = "10px";
var larguraBotaoModoRetrato = "80px";
var alturaBotaoModoRetrato = "40px";
var raioBordaBotaoModoRetrato = "8px";

var tamanhoFontePaisagem = "14px";
var larguraBotaoModoPaisagem = "80px";
var alturaBotaoModoPaisagem = "40px";
var raioBordaBotaoModoPaisagem = "8px";

window.addEventListener("orientationchange", function() {
	SetarTamanhosModoPaisagem();

	if(window.orientation == 0){
		SetarTamanhosModoRetrato();
	}
	else if(window.orientation == 90){
		SetarTamanhosModoPaisagem();
	}
}, false);

function SetarTamanhosModoPaisagem()
{
	SetarTamanhos(tamanhoFontePaisagem, larguraBotaoModoPaisagem, alturaBotaoModoPaisagem, raioBordaBotaoModoPaisagem);
}

function SetarTamanhosModoRetrato()
{
	SetarTamanhos(tamanhoFonteModoRetrato, larguraBotaoModoRetrato, alturaBotaoModoRetrato, raioBordaBotaoModoRetrato);
}

function SetarTamanhosPadrao(){
	SetarTamanhos(tamanhoFonte, larguraBotao, alturaBotao, raioBordaBotao);
}

function SetarTamanhos(fontSize, widthButton, heightButton, borderRadius){
	document.getElementById("Copyright").style.fontSize = fontSize;

	document.getElementById("LimparButton").style.fontSize = fontSize;
	document.getElementById("LimparButton").style.width = widthButton;
	document.getElementById("LimparButton").style.height = heightButton;
	document.getElementById("LimparButton").style.borderRadius = borderRadius;

	document.getElementById("ExecutarButton").style.fontSize = fontSize;
	document.getElementById("ExecutarButton").style.width = widthButton;
	document.getElementById("ExecutarButton").style.height = heightButton;
	document.getElementById("ExecutarButton").style.borderRadius = borderRadius;
}

function Saudacao(){
	var horaAtual = new Date().getHours();
	var saudacao = "";

	if(horaAtual >= 0 && horaAtual <= 6) {
		saudacao = "Boa madrugada, reservou um tempo para você descansar?";
	}
	else if(horaAtual > 6 && horaAtual < 12) {
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
	
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		SetarTamanhosModoRetrato();
    }else {
		SetarTamanhosPadrao();
	}
	
	document.getElementById("Copyright").style.display = "block";

	setTimeout(function () {
		Saudacao();
    }, 300);
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
	var result = confirm("Tem certeza?");
	
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