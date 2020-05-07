
function profil() {

    const username = model.login.usernameEntry;
    const password = model.login.passwordEntry;
    model.login.loggedInUser = null;
    for (let user of model.users) {
        if (user.email == username && user.password == password) {
            model.login.loggedInUser = username;
            model.login.error = '';
            break;
        }

    }
    if (model.login.loggedInUser == null) {
        model.login.error = 'Feil brukernavn og/eller passord.';
    }
    test();
    initMenu();


}

function test() {
    if (model.login.loggedInUser == null) {
        showLogIn();
    }

    else {
        userProfil();
        //Logg ut
    }
}





function findUser(username){
    for (let user of model.users) {
        if (user.email == username ){
            return user;
        }
    }
    return null;
}

function confirmBooking(){
    //Her skal det pushes inn informasjon om antall personer, og til hvilken event/catergory 
    //du melder deg på inn til model.
}

function submitNewUser() {
    
    // hvis checkboks er krysset av skal brukerene få ett nyhetsbrev ( link til den) kan muligens legges til i brukeres profil <- slu plan!
    let nameReg = document.getElementById('registerName').value;
    let adressReg = document.getElementById('registerAdress').value;
    let emailReg = document.getElementById('registerEmail').value;
    let phoneReg = document.getElementById('registerPhone').value;
    let newPasswordReg = document.getElementById('NewPassword').value;
    let confirmNewPasswordReg = document.getElementById('confirmNewPassword').value;
    let testID= model.users.length + 1; 
  
 
  console.log( typeof(nameReg.value));
    if(newPasswordReg === confirmNewPasswordReg && nameReg
     && adressReg
     && emailReg
     && phoneReg
    ){
      model.users.push({
    adress: `${adressReg}`,
      email: `${emailReg}`,
      id: `${testID}`,
      isAdmin: false,
      name: `${nameReg}`,
      password: `${confirmNewPasswordReg}`,
      phone: `${phoneReg}`,
      program:[],
})

home();
}
else{ 
    model.newUser.registerError = 'mangelfull utfylling'; 
    createUser();
    model.newUser.registerError = '';
      }
}
