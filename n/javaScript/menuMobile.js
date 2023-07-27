// funções invocadas (on click button menu)

function abrirMenu(){
  openMenu()
  fxOpenLinks()

 }
 function fecharMenu(){
  closeMenu()
  fxCloseLinks()
 }

// funcões executadas (on click button menu)

 function openMenu(){
  document.getElementById("menu").style.height="100vh";
 } 
 function fxOpenLinks(){
  document.getElementById("contMenu").style.width="100%";
 }
 
 function fxCloseLinks(){
  document.getElementById("contMenu").style.width="0";
 }
function closeMenu(){
 document.getElementById("menu").style.height="0";
}

