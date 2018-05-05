function registrar(){
	var inputEmail = document.getElementById('inputEmail').value;
	var inputPassword = document.getElementById('inputPassword').value;
	
	firebase.auth().createUserWithEmailAndPassword(inputEmail, inputPassword)
	.then(function(){
		verificar()
	})

	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage);
	  // ...
	});



}

function ingresar(){
	var	inputEmail2 = document.getElementById('inputEmail2').value;
	var inputPassword2 = document.getElementById('inputPassword2').value;

	firebase.auth().signInWithEmailAndPassword(inputEmail2, inputPassword2)
	.catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage);
	  // ...
	});
}

function observa(){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	console.log('Existe usuario activo');
	  	display(user);
	    // User is signed in.
	    var displayName = user.displayName;
	    var email = user.email;
	    
	    console.log('*****************************');
	    console.log(user.emailVerified)
	    console.log('*****************************');

	    var emailVerified = user.emailVerified;
	    var photoURL = user.photoURL;
	    var isAnonymous = user.isAnonymous;
	    var uid = user.uid;
	    var providerData = user.providerData;
	    // ...
	  } else {
	    // User is signed out.
	    // ...
	    console.log('no existe usuario activo')
	    contenido.innerHTML = `

		`;	
	  }
	});
}
observa();

function display(user){
	var user = user;
	var contenido = document.getElementById('contenido');
	
	if(user.emailVerified){
		contenido.innerHTML = `
        <div class="container mt-5">
	      <div class="alert alert-success" role="alert">
	        <h4 class="alert-heading">Bienvenido ${user.email}!</h4>
	        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
	        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
	      </div>
	      <a class="btn btn-success" href="solicitud1.html" role="button">Entrar</a>
	      <button onclick="cerrar()" class="btn btn-danger">Cerrar sesión</button>

	    </div>
	    
		`;	
	}
	
}

function cerrar(){
	firebase.auth().signOut()
	.then(function(){
		console.log('Saliendo...')
	})
	.catch(function(error){
		console.log(error)
	})
}

function verificar(){
	var user = firebase.auth().currentUser;

	user.sendEmailVerification().then(function() {
	  // Email sent.
	  console.log('Enviando correo...');
	}).catch(function(error) {
	  // An error happened.
	  console.log(error);
	});
}