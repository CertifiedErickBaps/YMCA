firebase.initializeApp({
  apiKey: "AIzaSyDpIIhrJE7H6E3_QkastcMA2PiJCDeL-oo",
  authDomain: "userymca-93033.firebaseapp.com",
  projectId: "userymca-93033"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();


// Agregar documentos
function guardar(){
	var clave = document.getElementById('clave').value;
	var nombreCompleto = document.getElementById('nombreCompleto').value;
	var calle = document.getElementById('calle').value;
	var numeroCalle = document.getElementById('numeroCalle').value;
	var colonia = document.getElementById('colonia').value;
	var delegacionMunicipio = document.getElementById('delegacionMunicipio').value;
	var postal = document.getElementById('postal').value;
	var telefono = document.getElementById('telefono').value;
	var telefono2 = document.getElementById('telefono2').value;
	var curp = document.getElementById('curp').value;
	var curpMom = document.getElementById('curpMom').value;
	var curpDad = document.getElementById('curpDad').value;
	var masculino = document.getElementById('masculino').value;
	var femenino = document.getElementById('femenino').value;
	var email = document.getElementById('email').value;
	var born = document.getElementById('born').value;
	var edad = document.getElementById('edad').value;


	db.collection("users").add({
	    Clave: clave,
	    Nombre: nombreCompleto,
	    Nacimiento: born,
	    Calle: calle,
	    NumeroCalle: numeroCalle,
	    Colonia: colonia,
	    DelegacionMunicipio: delegacionMunicipio,
	    Postal: postal,
	    Telefono: telefono,
	    TelefonoFijo: telefono2,
	    Curp: curp,
	    CurpMadre: curpMom,
	    CurpPadre: curpDad,
	    Masculino: masculino,
	    Femenino: femenino,
	    Email: email,
	    Nacimiento: born,
	    Edad: edad
	})
	.then(function(docRef) {
	    console.log("Document written with ID: ", docRef.id);
	    document.getElementById('clave').value = '';
	    document.getElementById('calle').value = '';
		document.getElementById('colonia').value = '';
		document.getElementById('delegacionMunicipio').value = '';
	 	document.getElementById('postal').value = '';
		document.getElementById('telefono').value = '';
		document.getElementById('telefono2').value = '';
	 	document.getElementById('curp').value = '';
		document.getElementById('curpMom').value = '';
		document.getElementById('curpDad').value = '';
		document.getElementById('masculino').value = '';
		document.getElementById('femenino').value = '';
		document.getElementById('email').value = '';
	 	document.getElementById('born').value = '';
	 	document.getElementById('edad').value = '';
	    document.getElementById('nombreCompleto').value = '';
	    document.getElementById('born').value = '';
	    document.getElementById('parentName').value = '';
	    document.getElementById('parentesco').value	= '';
	    document.getElementById('tipoPrograma').value = '';
	    document.getElementById('dia').value = '';
	    document.getElementById('fechaActual').value = '';
	})
	.catch(function(error) {
	    console.error("Error adding document: ", error);
	});	
}
