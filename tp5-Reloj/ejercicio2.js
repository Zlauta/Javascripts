function relojConFechaYHoraActuales() {
  const now = new Date(Date.now());
  // Variable para ver la fecha como string y con numeros
  const fechaActual = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  // metodo para ver la fecha como strigns
  let fechaConNombreYNumero = now.toLocaleDateString("es-AR", fechaActual);
  // formateamos para que la primera letra empieze con mayuscula
  fechaConNombreYNumero =
    fechaConNombreYNumero.charAt(0).toUpperCase() +
    fechaConNombreYNumero.slice(1);

  // Hora actual con los ceros a la izquierda
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Determinar si es AM o PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convertir a formato de 12 horas
  hours = hours % 12;
  hours = hours ? hours : 12; // Si la hora es 0, mostrar 12

  const timeString = ` ${hours} : ${minutes}   `;
  const pmam = `${seconds} ${ampm}`;
  // para ver en el documento HTML
  const reloj = document.getElementById("reloj");
  const fecha = document.getElementById("fecha");
  const segundoPm = document.getElementById("segundoPm");

  fecha.textContent = fechaConNombreYNumero;
  reloj.textContent = timeString;
  segundoPm.textContent = pmam;
}

setInterval(relojConFechaYHoraActuales, 1000);
relojConFechaYHoraActuales();
