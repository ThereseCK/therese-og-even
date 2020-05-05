function showLogIn() {
  model.userLoggedInn = true;
    let loginHTML = `<div>
      <input type="text" oninput="model.login.usernameEntry=this.value" placeholder="Brukernavn"> </input> <br>
      <input type="password" oninput="model.login.passwordEntry=this.value" placeholder="Passord"> </input> <br>
      <button onclick="profil()"> Logg Inn</button> <br>
      <span style="color: red">${model.login.error || ''}</span><br>
      <button onclick="adminMainPage()">Admin</button>
      <button onclick="createUser()">Registrer bruker</button>
      </div>
      `;
    document.getElementById("content").innerHTML = loginHTML;
  }

  
function showLogOut(){
  userLoggedInn = false;
  home();
}

function createUser() {
  document.getElementById("content").innerHTML = `
    <div>
    <input type="text" placeholder="Navn"></input> <br>
    <input type="text" placeholder="Brukernavn"></input> <br>
    <input type="text" placeholder="Epost"></input> <br>
    <input type="text" placeholder="TelefonNummer"></input> <br>
    <input type="password" placeholder="Nytt passord"></input> <br>
    <input type="password" placeholder="Bekreft Passord"></input> <br>
    <p>Registrer deg på nyhetsbrev</p> <input type="checkbox" ></input> <br>
    <button onclick="submitNewUser()">Bekreft</button>
    </div>`;
}



