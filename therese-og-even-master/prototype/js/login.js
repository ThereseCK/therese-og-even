function showLogIn() {
    let loginHTML = `<div>
      <input type="text" oninput="model.login.usernameEntry=this.value" value="Brukernavn"> </input> <br>
      <input type="text" oninput="model.login.passwordEntry=this.value" value="Passord"> </input> <br>
      <button onclick="profil()"> Logg Inn</button> <br>
      <span style="color: red">${model.login.error || ''}</span><br>
      <button onclick="adminMainPage()">Admin</button>
      <button onclick="createUser()">Registrer bruker</button>
      </div>
      `;
    document.getElementById("content").innerHTML = loginHTML;
  }

  
function createUser() {
  document.getElementById("content").innerHTML = `
    <div>
    <input type="text" value="Navn"></input> <br>
    <input type="text" value="Brukernavn"></input> <br>
    <input type="text" value="Epost"></input> <br>
    <input type="text" value="TelefonNummer"></input> <br>
    <input type="text" value="Nytt passord"></input> <br>
    <input type="text" value="Bekreft Passord"></input> <br>
    <p>Registrer deg på nyhetsbrev</p> <input type="checkbox"></input> <br>
    <button onclick="submitNewUser()">Bekreft</button>
    </div>`;
}

  function submitNewUser() {
    // for(i = 0; i < model.users.length; i++)

  }


