  window.onload = init;
  function init(){
     id = 0;
      s = 0;
      m = 50;
      
      document.getElementById("hms").innerHTML="50:00";
  
  }     
  
  function cronometrar(){
    m = 50;
    s = 0;
   if(id){
       clearInterval(id)
   }
    escribir();
    id = setInterval(escribir,1000);
    document.getElementById('descanso').disabled = false
    document.getElementById('trabajo').disabled = true   
  }

  function escribir(){

      var hAux, mAux, sAux;
      s--;
      if (s<0){m--;s=59;}
      if (m>59){h++;m=0;}
  
      if (s<10){sAux="0"+s;}else{sAux=s;}
      if (m<10){mAux="0"+m;}else{mAux=m;}

  
      document.getElementById("hms").innerHTML =  mAux + ":" + sAux; 
      document.getElementById("title").innerHTML =  mAux + ":" + sAux; 
    console.log(m + " " + s)

      if(m < 1 && s == 0){
        parar()
        notificar()
       }
  }
  function parar(){
    m = 0
    s = 0
      clearInterval(id);

  
  }
  function reiniciar(){
      clearInterval(id);
      document.getElementById("hms").innerHTML="00:00:00";
      h=0;m=0;s=0;
  }
  
  Notification.requestPermission().then(function(result) {
    console.log(result);
    
  });

addEventListener("DOMContentLoaded", function(){
    if(!Notification){
        alert("las notificaciones no se soportan en tu navegador, actualiza a una versión más avanzada")

        return;
    }
    if(Notification.permission !== "granted"){
        Notification.requestPermission();
    }
})

function notificar(){
    if(Notification.permission !== "granted"){
        Notification.requestPermission();
    }else{
        var notification = new Notification("El tiempo ha terminado", {
            icon: "./logo.png",
            body: "A cada esfuerzo tiene su recompesa, mantente trabajando"
        })
    };
    notification.onclick = function(){
        window.open("http://127.0.0.1:5500/index.html")
    }
}


function cronometrarD(){
    clearInterval(id)
    m = 10;
    s = 0;
    escribir();
    id = setInterval(escribir,1000);
    document.getElementById('descanso').disabled = true
    document.getElementById('trabajo').disabled = false
}
  