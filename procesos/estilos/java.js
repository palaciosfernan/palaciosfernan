function cargarOtraPagina(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            document.getElementById("contenido").innerHTML=xhr.responseText;
        }
    };
    xhr.open("GET","./otraPagina.html",true);
    xhr.send();
}