let esatdolicuadora = "apagado";
const licuadora = document.getElementById('blender');
function controlarLicuadora() {

    if (esatdolicuadora == "apagado") {
        esatdolicuadora = "encendido";
        hacerBrr();
        licuadora.classList.add('active')
    } else {
        esatdolicuadora = "apagado";
        hacerBrr();
        licuadora.classList.remove('active');
    }
}
var sonidoLicuadora = document.getElementById('blender-sound');
var sonidoEncendidoBnt = document.getElementById('blender-button-sound');

function hacerBrr(){
    if(sonidoLicuadora.paused){
        sonidoEncendidoBnt.play();
        sonidoLicuadora.play();
    }else{
        sonidoEncendidoBnt.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime=0;
    }
}
