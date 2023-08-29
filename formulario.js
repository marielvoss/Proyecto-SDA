const formulario = document.getElementById('form');
formulario.addEventListener('submit', (e)) => {
	e.preventDefault(e);
    const datos = {
		correo: formulario.correo.value,
		telefono: formulario.pais.value,
		donacion: formulario.donacion.value,
		fecha: formulario.fecha.value,
		
	};
}
