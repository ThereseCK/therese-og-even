function calender(){
    document.getElementById('content').innerHTML = "";
    document.getElementById('content').innerHTML = `

${weekdayNames.map(d => `
    <div class="weekday week">${d}</div>`).join(' ')}
    
    `
    let aMonday = currentMondayDate;
    while (aMonday.getDate() >= 7) {
        aMonday = addDays(aMonday, -7);
    }
    document.getElementById('content').innerHTML += ` 
    <div class="week">${createWeekHtmlAdmin(aMonday)}</div>
    <div class="week">${createWeekHtmlAdmin(addDays(aMonday, 7))}</div>
    <div class="week">${createWeekHtmlAdmin(addDays(aMonday, 14))}</div>
    <div class="week">${createWeekHtmlAdmin(addDays(aMonday, 21))}</div>
    <div class="week">${createWeekHtmlAdmin(addDays(aMonday, 28))}</div>
    <div class="week addButton"> + </div>
    
    `;
}


function createWeekHtmlAdmin(monday) {
    var dayCount = 7;
    let html = '';

    for (var i = 0; i < dayCount; i++) {
        var date = addDays(monday, i);
        var dayName = weekdayNames[date.getDay()];
        // var appointmentsToday = getAppointments(date);
        html += ` 
            <div class="weekday" onclick="dayDate()">
                <b> ${date.toLocaleDateString()}</b><br/>`;

                for(item of model.categories){
                    console.log(item.name);
                    if(date.toLocaleDateString() == item.date){
                        html += `<p>${item.name}</p>`  
                    }
                    
                }
               

                html +=  `</div>`;
            
             //her! if admin cal. is chosen - show extra info here + +
        }
        return html;
}