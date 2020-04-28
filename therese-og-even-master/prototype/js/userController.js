
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

function userJoinSession(){
    document.getElementById('content').innerHTML = `
    <br>
    <div>
    Du er nå meldt på:<br>
    navn:<br><br>
    klokka:<br><br>
    <b>Husk yogamatte!<b>
    <p style="color: green;">Vipps 150kr til 900 00 000</p>
   </div>
    `;
}