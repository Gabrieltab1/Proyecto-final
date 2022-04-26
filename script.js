
let piezas = document.querySelectorAll('.pieza');
let destinos = document.querySelectorAll('.box-espacio');


function inicioTraslado(event) {
	const src = event.target.getAttribute('src');
	event.dataTransfer.setData('text', src);
}

function finalDeTraslado(event) {
	console.log()

}

function soltarElemento(event) {
	let dataimagen = event.dataTransfer.getData('text');
	event.target.innerHTML = `<img class="piezaEncajada" src="${dataimagen}">`
}

function preventDefault(event) {
	event.preventDefault()
}

function reinicio() {
	destinos.forEach(destino => {
		destino.innerHTML = '<p>Arrastre y suelte la imágene aquí</p>';
	})
}


piezas.forEach((pieza) => {
	pieza.addEventListener('dragstart', inicioTraslado)
	pieza.addEventListener('dragend', finalDeTraslado)
})

destinos.forEach((destino) => {
	destino.addEventListener('dragover', preventDefault)
	destino.addEventListener('drop', soltarElemento)
})
