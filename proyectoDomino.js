var puntuacion = [];
var puntuacionTotal = 0;
window.onload = function obtenerFichas(){
	var divFichas = document.getElementById("fichas");
	var fichasDomino = [];
	var fichasDominoDesorden = [];
	var counter = 0;
	var serieImprimir = 1;
	var serieImprimirAux = 1;
	var fichasMostrar = "";
	var paragraphTextX = "";
	var paragraphTextY = "";
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j <= i; j++) {
			fichasDomino.push([i,j]);
			counter+=1;
		};
	};
	fichasDominoDesorden = fichasDomino.slice(0);
	fichasDominoDesorden = fichasDominoDesorden.sort(function() {return Math.random() - 0.5});
	// document.write(fichasDominoDesorden); // imprime por ejemplo: 7,9,1,5,2,3,6,4,8;
	// fichasMostrar +="<table>"
	for (i = 0; i < 28; i++) {
		// fichasMostrar += "<tr>";
		//empieza en 0 pero la primera es la que sobra
		
		fichasMostrar +=  "<button style='border-style: solid;border-width: 5px;opacity: 0.8; background: #14ADAD; color: #14ADAD;' class='btn btn-info btn-xs' onclick=validarPieza(this) id='" + fichasDominoDesorden[i] + "' name='"+fichasDomino[i]+"'>";
		for (j = 0; j < 2; j++) {
			// fichasDomino[i,j]
			if (j == 0) {
				for (var k = 0; k < fichasDominoDesorden[i][j]; k++) {
					if (fichasDominoDesorden[i][j] == 0) {
						paragraphTextX += ' <span><br></span>';
					}else{
						if ((k%2) == 0) {
							paragraphTextX += ' <span class="glyphicon glyphicon-unchecked"></span>';
						}else{
							paragraphTextX += ' <span class="glyphicon glyphicon-unchecked"></span><br>';
						}
					}
					
				};
				// fichasMostrar += fichasDomino[i][j] + "<hr>";
				fichasMostrar += paragraphTextX + "<hr>";
			}else{
				for (var l = 0; l < fichasDominoDesorden[i][j]; l++) {
					if (fichasDominoDesorden[i][j] == 0) {
						paragraphTextY += ' <span><br></span>';
					}else{
						if ((l%2) == 0) {
							paragraphTextY += ' <span class="glyphicon glyphicon-unchecked"></span>';
						}else{
							paragraphTextY += ' <span class="glyphicon glyphicon-unchecked"></span><br>';
						}
					}
					
				};
				fichasMostrar += paragraphTextY;
			}
		};
		fichasMostrar +=  "</button>";
		console.log(serieImprimir);
		if (i==0) {
			fichasMostrar += "<br>";
		}else{
			if (i == serieImprimir+serieImprimirAux) {
				fichasMostrar += "<br>";
				serieImprimirAux += 1;	
				serieImprimir += serieImprimirAux;
			};
		}
		
		// serieImprimir = serieImprimir + serieImprimirAux;
		
		// fichasMostrar += "</tr>";
		paragraphTextX = "";
		paragraphTextY = "";
	};
	// fichasMostrar += "</table>";
	divFichas.innerHTML = fichasMostrar;
	document.getElementsByName("0,0")[0].style="position:absolute;margin-top:290px;margin-left:800px;";
	document.getElementsByName("0,0")[0].onclick ="";	
	if (document.getElementsByName("0,0")[0].id == "0,0") {
		// alert("arreglar");
		obtenerFichas();
	};
}

function validarPieza(pieza){
	pieza.style="opacity: 0.8;background: #000000; color:#fff";
	if(document.getElementsByName("0,0")[0].id == pieza.name){
		// el id contiene la pieza(los numeros)
		// el name la posicion pieza a reemplazar
		var numeroFichas = document.getElementsByName("0,0")[0].id;
		puntuacion = numeroFichas.split(",");
		var idCambiar = document.getElementsByName("0,0")[0].id;
		var textCambiar = document.getElementsByName("0,0")[0].innerHTML;
		document.getElementsByName("0,0")[0].id = pieza.id; 
		document.getElementsByName("0,0")[0].innerHTML = pieza.innerHTML; 
		pieza.id = idCambiar;
		pieza.innerHTML = textCambiar;
		pieza.onclick ="";
		// console.log(puntuacion);
		for (var i = 0; i < puntuacion.length; i++) {
			puntuacionTotal += parseInt(puntuacion[i]);
		};
		document.getElementById("puntuar").innerHTML = "Puntuación: " + puntuacionTotal;
		// alert(pieza.style.color);

	}else{
		setTimeout(function(){	         
	        pieza.style="opacity: 0.8;background: #14ADAD; color: #14ADAD;";
		   },3000);
		alert("Lugar incorrecto");
	}
	if (document.getElementsByName("0,0")[0].id == "0,0") {
		alert("Ganaste");
		var puntosAdicionalesFilas = true;
		// verificar filas:
		for (var i = 1; i < 7; i++) {
			for (var j = 0; j < i+1; j++) {
				if (document.getElementById(i+","+j).style.color!="rgb(255, 255, 255)") {
					puntosAdicionalesFilas = false;
				}
			};
			if (puntosAdicionalesFilas == true) {
				puntuacionTotal += i;
				// alert("se dio"+ i);
			};
			puntosAdicionalesFilas == true;
		};
		document.getElementById("puntuar").innerHTML = "Puntuación: " + puntuacionTotal + " Game over!";
		// if (confirm('¿Quieres volver a jugar?')){
		// 	alert('Buena suerte!');
		// 	location.reload();
		// }else{
		// }
		// if (document.getElementById("1,0").style.color=="rgb(255, 255, 255)" && document.getElementById("1,1").style.color=="rgb(255, 255, 255)") {
		// 	puntuacionTotal += 1;
		// };
		
	};
	// pieza.style="opacity: 0.8;background: #000000; color:#fff";
	// if (pieza.id==pieza.name) {
	// 	alert("esta bien");
	// }else{
	// 	alert("no es su posicion");
	// }
}


