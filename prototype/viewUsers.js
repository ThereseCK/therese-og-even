function showLogIn() {
  let loginHTML = `
    <input type="text" value="Brukernavn"> </input> <br>
    <input type="text" value="Passord"> </input> <br>
    <button onclick="profil()"> Logg Inn</button>
    <button onclick="adminMainPage()">Admin</button>
    <button onclick="createUser()">Registrer bruker</button>
    `;
  document.getElementById("content").innerHTML = loginHTML;
}

function showInfo() {
  let test = "";

  const categoryId = model.selectedCategoryId;
  const categories = model.categories.filter(
    cat => cat.category === categoryId
  );
  const selectedCategory = model.categories.filter(
    cat => cat.id === categoryId
  )[0];
  if (selectedCategory) {
    const catName = categories.map(b => b.name).join(" ");
    const info = categories.map(n => n.info).join(" ");
    console.log(catName, " <-- cat ", info, " <-- info");

    console.log(
      model.categories[model.selectedCategoryId - 1].info,
      " infor til påtrykket underKat"
    );
    model.categories[model.selectedCategoryId - 1].info == null
      ? (test = "")
      : (test = model.categories[model.selectedCategoryId - 1].info);

    categories.push({
      id: selectedCategory.category,
      name: "Tilbake",
      info: ""
    });
    categories.push({ id: null, name: "Alle toppkategorier" });
  }

  const courses = model.calender.courses.filter(
    cat => cat.category === categoryId
  );
  document.getElementById("content").innerHTML = `
     <h2>Kategorier</h2>
     <ul>
        ${categories
          .map(
            cat => `
        <button onclick="selectCategory(${cat.id})">${cat.name}</button>
         
        `
          )
          .join("")} 
        </ul> 
        ${test}           
        <h2>Kommende Kurs</h2>
    <ul>
    ${courses
      .map(
        course => `
        <li>${course.name} ${course.date}</li>   
        `
      )
      .join("")}
        </ul>             
        
        `;
}

function selectCategory(id) {
  model.selectedCategoryId = id;
  showInfo();
}

function initMenu() {
  for (element of model.menuOptions) {
    console.log("løkka køyrer! ", element);
    if (model.logInSession == "Bruker" && element.onlyForAdmin == false) {
      document.getElementById("navbar").innerHTML += ` <button 
                             onclick="${element.functionName}()"> ${element.txt}
                             
                            </button>`;
    }
  }
}

function home() {
  document.getElementById("content").innerHTML = "Forside";
}

function profil() {
  model.logInSession = "Bruker";
  const filter = model.categories.filter(k => k.name === "Manneyoga");
  let profilHTML = `
    Du er påmeldt: ${filter
      .map(
        n => `<div>
        ${n.name} <br> ${n.date} <br> ${n.info} </div>`
      )
      .join(" ")}`;
  document.getElementById("content").innerHTML = profilHTML;
}

function createUser() {
  document.getElementById("content").innerHTML = `
    
    <input type="text" value="Navn"></input> <br>
    <input type="text" value="Brukernavn"></input> <br>
    <input type="text" value="Epost"></input> <br>
    <input type="text" value="TelefonNummer"></input> <br>
    <input type="text" value="Nytt passord"></input> <br>
    <input type="text" value="Bekreft Passord"></input> <br>
    <p>Registrer deg på nyhetsbrev</p> <input type="checkbox"></input> <br>
    <button onclick="completeFraModell()">Bekreft</button>`;
}
