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
        <p class="infoRed">Rød: Yoga</p>
        <p class="infoBlue">Blå: Events</p>
        <p class="infoGreen">Grønn: Sessions</p>
        `;
    }




function createWeekHtml(monday) {
    
    return createMultipleDayHtml(monday, item => item.color);
 
}

function dayDate(timeSlot) { 

    let timeslotString = timeSlot.innerHTML.toString();
    let dateFromClick = timeslotString.slice(16, 26);
    let disabledOrNot = model.login.loggedInUser == null ? 'disabled' : "" ;
    
    document.getElementById('content').innerHTML = `</br>
<div>${dateFromClick} <hr> </div>
 
`; 

    
    for(event of model.categories){
        if(event.date == dateFromClick){
            for(timeSlot in event.time){
                let timeSlotInCurrent = event.time[timeSlot];
                let timesFromTimeslotArray = model.calender.timeSlots[timeSlotInCurrent];
                document.getElementById('content').innerHTML += ' </br>' + timesFromTimeslotArray;
           
            }
            document.getElementById('content').innerHTML +=` <br>
            ${event.name}<br>
            <div onclick="userJoinSession(this)"><button class="navbarButton" style="width: 100px;" > Meld på </button> </div> 
            
            `;
           
        }
    }
   
}

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
  