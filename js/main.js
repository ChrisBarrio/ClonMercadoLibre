const fila = document.querySelector('.contenedor-carousel');
const filaOfertas = document.querySelector('.carousel-ofertas');
const articulos = document.querySelectorAll('.articulo');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
const flechaIzquierdaOfertas = document.getElementById('flecha-izquierda-ofertas');
const flechaDerechaOfertas = document.getElementById('flecha-derecha-ofertas');

//-----------Carrousel-----------//

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
	
});
flechaIzquierdaOfertas.addEventListener('click', () => {
	filaOfertas.scrollLeft -= filaOfertas.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadoresOfertas .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
	
});

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
	
});
flechaDerechaOfertas.addEventListener('click', () => {
	filaOfertas.scrollLeft += filaOfertas.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadoresOfertas .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
	
});

//---------- articulo --------
articulos.forEach((articulo) => {
	articulo.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			articulos.forEach(articulo => articulos.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});



