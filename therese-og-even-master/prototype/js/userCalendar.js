function userCalendar() {
    let mondayMonthStart = model.current.monthStartMonday;
    if (mondayMonthStart === null) {
        mondayMonthStart = model.current.monthStartMonday = getMondayOfCurrentWeek(new Date());
    }
    document.getElementById('content').innerHTML = `         
    <div>       
        <button class="weekCalendarBTN" onclick="switchMonth(-1)">&lt;&lt;</button>
        <button class="weekCalendarBTN" onclick="weekCalendar()">Uke</button>
        <button class="weekCalendarBTN" onclick="switchMonth(+1)">&gt;&gt;</button> 
    </div>
    <table class="weekday">
       <tr> ${createWeekdayNamesHtml()}</tr>
        <tr>${createWeekHtml(mondayMonthStart)}</tr>
        <tr>${createWeekHtml(addDays(mondayMonthStart, 7))}</tr>
        <tr>${createWeekHtml(addDays(mondayMonthStart, 14))}</tr>
        <tr>${createWeekHtml(addDays(mondayMonthStart, 21))}</tr>
        <tr>${createWeekHtml(addDays(mondayMonthStart, 28))}</tr>
        </table>
        <br>
        <p class="ccRed">Rød: Yoga</p>
        <p class="ccBlue">Blå: Events</p>
        <p class="ccGreen">Grønn: Sessions</p>
        `;
    }



// function getMondayOfFirstWeekOfMonth(date) {
//     while (date.getDate() >= 7) {
//         date = addDays(date, -7);
//     }
//     return date;
// }

function createWeekHtml(monday) {
    
    return createMultipleDayHtml(monday, item => item.color);
 
}

function dayDate(timeSlot) { 
    //det er her lista over dagens events   - sende med påklikket dag, bruke den til å loope i modellen
    let timeslotString = timeSlot.innerHTML.toString();
    let dateFromClick = timeslotString.slice(16, 26);
    let disabledOrNot = model.login.loggedInUser == null ? 'disabled' : "" ;
    
    document.getElementById('content').innerHTML = `
${dateFromClick}    
`; 
    
    for(event of model.categories){
        if(event.date == dateFromClick){
            for(timeSlot in event.time){
                let timeSlotInCurrent = event.time[timeSlot];
                let timesFromTimeslotArray = model.calender.timeSlots[timeSlotInCurrent];
                document.getElementById('content').innerHTML += '</br>' + timesFromTimeslotArray;
            }
            document.getElementById('content').innerHTML +=` <br>
            ${event.name}<br>
            <div><button class="navbarButton" style="width: 100px;" onclick="userJoinSession" ${disabledOrNot}> Meld på </button> <div> 
            
            `;
            
            //if(isAdmin == true) legg til mer stæsj i inner'n B)
           
        }
    }
   
}

// `  
//             ${model.categories.filter(l => l.date === '2020-05-24').
//             map(n => `<ul>${n.time.timeSlot} <br>${n.name}<br><button class="infoButton"> Meld på </button> </ul>`).join(' ')
//         }           
//     `;

function getMondayOfCurrentWeek() {
    var today = new Date();
    var diffToMonday =  1- today.getDay();
    var monday = addDays(today, diffToMonday);
    return monday;
}



function switchMonth(x) {
    model.current.monthStartMonday = addDays(model.current.monthStartMonday, x * 28);
    userCalendar();
}
  