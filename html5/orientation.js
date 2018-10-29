document.getElementById("id_ussiness_version").innerHTML = "bussiness version: 2018.10.29.0";
window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(e) {

    document.getElementById("id_alpha").innerHTML = e.alpha;
    document.getElementById("id_alpha").innerHTML = e.beta;
    document.getElementById("id_alpha").innerHTML = e.gamma;


}