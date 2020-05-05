

function showInfo() {
  let test = "";
  let test2 = "";
  let test3 = "";

  const categoryId = model.selectedCategoryId;
  const categories = model.categories.filter(
    cat => cat.category === categoryId
  );
  const selectedCategory = model.categories.filter(
    cat => cat.id === categoryId
  )[0];
  if (selectedCategory) {
    // const catName = categories.map(b => b.name).join(" ");
    // const info = categories.map(n => n.info).join(" ");

    model.categories[model.selectedCategoryId - 1].info == null
      ? (test = "")
      : (test = model.categories[model.selectedCategoryId - 1].info);
      model.categories[model.selectedCategoryId - 1].info == null
      ? (test2 = "")
      : (test2 = model.categories[model.selectedCategoryId - 1].name);
      model.categories[model.selectedCategoryId - 1].info == null
      ? (test3 = "")
      : (test3 = model.categories[model.selectedCategoryId - 1].date);
    categories.push({
      id: selectedCategory.category,
      name: `<p class="goBack">⇦</p>`,
      info: ""
    });

  }


  const courses = model.categories.filter(
    cat => cat.category === categoryId
  );
  document.getElementById("content").innerHTML = `
    <div> 
     
        ${categories
          .map(
            cat => `<div>
        <button class="infoButton" onclick="selectCategory(${cat.id})">${cat.name}</button></div>
         
        `
          )
          .join("")} 
        
        <hr>
      ${test}  
      <br>      
      
   
    <div> ${test2}<br>
    ${test3}
    </div>  
        
        `;
}

function selectCategory(id) {
  model.selectedCategoryId = id;
  showInfo();
}

function initMenu() {
  // let edittext = model.menuOptions.map(n => n.loggedInn);
  // let edittext2 = model.menuOptions.map(n => n.txt);
  // let loggedInOrNot = edittext == true ? 'Logg Ut' : "Logg Inn" ;
  document.getElementById("navbar").innerHTML = "";


  for (element of model.menuOptions) {
    if (model.logInSession == "Bruker" && element.onlyForAdmin == false) {
      document.getElementById("navbar").innerHTML += ` <button class="navbarButton"
                             onclick="${element.functionName}()"> ${element.txt}
                             
                            </button>`;
      //vise log in om ikkelogget inn vise logg ut om logget in
    }
  }
}

function home() {
  document.getElementById("content").innerHTML = `
  <h3 >Om </h3>
  <div>
  <img src="hol2.jpg"  height="200" width="300" style="border-radius: 10%; box-shadow: grey 5px 5px 2px;"/>
  </div>
  <hr>
  
  <p id="infoMainPage">${model.mainPageinfo}</p>
  `
}





function showContactinfo() {
  document.getElementById('footer').innerHTML = `
  <hr>
  <b>Kontakt: </b>${model.contactInfo.name}<br>
  <b> Adresse: </b>${model.contactInfo.adress}<br>
  <b> Telefon: </b>${model.contactInfo.phone}<br>
 <b> e-post: </b> ${model.contactInfo.email}


  `;
}

function userProfil() {

  let loggedInUsersObj = findUser(model.login.loggedInUser);
  let categories = loggedInUsersObj.program.map(n => n.eventId);
  // let people = loggedInUsersObj.program.filter(n => n.peopleCount === participants);


  let html = `<div><b>Du er logget inn som: </b><br> ${model.login.loggedInUser}<br><hr>
  </div>`;

  for (let event of model.categories) {
    if (!categories.includes(event.id)) continue;
    html += `
      <br>
      <div> ${event.name}<br><br>
    
      ${event.date}<br>
      <hr></div>`
  }
  document.getElementById('content').innerHTML = html;

}

function userJoinSession(confirmBTN) {

  confirmBTN.innerHTML = '';
  let guests = model.guests.map(g => `<option> ${g}</option>`).join(' ');
  confirmBTN.innerHTML += `
    <select class="calendarButtonAdmin">
    ${guests}
    </select><br>

    <button class="calendarButtonAdmin" onclick="confirmBooking()">Bekreft</button>
    </div>
    `

}