function showMonth() {
    let mondayMonthStart = model.current.monthStartMonday;
    if (mondayMonthStart === null) {
        mondayMonthStart = model.current.monthStartMonday = getMondayOfFirstWeekOfMonth(new Date());
    }
    document.getElementById('content').innerHTML = `                
    <button class="weekCalendar" onclick="switchMonth(-1)">&lt;&lt;</button>
    <button class="weekCalendar" onclick="weekCalendar()">Uke</button>
    <button class="weekCalendar" onclick="switchMonth(+1)">&gt;&gt;</button> 
    ${createWeekdayNamesHtml()}
    <div class="week">${createWeekHtml(mondayMonthStart)}</div>
    <div class="week">${createWeekHtml(addDays(mondayMonthStart, 7))}</div>
    <div class="week">${createWeekHtml(addDays(mondayMonthStart, 14))}</div>
    <div class="week">${createWeekHtml(addDays(mondayMonthStart, 21))}</div>
    <div class="week">${createWeekHtml(addDays(mondayMonthStart, 28))}</div>
    <br>
    <p class="ccRed">Rød: Yoga</p>
    <p class="ccBlue">Blå: Events</p>
    <p class="ccGreen">Grønn: Sessions</p>
    `;
}

function createWeekdayNamesHtml() {
    return model.calender.days.map(d => ` 
        <div class="weekday week">${d}</div>
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
                    <div class="weekday" onclick="dayDate()">
                        <b> ${date.toLocaleDateString()}</b><br/>`;

        for (item of model.categories) {
            if (date.toLocaleDateString() == item.date) {
                html += `<p><b>${item.color}</b></p>`
            }

        }


        html += `</div>`;

        //her! if admin cal. is chosen - show extra info here + +
    }
    return html;
}


function dayDate() { //det er her lista over dagens events   - sende med påklikket dag, bruke den til å loope i modellen
    document.getElementById('content').innerHTML = `  
            ${model.categories.filter(l => l.date === '8.4.2020').
            map(n => `<ul>${n.time.timeslot} <br>${n.name}<br><button class="infoButton"> Meld på </button> </ul>`).join(' ')
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
    model.current.monthStartMonday = addDays(model.current.monthStartMonday, x * 7);
    showMonth();
}