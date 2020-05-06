function adminCalendar() {
    document.getElementById('content').innerHTML = "";
    let mondayMonthStart = model.current.monthStartMonday;
    if (mondayMonthStart === null) {
        mondayMonthStart = model.current.monthStartMonday = getMondayOfCurrentWeek(new Date());
    }
    document.getElementById('content').innerHTML = ` 
    <div>
            <button class="weekCalendarBTN" onclick="switchMonthAdmin(-1)">&lt;&lt;</button>
            <button onclick="adminWeekCalender()" class="weekCalendarBTN">Uke</button>
            <button class="weekCalendarBTN" onclick="switchMonthAdmin(+1)">&gt;&gt;</button> 
</div>

<table class="weekday">
    <tr>${weekLoopAdmin()}</tr>
    <tr>${createWeekHtmlAdmin(mondayMonthStart)}</tr>
    <tr>${createWeekHtmlAdmin(addDays(mondayMonthStart, 7))}</tr>
    <tr>${createWeekHtmlAdmin(addDays(mondayMonthStart, 14))}</tr>
    <tr>${createWeekHtmlAdmin(addDays(mondayMonthStart, 21))}</tr>
    <tr>${createWeekHtmlAdmin(addDays(mondayMonthStart, 28))}</tr>
        </table>
     
       
    
    <div class="week addButton" onclick="addButton()"> + </div>
    `;
}


function weekLoopAdmin() {
    return model.calender.days.map(n => `<th class="weekday">${n}</th>`).join(' ');
}


function createWeekHtmlAdmin(monday) {
  return  createMultipleDayHtmlAdmin(monday, item => item.name);
}


function switchMonthAdmin(deltaWeek) {
    model.current.monthStartMonday = addDays(model.current.monthStartMonday, deltaWeek * 28);
    adminCalendar();
}
function dayDateAdmin(timeSlot){
    let timeslotString = timeSlot.innerHTML.toString();
    let dateFromClick = timeslotString.slice(16, 26);
   
    document.getElementById('content').innerHTML = `
${dateFromClick}    
`; 
    
    for(event of model.categories){
        if(event.date == dateFromClick){
            for(timeSlot in event.time){
                let timeSlotInCurrent = event.time[timeSlot];
                let timesFromTimeslotArray = model.calender.timeSlots[timeSlotInCurrent];
                document.getElementById('content').innerHTML += '<br>' + timesFromTimeslotArray + '</br>';
            }
            document.getElementById('content').innerHTML +=` <br>
           <br> ${getNumberOfRegistrations(event.id)} / ${event.maxParticipants}  <br>
           ${event.name} <br>
            <div onclick="viewParticipants(this)"><button class="navbarButton" style="width: 100px;"> Påmeldte </button></div>
            `;
            
            //if(isAdmin == true) legg til mer stæsj i inner'n B)
           
           
        }
    }
   
}

function viewParticipants(x,y) {
    let nameAtParticipants = model.users.map(n =>`<li> ${n.name}</li>`).join('');
      x.innerHTML = ` 
      <br> <p>${nameAtParticipants}</p>
      `
    }


