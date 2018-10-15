document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.15.1";

function rezolva()
{
	//citire
   var a = document.getElementById("id_a").value;
   var b = document.getElementById("id_b").value;
   var c = document.getElementById("id_c").value;

   //rezolvare
     var delta = b*b-4*a*c;
     var x1_real, x1_imaginar, x2_real, x2_imaginar;
     if (delta >=0){
     	x1_real = (-b + Math.sqrt(delta)) / 2 * a;
        x2_imaginar = (-b - Math.sqrt(delta)) / 2 * a;
        x1_imaginar = x2_imaginar = 0;
     }
     else{
          x1_real = -b/(2*a);
          x1_imaginar = Math.sqrt(-delta) / (2*a);
          x2_real = -b/(2*a);
          x2_imaginar = -Math.sqrt(-delta) / (2*a);


     }


   //scriere

   document.getElementById("id_x1").innerHTML = x1_real + " +" + x1_imaginar + "i";
   document.getElementById("id_x2").innerHTML = x2_real + " +" + x2_imaginar + "i";
}