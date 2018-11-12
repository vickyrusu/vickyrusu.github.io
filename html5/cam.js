document.getElementById("id_bussiness_version").innerHTML = "Business version: 2018.11.12.1";
document.getElementById("id_button").addEventListener("click", start);


function on_success(e) {

    document.getElementById("id_video").srcObject = e;
}
//---------------------
function on_failure(e) {

    alert("eroare conectare");
}
//---------------
function start() {
    var c = { audio: true, video: true { facingMode: "environment" } };
    //accesare camera fata
    navigator.mediaDevices.getUserMedia(c).then(on_success).catch(on_failure);
}
//----------------