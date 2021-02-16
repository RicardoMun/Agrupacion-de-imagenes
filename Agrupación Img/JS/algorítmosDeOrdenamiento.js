/* FUncion para generar números aleatorios */
function rand(n){
    //creamos un numero al azar entre 1 y 6  
    return(Math.floor(Math.random() * n + 1 ));
} 

/* Creación de los arrays */
let grupoFamilia = new Array();
let futbolClub = new Array();
let basquetClub = new Array();
let inicial = 0;

/* Se asigna un valor random a la
posicion [0] del array */
grupoFamilia[inicial] = rand(6);
futbolClub[inicial] = rand(6);
basquetClub[inicial] = rand(6);

/* Se asignan valores random para
 las posiciones de las imágenes y se
 verifica que no se repitan */
for(let i=0; i<6; i++){
    grupoFamilia[i] = rand(6);
    for(let j=0; j<i; j++){
        if(grupoFamilia[i] == grupoFamilia[j]){
            i--;
        }
    }
}

for(let i=0; i<6; i++){
    futbolClub[i] = rand(6);
    for(let j=0; j<i; j++){
        if(futbolClub[i] == futbolClub[j]){
            i--;
        }
    }
}

for(let i=0; i<6; i++){
    basquetClub[i] = rand(6);
    for(let j=0; j<i; j++){
        if(basquetClub[i] == basquetClub[j]){
            i--;
        }
    }
}

/* Ya que en JS las variables hacer referencia
a cualquier valor pasamos como parametro un 
array para ordenar los arrays de imágenes */
function burbujaAscendente(array) {
	let aux;
	for(let i=1; i<array.length; i++) {
		for(let j = 0; j<(array.length - i); j++) {
			if (array[j] > array[j + 1]) {
			    aux = array[j];
			    array[j] = array[j + 1];
			    array[j + 1] = aux;
			}
		}
	}
}
function burbujaDescendente(array) {
	let aux;
	for (let i=1; i<array.length; i++) {
		for (let j = 0; j<(array.length - i); j++) {
			if (array[j] < array[j + 1]) {
			    aux = array[j];
			    array[j] = array[j + 1];
			    array[j + 1] = aux;
			}
		}
	}
}
function insercionAscendente(array) {
    let aux;
    for(let i=1; i<array.length; i++){
        aux = array[i];
        let j = 0;
        for( j=i-1; j >=0 && array[j]>aux; j--){
            array[j+1] = array[j];
        }
       array[j+1] = aux;
    }
}
function insercionDescendente(array) {
    let aux;
    for(let i=1; i<array.length; i++){
        aux = array[i];
        let j = 0;
        for(j = i-1; j >=0 && array[j]<aux; j--){
            array[j+1] = array[j];
        }
       array[j+1] = aux;
    }
}
function seleccionAscendente(array) {
	for(let i = 0; i < array.length -1 ; i++) {
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[i]) {
               let temp = array[i];
	           array[i] = array[j];
	           array[j] = temp;
            }
        }
    }
}
function seleccionDescendente(array) {
	for(let i = 0; i < array.length -1 ; i++) {
        for(let j = i+1; j < array.length; j++){
            if(array[j] > array[i]) {
               let temp = array[i];
	           array[i] = array[j];
	           array[j] = temp;
            }
        }
    }
}


/* Se selecciona el grupo de imágenes
para pasarle sus posiciones random */
function ordenarImagen(){
    let selectorGrupo = document.getElementById("selector_grupo").value;

    if(selectorGrupo === "1"){
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if(selectorGrupo === "2"){
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if(selectorGrupo === "3"){
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }
}

function showSelected() {
    /* Captura Valor de la lista despegable de los algoritmos /
    / Validar seleccion de la lista desplegable y el checkbox*/
    let seleccion = document.getElementById('algoritmo_seleccionado').value;
    let selectorGrupo = document.getElementById('selector_grupo').value;

        
    if((selectorGrupo === "1") && (seleccion === "1") && (document.getElementById("ascendente").checked)){
        burbujaAscendente(grupoFamilia);
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if((selectorGrupo === "2") && (seleccion === "1") && (document.getElementById("ascendente").checked)){
        burbujaAscendente(futbolClub);
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if((selectorGrupo === "3") && (seleccion === "1") && (document.getElementById("ascendente").checked)){
        burbujaAscendente(basquetClub);
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }else if((selectorGrupo === "1") && (seleccion === "1") && (document.getElementById("descendente").checked)){
        burbujaDescendente(grupoFamilia);
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if((selectorGrupo === "2") && (seleccion === "1") && (document.getElementById("descendente").checked)){
        burbujaDescendente(futbolClub);
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if((selectorGrupo === "3") && (seleccion === "1") && (document.getElementById("descendente").checked)){
        burbujaDescendente(basquetClub);
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }else if((selectorGrupo === "1") && (seleccion === "2") && (document.getElementById("ascendente").checked)){
        insercionAscendente(grupoFamilia);
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if((selectorGrupo === "2") && (seleccion === "2") && (document.getElementById("ascendente").checked)){
        insercionAscendente(futbolClub);
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if((selectorGrupo === "3") && (seleccion === "2") && (document.getElementById("ascendente").checked)){
        insercionAscendente(basquetClub);
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }else if((selectorGrupo === "1") && (seleccion === "2") && (document.getElementById("descendente").checked)){
        insercionDescendente(grupoFamilia);
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if((selectorGrupo === "2") && (seleccion === "2") && (document.getElementById("descendente").checked)){
        insercionDescendente(futbolClub);
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if((selectorGrupo === "3") && (seleccion === "2") && (document.getElementById("descendente").checked)){
        insercionDescendente(basquetClub);
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }else if((selectorGrupo === "1") && (seleccion === "3") && (document.getElementById("ascendente").checked)){
        seleccionAscendente(grupoFamilia);
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if((selectorGrupo === "2") && (seleccion === "3") && (document.getElementById("ascendente").checked)){
        seleccionAscendente(futbolClub);
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if((selectorGrupo === "3") && (seleccion === "3") && (document.getElementById("ascendente").checked)){
        seleccionAscendente(basquetClub);
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }else if((selectorGrupo === "1") && (seleccion === "3") && (document.getElementById("descendente").checked)){
        seleccionDescendente(grupoFamilia);
        for(let i=0; i<grupoFamilia.length; i++){
            let grupo1 = `Image/Familia/${grupoFamilia[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo1;
        }
    }else if((selectorGrupo === "2") && (seleccion === "3") && (document.getElementById("descendente").checked)){
        seleccionDescendente(futbolClub);
        for(let i=0; i<futbolClub.length; i++){
            let grupo2 = `Image/FutbolClubs/${futbolClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo2;
        }
    }else if((selectorGrupo === "3") && (seleccion === "3") && (document.getElementById("descendente").checked)){
        seleccionDescendente(basquetClub);
        for(let i=0; i<basquetClub.length; i++){
            let grupo3 = `Image/BasquetClubs/${basquetClub[i]}.png`;
            document.getElementById(`imagen${i}`).src = grupo3;
        }
    }
 
}
