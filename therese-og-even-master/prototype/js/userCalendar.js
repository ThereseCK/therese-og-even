function userCalendar() {
    let mondayMonthStart = model.current.monthStartMonday;
    if (mondayMonthStart === null) {
        mondayMonthStart = model.current.monthStartMonday = getMondayOfFirstWeekOfMonth(new Date());
    }
    document.getElementById('content').innerHTML = `                
    <button class="weekCalendar" onclick="switchMonth(-1)">&lt;&lt;</button>
    <button class="weekCalendar" onclick="weekCalendar()">Uke</button>
    <button class="weekCalendar" onclick="switchMonth(+1)">&gt;&gt;</button> 
    <table class="weekday">
       <tr> ${createWeekdayNamesHtml()}</tr>
        <tr>${createWeekHtml(mondayMonthStart)}</tr>
        <tr>${createWeekHtml(addDays(mondayMonthStart, 7))}</tr>
        <tr>${createWeekHtml(addDays(mondayMonthStart, 14))}</tr>
        <tr>${createWeekHtml(addDays(mondayMonthStart, 21))}</tr>
        <tr >${createWeekHtml(addDays(mondayMonthStart, 28))}</tr>
        </table>
        <br>
        <p class="ccRed">Rød: Yoga</p>
        <p class="ccBlue">Blå: Events</p>
        <p class="ccGreen">Grønn: Sessions</p>
    `;
}

function createWeekdayNamesHtml() {
    return model.calender.days.map(d => ` 
        <th class="weekday">${d}</th>
        `).join(' ');
}

function getMondayOfFirstWeekOfMonth(date) {
    while (date.getDate() >= 7) {
        date = addDays(date, -7);
    }
    return date;
}

function createWeekHtml(monday) {
    var dayCount = 7;
    let html = '';

    for (var i = 0; i < dayCount; i++) {
        var date = addDays(monday, i);
        var dayName = model.calender.days[date.getDay()];
        // var appointmentsToday = getAppointments(date);
        html += ` 
                    <td class="weekday" onclick="dayDate()">
                        <b> ${date.toLocaleDateString()}</b><br/>`;

        for (item of model.categories) {
            if (date.toLocaleDateString() == item.date) {
                html += `<p><b>${item.color}</b></p>`
            }

        }


        html += `</td>`;

        //her! if admin cal. is chosen - show extra info here + +
    }
    return html;
}


function dayDate() { //det er her lista over dagens events   - sende med påklikket dag, bruke den til å loope i modellen
    document.getElementById('content').innerHTML = `  
            ${model.categories.filter(l => l.date === '2020-04-24').
            map(n => `<ul>${n.time.timeSlot} <br>${n.name}<br><button class="infoButton"> Meld på </button> </ul>`).join(' ')
        }
           
            `;
}


function getMondayOfCurrentWeek() {
    var today = new Date();
    var diffToMonday = 1 - today.getDay();
    var monday = addDays(today, diffToMonday);
    return monday;
}

function addDays(date, dayCount) {
    return new Date(date.getTime() + (dayCount * 24 * 60 * 60 * 1000));
}

function switchMonth(x) {
    model.current.monthStartMonday = addDays(model.current.monthStartMonday, x * 28);
    userCalendar();
}