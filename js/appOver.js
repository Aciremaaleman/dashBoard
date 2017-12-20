var pagina = function() {
  var tabElementos = document.getElementsByClassName('tabs');
  for(var i = 0; i < tabElementos.length; i++){
    tabElementos[i].addEventListener('click',mostrar);
  }
}
var mostrar = function(event){
  var tabSeleccionado = event.target.dataset.tabSeleccionado;
  var tabuno = document.getElementById('infouno');
  var tabdos = document.getElementById('infodos');
  var tabtres = document.getElementById('infotres');
  var tabcuatro = document.getElementById('infocuatro');
  if(tabSeleccionado === 'tabuno'){
    tabdos.style.display = 'none';
    tabtres.style.display = 'none';
    tabuno.style.display = 'block';
    tabcuatro.style.display = 'none';
  } else if (tabSeleccionado === 'tabdos'){
    tabtres.style.display = 'none';
    tabuno.style.display = 'none';
    tabdos.style.display = 'block';
    tabcuatro.style.display = 'none';
  } else if (tabSeleccionado === 'tabtres'){
    tabuno.style.display = 'none';
    tabdos.style.display = 'none';
    tabtres.style.display = 'block';
    tabcuatro.style.display = 'none';
  } else if (tabSeleccionado === 'tabcuatro') {
    tabuno.style.display = 'none';
    tabdos.style.display = 'none';
    tabtres.style.display = 'none';
    tabcuatro.style.display = 'block';
  }
}
pagina();
