const usuarios = [
   { 	username: 'admin', 
	password: '12345',
	nombre: 'Administrador',
	Rol: 'SolSerio',
	drama: '99%',
	avatarusuario: 'fotos/Revy.jpg',
	insignia: 'fotos/Revy.jpg'
},
{ 	username: 'yoli', 
	password: '1234',
	nombre: 'Yoli 007 - NPC01',
	Rol: 'Moderadora Lider',
	drama: '70% Drama',
	avatarusuario: 'fotos/yoli1.png',
	insignia: ''
},
{ 	username: 'blanca', 
	password: '1234',
	nombre: 'Blanca Padawan - NPC05',
	Rol: 'Moderadora Padawan',
	drama: '1000% Drama',
	avatarusuario: 'fotos/blanca.png',
	insignia: ''
},
{ 	username: 'gonza', 
	password: '1234',
	nombre: 'Gonzalo Antonio - NPC04',
	Rol: 'Moderador Deportista',
	drama: '80% Ira',
	avatarusuario: 'fotos/gonza.png',
	insignia: ''
},

{ 	username: 'mills', 
	password: '1234',
	nombre: 'Milagros - La Putisima Jefa',
	Rol: 'La Putisima Jefa',
	drama: '75% Funada',
	avatarusuario: 'fotos/mills1.png',
	insignia: ''
},
{ 	username: 'mauri', 
	password: '1234',
	nombre: 'Mauritxio - NPC06',
	Rol: 'Moderador Rookie',
	drama: '100% Metemierda',
	avatarusuario: 'fotos/mauri1.png',
        insignia: ''
},
{ 	username: 'azen', 
	password: '1234',
	nombre: 'Azengarth - Azen a secas',
	Rol: 'Bienvenida Invasora',
	drama: '75% Rageo',
	avatarusuario: 'fotos/azen1.png',
	insignia: ''
},
{ 	username: 'padrino', 
	password: '1234',
	nombre: 'Padrino61 - Laburando',
	Rol: 'Moderadora en Laburo y jugando',
	drama: '40% Drama',
	avatarusuario: 'fotos/padrino.png',
	insignia: ''
},
{ 	username: 'tarqui', 
	password: '1234',
	nombre: 'Tarquino727 - VuelveMod',
	Rol: 'VIP Sin Mod por vacaciones',
	drama: '70% Chisme',
	avatarusuario: 'fotos/tarqui.png',
	insignia: ''
},
{ 	username: 'malayo', 
	password: '1234',
	nombre: 'Mr_Malayo',
	Rol: 'VIP en ascenso',
	drama: '40% Chisme',
	avatarusuario: 'fotos/malayo.png',
	insignia: ''
}



   // Puedes seguir agregando más usuarios con sus ítems temáticos aquí 👇
// Agrega más usuarios aquí 👇
];


function login() {
  const userInput = document.getElementById('user').value;
  const passInput = document.getElementById('pass').value;

  const usuario = usuarios.find(u => u.username === userInput && u.password === passInput);

  if (usuario) {
    document.getElementById('loginPanel').style.display = 'none';
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('mainContent').style.display = 'block';

    // Mostrar nombre del usuario arriba a la izquierda
    document.getElementById('nombre-usuario').textContent = `👤 ${usuario.nombre}`;
    document.getElementById('nombrePerfil').textContent = `Nombre: 👤 ${usuario.nombre}`;
    document.getElementById('rolPerfil').textContent = `ROL: 👤 ${usuario.Rol}`;
    document.getElementById('nivelDrama').textContent = `Composición: 👤 ${usuario.drama}`;
    document.getElementById('imagenFlotante').src =  `${usuario.avatarusuario}`;
    document.getElementById('insigniaEsp').textContent = `👤 ${usuario.insignia}`;

  } else {
    alert('Credenciales incorrectas 🚨');
  }
}

 function showSection(id) {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => section.classList.remove('active'));
      document.getElementById(id).classList.add('active');

    }

function irADenuncia() {
  alert("Lamentablemente los circuitos se quemaron con tanto lloro, quizas a la proxima se puede...");
  // Puedes usar window.location.href si lo necesitas
}

 


//pruebas 

function girarTarjeta(event) {
  const contenedor = event.target.closest('.tramite-container');
  contenedor.classList.add('flipped');
  // const audio = new Audio('audios/wiwia.mp3');
  //audio.volume = 0.1;// Reemplaza con la ruta correcta
  //audio.play();

}

function enviarFormulario(event) {
  const tarjeta = event.target.closest('.tarjsolicitud');
  const nombreInput = tarjeta.querySelector('input');
  const motivoTextarea = tarjeta.querySelector('textarea');
  const contenedor = event.target.closest('.tramite-container');

  const nombre = nombreInput.value.trim();
  const motivo = motivoTextarea.value.trim();

  // Eliminar botones de error anteriores si existen
  const errorPrevio = tarjeta.querySelector('.acciones-error');
  if (errorPrevio) {
    errorPrevio.remove();
  }

  // Validación
  if (!nombre || !motivo) {
  // 🚨 Alerta directa
  alert("Debes completar todos los campos antes de enviar.");
  contenedor.classList.remove('flipped');


  
  // 🛠 Crear contenedor de acciones si no existe ya
  let acciones = tarjeta.querySelector('.acciones-error');
  if (!acciones) {
    acciones = document.createElement('div');
    acciones.classList.add('acciones-error');

    const reintentarBtn = document.createElement('button');
    reintentarBtn.textContent = 'Reintentar';
    reintentarBtn.onclick = () => {
      acciones.remove();
      nombreInput.classList.remove('error');
      motivoTextarea.classList.remove('error');
    };

    const cancelarBtn = document.createElement('button');
    cancelarBtn.textContent = 'Cancelar';
    cancelarBtn.onclick = () => {
      acciones.remove();
      contenedor.classList.remove('flipped');
      nombreInput.classList.remove('error');
      motivoTextarea.classList.remove('error');
    };

    acciones.appendChild(reintentarBtn);
    acciones.appendChild(cancelarBtn);
    tarjeta.appendChild(acciones);
  }

  return;
}


  // Envío exitoso

  alert(`Formulario enviado por ${nombre}, motivo: ${motivo}`);


  // Limpiar campos
  nombreInput.value = "";
  motivoTextarea.value = "";

  // Girar tarjeta de vuelta
  contenedor.classList.remove('flipped');
}

 function mostrarMensaje() {
    alert("💧 Hay más formas de llorar... incluso en patrullaje.");
  }

//-- formulario pedir id --
function enviarFormularioPID(event) {
  const tarjeta = event.target.closest('.tarjsolicitud');
  const nombreInput = tarjeta.querySelector('input');
  const motivoTextarea = tarjeta.querySelector('textarea');
  const contenedor = event.target.closest('.tramite-container');

  const nombre = nombreInput.value.trim();
  const motivo = motivoTextarea.value.trim();

  // Eliminar botones de error anteriores si existen
  const errorPrevio = tarjeta.querySelector('.acciones-error');
  if (errorPrevio) {
    errorPrevio.remove();
  }

  // Validación
  if (!nombre || !motivo) {
  // 🚨 Alerta directa
  alert("Debes completar todos los campos antes de enviar.");
  contenedor.classList.remove('flipped');


  
  // 🛠 Crear contenedor de acciones si no existe ya
  let acciones = tarjeta.querySelector('.acciones-error');
  if (!acciones) {
    acciones = document.createElement('div');
    acciones.classList.add('acciones-error');

    const reintentarBtn = document.createElement('button');
    reintentarBtn.textContent = 'Reintentar';
    reintentarBtn.onclick = () => {
      acciones.remove();
      nombreInput.classList.remove('error');
      motivoTextarea.classList.remove('error');
    };

    const cancelarBtn = document.createElement('button');
    cancelarBtn.textContent = 'Cancelar';
    cancelarBtn.onclick = () => {
      acciones.remove();
      contenedor.classList.remove('flipped');
      nombreInput.classList.remove('error');
      motivoTextarea.classList.remove('error');
    };

    acciones.appendChild(reintentarBtn);
    acciones.appendChild(cancelarBtn);
    tarjeta.appendChild(acciones);
  }

  return;
}


  // Envío exitoso
const audio = new Audio('audios/titanic.mp3');
  audio.volume = 0.3;// Reemplaza con la ruta correcta
  audio.play();
  alert(`Quieres Pedir ID? , pues ${nombre} puedes agarrar el pedir id y guardarlo donde mas te guste`);

  // Limpiar campos
  nombreInput.value = "";
  motivoTextarea.value = "";

  // Girar tarjeta de vuelta
  contenedor.classList.remove('flipped');
}

//-- formulario denuncia --
function enviarFormularioDenuncia(event) {
  const tarjeta = event.target.closest('.tarjsolicitud');
  const nombreInput = tarjeta.querySelector('input');
  const motivoTextarea = tarjeta.querySelector('textarea');
  const contenedor = event.target.closest('.tramite-container');

  const nombre = nombreInput.value.trim();
  const motivo = motivoTextarea.value.trim();

  // Eliminar botones de error anteriores si existen
  const errorPrevio = tarjeta.querySelector('.acciones-error');
  if (errorPrevio) {
    errorPrevio.remove();
  }

  // Validación
  if (!nombre || !motivo) {
  // 🚨 Alerta directa
  alert("Debes completar todos los campos antes de enviar.");
  contenedor.classList.remove('flipped');


  
  // 🛠 Crear contenedor de acciones si no existe ya
  let acciones = tarjeta.querySelector('.acciones-error');
  if (!acciones) {
    acciones = document.createElement('div');
    acciones.classList.add('acciones-error');

    const reintentarBtn = document.createElement('button');
    reintentarBtn.textContent = 'Reintentar';
    reintentarBtn.onclick = () => {
      acciones.remove();
      nombreInput.classList.remove('error');
      motivoTextarea.classList.remove('error');
    };

    const cancelarBtn = document.createElement('button');
    cancelarBtn.textContent = 'Cancelar';
    cancelarBtn.onclick = () => {
      acciones.remove();
      contenedor.classList.remove('flipped');
      nombreInput.classList.remove('error');
      motivoTextarea.classList.remove('error');
    };

    acciones.appendChild(reintentarBtn);
    acciones.appendChild(cancelarBtn);
    tarjeta.appendChild(acciones);
  }

  return;
}


  // Envío exitoso
  alert(`Gracias ${nombre} por enviar tu denuncia, la denuncia será respondida en un lapso de 1 a 5 años. Eso si es que tienes suerte`);

  // Limpiar campos
  nombreInput.value = "";
  motivoTextarea.value = "";

  // Girar tarjeta de vuelta
  contenedor.classList.remove('flipped');

}

function reproducirAudio() {
  const audio = new Audio('audios/jefa.mp3');
  audio.volume = 0.3;// Reemplaza con la ruta correcta
  audio.play();// Asegúrate de que la ruta sea correcta
}

document.querySelectorAll('.tarjetaswat').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });

  });

//-- NUEVO REPORTES --

document.getElementById('mostrarInventario').addEventListener('click', () => {
  document.getElementById('modalReportes').style.display = 'block';
  document.getElementById('modalDenuncias').style.display = 'none';
});

document.getElementById('mostrarInventarioD').addEventListener('click', () => {
  document.getElementById('modalDenuncias').style.display = 'block';
  document.getElementById('modalReportes').style.display = 'none';
gifOeste.style.display = 'none';
});


function procesarReporte() {
  const numReporte = document.getElementById('inputReporte').value;
  const cargando = document.getElementById('cargando');
  const gifOeste = document.getElementById('gifOeste');
  const modalReporte = document.getElementById('modalReporte');
  const modalFinal = document.getElementById('modalFinal');

  modalReportes.style.display = 'none';

  // Paso 1: Mostrar "Cargando"
  cargando.style.display = 'block';
  gifOeste.style.display = 'none';
  modalReporte.style.display = 'none';
  modalFinal.style.display = 'none';

  // Paso 2: Mostrar mensaje "Tu reporte es:"
  setTimeout(() => {
    cargando.style.display = 'none';
    modalReporte.style.display = 'block';

    // Paso 3: Mostrar mensaje "Tu reporte está listo"
    setTimeout(() => {
      modalReporte.style.display = 'none';
      modalFinal.style.display = 'block';

      // Paso 4: Mostrar gif
      setTimeout(() => {
        modalFinal.style.display = 'none';
        gifOeste.style.display = 'block';

        // Paso 5: limpiar input
        document.getElementById('inputReporte').value = '';

      }, 4000);

    }, 4000);

  }, 4000);
}
function procesarDenuncia() {
  const numReporte = document.getElementById('inputDenuncia').value;
  const cargando = document.getElementById('cargando1');
  const gifdenuncia = document.getElementById('gifdenuncia');
  const modalReporte = document.getElementById('modalReporte1');
  const modalFinal = document.getElementById('modalFinal1');

  modalDenuncias.style.display = 'none';

  // Paso 1: Mostrar "Cargando"
  cargando.style.display = 'block';
  gifdenuncia.style.display = 'none';
  modalReporte.style.display = 'none';
  modalFinal.style.display = 'none';

  // Paso 2: Mostrar mensaje "Tu reporte es:"
  setTimeout(() => {
    cargando.style.display = 'none';
    modalReporte.style.display = 'block';

    // Paso 3: Mostrar mensaje "Tu reporte está listo"
    setTimeout(() => {
      modalReporte.style.display = 'none';
      modalFinal.style.display = 'block';

      // Paso 4: Mostrar gif
      setTimeout(() => {
        modalFinal.style.display = 'none';
        gifdenuncia.style.display = 'block';
      }, 5000);

    }, 4000);

  }, 4000);
}

 //----estadistica ----


	document.addEventListener('DOMContentLoaded', function () {
		const botonFunas = document.getElementById('btnConsultarFunas');
                const botonRanking = document.getElementById('btnRankingFunadas');
		const gif = document.getElementById('funasGifConteo');
		const resultado = document.getElementById('funasResultado');
		const cantidad = document.getElementById('funasCantidad');
		const resultadoRK = document.getElementById('funasResultadoRK');
		const btnCerrarRK = document.getElementById('btnCerrarFunasRK');
		const rankingBox = document.getElementById('funasResultadoRK');
		const btnCerrar = document.getElementById('btnCerrarFunas');
		const rankingBoxf = document.getElementById('funasResultado');


		botonFunas.addEventListener('click', function () {
			gif.style.display = 'block';
			resultado.style.display = 'none';
			let totalFunas = 0;
			const finalFunas = 4; // Ajusta según tu fuente real
			const intervalo = setInterval(() => {
				totalFunas++;
				cantidad.textContent = totalFunas;
				if (totalFunas >= finalFunas) {
					clearInterval(intervalo);
					gif.style.display = 'none';
					resultado.style.display = 'block';
				}
			}, 1000);
		});
		botonRanking.addEventListener('click', function () {
			alert("🔍 Cargando ranking de personas más dramáticas... (conectamos a los registros de la comunidad)");
			gif.style.display = 'block';
			resultado.style.display = 'none';
			let totalFunas = 0;
			const finalFunas = 4; // Ajusta según tu fuente real
			const intervalo = setInterval(() => {
				totalFunas++;
				cantidad.textContent = totalFunas;
				if (totalFunas >= finalFunas) {
					clearInterval(intervalo);
					gif.style.display = 'none';
					resultadoRK.style.display = 'block';
				}
			}, 1000);
		});
		btnCerrar.addEventListener('click', function () {
		rankingBoxf.style.display = 'none';
		});
		btnCerrarRK.addEventListener('click', function () {
		rankingBox.style.display = 'none';
		});


	});

function mostrarInsignias() {
	const box = document.getElementById('insigniasBox');
	box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

function activarAnimacion() {
 

  const imagen = document.getElementById('imagenFlotante');
  imagen.style.display = 'block';

  // Ocultarla después de unos segundos
  setTimeout(() => {
    imagen.style.display = 'none';
  }, 10000);
}

const mapImg = document.getElementById('map-img');
const mapContainer = document.getElementById('map-container');

mapImg.addEventListener('click', function(e) {
  const rect = mapImg.getBoundingClientRect();
  const x = e.pageX - rect.left - window.scrollX;
  const y = e.pageY - rect.top - window.scrollY;

  const marker = document.createElement('div');
  marker.classList.add('marker');
  marker.style.left = `${x}px`;
  marker.style.top = `${y}px`;

  mapContainer.appendChild(marker);
});

function abrirWeb3D() {
  document.getElementById('web3D').style.display = 'block';
}

function cerrarWeb3D() {
  document.getElementById('web3D').style.display = 'none';
}

