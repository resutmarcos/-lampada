const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );
alert (" nao clique na lampada");

function islampBroken (){
    return lamp.src.indexOf ('quebrada') > -1;
}

function lampOn () {
    if ( !islampBroken () ){
      lamp.src = './ligada.jpg';
    }
}
function lampOff () {
    if ( !islampBroken () ){
       lamp.src = './desligada.jpg';
    }
}
function lampBroken(){
    lamp.src = './quebrada.jpg'
}

turnOn.addEventListener ( "click", lampOn);
turnOff.addEventListener ( "click", lampOff);
lamp.addEventListener ('click', lampBroken);