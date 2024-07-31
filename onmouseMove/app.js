for(var i=0;i<350;i++){
    let box = document.createElement('span');
    document.getElementById('container').appendChild(box);
}
let courser =document.getElementById('courser');
window.onmousemove= function(e){
    courser.style.left = e.clientX +'px';
    courser.style.top = e.clientY +'px';
}