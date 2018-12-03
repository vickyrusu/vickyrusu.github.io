document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.12.03.0";

window.addEventListener("deviceorientation", on_device_orientation);
window.addEventListener("devicemotion", on_device_motion);

//------------------------------------------------------
function on_device_orientation(e) {

    var R = 20;
    var svg = document.getElementById("id_svg");
    var circle = document.getElementById("id_circle");
    circle.setAttribute("cx", svg.width / 2 + e.gamma / 90 * (svg.width / 2 - R));
    circle.setAttribute("cy", svg.width / 2 + e.beta / 90 * (svg.width / 2 - R));

}
//------------------------------------------------------