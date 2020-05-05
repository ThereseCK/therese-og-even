
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


}

function test() {
    if (model.login.loggedInUser == null) {
        showLogIn();
    }

    else {
        userProfil();
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
    // her skal det sendes informasjon om ny bruker og legge den til i modell så han/hun også kan logge inn
    // hvis checkboks er krysset av skal brukerene få ett nyhetsbrev ( link til den) kan muligens legges til i brukeres profil
    
  }