const frases = [
    "Calculando nanosegundos...",
    "Insertando vida en reloj binario...",
    "¿Qué ritmo habitas?",
    "Cargando tiempo vital... error: no encontrado"
  ];
  
  let index = 0;
  setInterval(() => {
    document.getElementById("mensaje").textContent = frases[index];
    index = (index + 1) % frases.length;
  }, 1200);
  