$('#experiencia_1').hide()
$('#educacion_1').hide()
$('#habilidades_1').hide()
$('#contactos_1').hide()
$('#direccion_1').hide()

$("#1").click(function(){
    $("#contactos_1").fadeOut(0);
    $("#experiencia_1").fadeOut(0);
    $("#educacion_1").fadeOut(0);
    $("#habilidades_1").fadeOut(0);
    $("#habilidades_1").fadeOut(0);
    $("#direccion_1").fadeOut(0);
    $("#descripcion_1").fadeIn(1000);
})
$("#2").click(function(){
    $("#descripcion_1").fadeOut(0);
    $("#educacion_1").fadeOut(0);
    $("#habilidades_1").fadeOut(0);
    $("#direccion_1").fadeOut(0);
    $("#contactos_1").fadeOut(0);
    $("#experiencia_1").fadeIn(1000);
})
$("#3").click(function(){
    $("#descripcion_1").fadeOut(0);
    $("#experiencia_1").fadeOut(0);
    $("#habilidades_1").fadeOut(0);
    $("#contactos_1").fadeOut(0);
    $("#educacion_1").fadeIn(1000);
})
$("#4").click(function(){
    $("#descripcion_1").fadeOut(0);
    $("#direccion_1").fadeOut(0);
    $("#experiencia_1").fadeOut(0);
    $("#educacion_1").fadeOut(0);
    $("#contactos_1").fadeOut(0);
    $("#habilidades_1").fadeIn(1000);
})
$("#5").click(function(){
  $("#descripcion_1").fadeOut(0);
  $("#experiencia_1").fadeOut(0);
  $("#habilidades_1").fadeOut(0);
  $("#educacion_1").fadeOut(0);
  $("#contactos_1").fadeOut(0);
  $("#direccion_1").fadeIn(1000);
})

$("#6").click(function(){
    $("#descripcion_1").fadeOut(0);
    $("#experiencia_1").fadeOut(0);
    $("#direccion_1").fadeOut(0);
    $("#habilidades_1").fadeOut(0);
    $("#educacion_1").fadeOut(0);
    $("#contactos_1").fadeIn(1000);
})

var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

$("#enviar").click(function(){
  alert("Gracias por contactarse conmigo, me pondré en contacto con usted en la brevedad posible")
})