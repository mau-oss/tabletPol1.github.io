const usuarios = [
  { username: 'admin', password: '12345', nombre: 'Administrador' },
  { username: 'yoli', password: '1234', nombre: 'Yoli 007 - NPC01' },
  { username: 'blanca', password: '1234', nombre: 'Blanca padawan - NPC04' },
  { username: 'gonza', password: '1234', nombre: 'Gonzalo Antonio - NPC03' },
  { username: 'tarqui', password: '1234', nombre: 'Tarquino727 - VuelveMod' },
  { username: 'MILLS', password: '1234', nombre: 'La Putisima Jefa' },
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
