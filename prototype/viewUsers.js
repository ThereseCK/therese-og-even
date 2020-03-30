// const content =  document.getElementById('content');

function showLogIn(){
    let loginHTML=`
    <input type="text" value="Brukernavn"> </input> <br>
    <input type="text" value="Passord"> </input> <br>
    <button onclick="profil()"> Logg Inn</button>
    <button onclick="adminMainPage()">Admin</button>
    <button onclick="createUser()">Registrer bruker</button>
    `;
    document.getElementById('content').innerHTML = loginHTML;
}

function showInfo(){
  
    const categoryId = model.selectedCategoryId;
    const categories = model.categories.filter(cat => cat.category === categoryId);
    const selectedCategory = model.categories.filter(cat=>cat.id===categoryId)[0];
    if (selectedCategory) {
        categories.push({ id: selectedCategory.category, name: 'Tilbake' });
        categories.push({ id: null, name: 'Alle toppkategorier' });
    }
    const courses = model.courses.filter(cat => cat.category === categoryId);
    document.getElementById('content').innerHTML = `
        <h2>Kategorier</h2>
        <ul>
            ${categories.map(cat => `
            <li>${cat.name} <button onclick="selectCategory(${cat.id})">velg</button></li>    
            `).join('')}
        </ul>            
        <h2>Kurs</h2>
        <ul>
            ${courses.map(course => `
            <li>${course.name} <button onclick="register(${course.id})">velg</button></li>    
            `).join('')}
        </ul>            
    `;
}

function selectCategory(id) {
    model.selectedCategoryId = id;
    showInfo();
}


function initMenu() {
    document.getElementById('navbar').innerHTML =
        model.menuOptions.map(random => `
            <button 
                    onclick="${random.functionName}()"> ${random.txt}
                     
                    </button>
                    `).join('');
                }

function home(){
  
    document.getElementById('content').innerHTML =
    'Forside';
    // model.contactInfo.map(n=> n.name).join(' ');
        
      };
    
   


function kalender() {
    let kalenderHTML = `
    KALENDER & BOOKING`;
    document.getElementById('content').innerHTML = kalenderHTML;
}
function profil() {
    let profilHTML = `
    Du er påmeldt: ${model.categories.filter(n=>`
        ${n.name === 'Manneyoga'} ${n.info === 'For Menn'}`)
        .map(f => f).join(' ')}`;
        document.getElementById('content').innerHTML = profilHTML;
}

function adminMainPage(){
    document.getElementById('navbar').innerHTML =
    model.admin.buttons.map(abtn => `
        <button 
                onclick="${abtn.createButtons}()"> ${abtn.txt}
                 
                </button>
                `).join('');

}
function logOut() {
    home();
}
