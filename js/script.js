const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 200) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: '',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'TU CORTESIA ES: ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'ACTIVIDAD:' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 22.5:
     premio("Testimonios y Asistencia Espiritual");
     break;
     case valor > 22.5 && valor <= 45:
     premio("Limpieza de Hermanos");
     break;
     case valor > 45 && valor <= 67.5:
     premio("Limpieza de Hermanas");
     break;
     case valor > 67.5 && valor <= 90:
     premio("Arreglos Florales"); 
     break; 
     case valor > 90 && valor <= 112.5:
     premio("Plantas y Cuidados");
     break;
     case valor > 112.5 && valor <= 135:
     premio("Souvenirs y Tarjetas");
     break;
     case valor > 135 && valor <= 157.5:
     premio("Enseñanzas");
     break;
     case valor > 157.5 && valor <= 180:
     premio("Juventud");
     break; 
     case valor > 180 && valor <= 202.5:
     premio("Tareas de Administracion");
     break;
     case valor > 202.5 && valor <= 225:
     premio("Mantenimiento de la Comunidad");
     break;
     case valor > 225 && valor <= 247.5:
     premio("Escuela de Musica");
     break;
     case valor > 247.5 && valor <= 270:
     premio("Refrigerios");
     break;
     case valor > 270 && valor <= 292.5:
     premio("Traslado de Abuelos");
     break;
     case valor > 292.5 && valor <= 315:
     premio("Venta de Revistas"); 
     break;
     case valor > 315 && valor <= 337.5:
     premio("Viajes al Interior");
     break;
     case valor > 337.5 && valor <= 360:
     premio("Coro de Jovenes");
     break;
  }

 }, 5000);

}
}