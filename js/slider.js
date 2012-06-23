/*
=================================================================================
SLIDER PARA TREINAMENTO PADAWAN
AUTOR: YUGI
DATA: 23/06/2012
=================================================================================
*/
var slide = 1;	//	controla qual imagem vai aparacer no slide
// *****************************************************************************
function browseSlider(){
	var img = document.getElementById('imgSlider');			// Acessa o Elemento imagem
	var imgFocus = img.src;									// Acessa o src da imagem
	var imgNew = imgFocus.substring(0,imgFocus.length-2);	// retira os 2 ultimos caracteres do src da imagem	
	var opc;
	
	for (var ct=1;ct<6;ct++){
		opc = document.getElementById('l'+ct);	//	faz a leitura do id dos links...
		if (slide == ct){
			img.src = imgNew + ct + "/";		//	troca o src da imagem
			opc.className = 'active';			//	altera classe do link ativo para classe [active]
		} else {	
			opc.className = '';					//	elimina classe dos links inativos
		}
	}
}
// *****************************************************************************
function alterImg(nPhoto){
	slide = nPhoto;
	browseSlider();
}