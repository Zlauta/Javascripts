const usuarios = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Marta", edad: 29 },
  { nombre: "Pedro", edad: 41 },
];

usuarios.forEach((mostrar) => console.log(mostrar.nombre, mostrar.edad));

console.log("Mayores de 30");
usuarios.forEach((usuario) => {
  if (usuario.edad > 30) {
    console.log(usuario.nombre, usuario.edad);
  }
});
