function mostrarMensaje() {
  alert("¡Gracias por elegirnos! Reserva tu mesa en el formulario más abajo.");
}

document.getElementById("formReserva").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const nombre = document.getElementById("nombre").value;
  const personas = document.getElementById("personas").value;
  const fecha = document.getElementById("fecha").value;

  alert(`Reserva confirmada 🎉\nNombre: ${nombre}\nPersonas: ${personas}\nFecha: ${fecha}`);
  
  this.reset();
});
