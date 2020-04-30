

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

    model.categories[model.selectedCategoryId - 1].info == null
      ? (test = "")
      : (test = model.categories[model.selectedCategoryId - 1].info);

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
        <h2>Kommende</h2>
   
    ${courses
      .map(
        course => `
       <br> <b>${course.name}</b> <br> <tt>✦</tt> ${course.date}  <br>
        `
      )
      .join("")}
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
  <p>Her kommer tekst du ønsker skal vises på forsiden</p>
  <p>Her kommer tekst du ønsker skal vises på forsiden</p>
  <br>
  <p>Her kommer tekst du ønsker skal vises på forsiden</p>
  <p>Her kommer tekst du ønsker skal vises på forsiden</p>
  <p>Her kommer tekst du ønsker skal vises på forsiden</p>
  <p>Her kommer tekst du ønsker skal vises på forsiden</p>
  <p>Her kommer tekst du ønsker skal vises på forsiden</p>
  <p>Her kommer tekst du ønsker skal vises på forsiden</p>
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

function userProfil(){


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