function calender(){
    document.getElementById('content').innerHTML = "";
   
    document.getElementById('content').innerHTML = ` 
            <button class="weekCalendar" onclick="switchMonthAdmin(-1)">&lt;&lt;</button>
            <button class="weekCalendar">Uke</button>
            <button class="weekCalendar" onclick="switchMonthAdmin(+1)">&gt;&gt;</button> `;

    let aMonday = currentMondayDate;
    while (aMonday.getDate() >= 7) {
        aMonday = addDays(aMonday, -7);
    }
    document.getElementById('content').innerHTML += ` 
   
    <div class="week">${weekLoopAdmin()}</div>
        <div class="week">${createWeekHtmlAdmin(aMonday)}</div>
        <div class="week">${createWeekHtmlAdmin(addDays(aMonday, 7))}</div>
        <div class="week">${createWeekHtmlAdmin(addDays(aMonday, 14))}</div>
        <div class="week">${createWeekHtmlAdmin(addDays(aMonday, 21))}</div>
        <div class="week">${createWeekHtmlAdmin(addDays(aMonday, 28))}</div>
        <br>
        
       
    
    <div class="week addButton"> + </div>
    `;
}

function weekLoopAdmin(){
return model.calender.days.map(n => `<div class="weekday">${n}</div>`).join(' ');
}


function createWeekHtmlAdmin(monday) {
    var dayCount = 7;
    let html = '';


    for (var i = 0; i < dayCount; i++) {
        var date = addDays(monday, i);
        var dayName = weekdayNames[date.getDay()];
        // var appointmentsToday = getAppointments(date);
            html += `<div class="weekday" onclick="dayDateAdmin()">
                <b> ${date.toLocaleDateString()}</b><br/>`;

                for(item of model.categories){
                    
                    if(date.toLocaleDateString() == item.date){
                        html += `<p><b>${item.name}</b></p>`  
                    }
                }
                html +=  `</div>`;
            
             //her! if admin cal. is chosen - show extra info here + +
        }
        return html;
}

function dayDateAdmin(){
    document.getElementById('content').innerHTML = `  
    ${model.categories.filter(l => l.date === '25.3.2020').
    map(n => `<ul>${n.time.timeslot} <br>${n.name}<br> Deltagere: ${n.currentParticipants}</ul>`).join(' ')
    }
   
    `;
}
function switchMonthAdmin(deltaWeek) {
    currentMondayDate = addDays(currentMondayDate, deltaWeek * 7);
    calender();
}

