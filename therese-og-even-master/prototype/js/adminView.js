function adminMenu() {
  document.getElementById("navbar").innerHTML = "";
  for (element of model.menuOptions)
    if (element.onlyForAdmin == true) {

      document.getElementById("navbar").innerHTML += ` <button class="navbarButton"
          onclick="${element.functionName}()"> ${element.txt}
         </button>`;
    }
}



function adminMainPage() {
  adminMenu();




  document.getElementById("content").innerHTML = `<div>
  Endre informasjon på brukerens forside: <br>
 <textarea type="text" id="infoMainPage" >${model.mainPageInfo}</textarea><br>
      <button onclick="submitFrontPageInfo()">Lagre </button> 
      </div>
  `

    ;

  model.logInSession = "Admin";
}


function submitFrontPageInfo(){
  let textinfo = document.getElementById('infoMainPage').value;
  model.mainPageInfo = textinfo;
  
  
 }


function logOut() {
  document.getElementById("navbar").innerHTML = "";
  document.getElementById("content").innerHTML = "";
  model.logInSession = "Bruker";
  home();
  initMenu();
}


function infoChange() {
  let test = "";

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
      categories.push({
        id: null,
        name: `<p onclick="pushNewEvent()">Legg Til</p>`
      }),
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
        <button class="infoButton" onclick="selectCategoryAdmin(${cat.id})">${cat.name}</button></div>
         
        `
      )
      .join("")} 
     
        `;
}

function selectCategoryAdmin(id) {
  model.selectedCategoryId = id;

  infoChange();
  if (id != null) {
    document.getElementById('content').innerHTML += `
          <div>
          <textarea type="text" value="Endre informasjon"> </textarea>
          <br><button onclick="changeInfo()">Endre</button>
          </div>`
  }
}






