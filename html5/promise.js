function f(resolve, reject) {
    //------face multe operatii
    resolve(":D");
    //reject(":(");

}
//---------------------------------
function on_success(e) {
    console.log("Success:" + e);
}
//-------------------------------------
function on_failure(e) {

    console.log("Failure:" + e);
}
//-------------------------
function start() {
    var promise = new Promise(f);
    console.log("Before promise is created");
    //in functia f interogam camera
    promise.then(on_success, on_failure);
    console.log("End of start function");
}
//-------------------------