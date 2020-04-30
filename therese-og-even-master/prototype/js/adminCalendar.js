function adminCalendar() {
    document.getElementById('content').innerHTML = "";
    let mondayMonthStart = model.current.monthStartMonday;
    if (mondayMonthStart === null) {
        mondayMonthStart = model.current.monthStartMonday = getMondayOfFirstWeekOfMonth(new Date());
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
  return  createMultipleDayHtml(monday, item => item.name);
}

function dayDateAdmin() {
    document.getElementById('content').innerHTML = `  
    ${model.categories.filter(l => l.date === '2020-04-24').
            map(n => `<ul>${n.time.timeSlot} <br>${n.name}<br> Deltagere: ${n.currentParticipants}</ul>`).join(' ')
        }
   
    `;
}
function switchMonthAdmin(deltaWeek) {
    model.current.monthStartMonday = addDays(model.current.monthStartMonday, deltaWeek * 28);
    adminCalendar();
}

