function adminMenu() {
  document.getElementById("navbar").innerHTML = "";
  for (element of model.menuOptions)
    if (element.onlyForAdmin == true) {
  
      document.getElementById("navbar").innerHTML += ` <button 
          onclick="${element.functionName}()"> ${element.txt}
         </button>`;
    }
}

function calender() {
  document.getElementById("content").innerHTML = "";
  showMonthAdmin();
}

function adminMainPage() {
  adminMenu();
  document.getElementById("content").innerHTML = "";

  model.logInSession = "Admin";
 
  //tegne ut alle buttons som har admin=true
}

function logOut() {
  document.getElementById("navbar").innerHTML = "";
  document.getElementById("content").innerHTML = "";
  model.logInSession = "Bruker";
  initMenu();
}


function infoChange(){
    const categoryId = model.selectedCategoryId;
    const categories = model.categories.filter(
      cat => cat.category === categoryId
    );
    const selectedCategory = model.categories.filter(
      cat => cat.id === categoryId
    )[0];
    
  
   
    document.getElementById("content").innerHTML = `
       <h2>Kategorier</h2>
      
          ${categories
            .map(
              cat => `
              <select  onclick="selectCategoryChange(${cat.id})">
          <option>${cat.name}</option>
          </select>
          `
            )
            .join("")} 

            <br>
            
            `;
        }
        // <input type="text" value="Endre informasjon"> </input>
        function selectCategoryChange(id) {
            id = null;
            model.selectedCategoryId = id;
            document.getElementById('content').innerHTML = `
            <input type="text" value="Endre informasjon"> </input>
            <button>Endre</button>
        `;
       
      
  }
