var weekdayNames = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
       
        var currentMondayDate = getMondayOfCurrentWeek();
        
        showMonth();

        function showMonth() {
            document.getElementById('content').innerHTML = "";
            
            document.getElementById('content').innerHTML = `
        
        ${model.calender.days.map(d => ` 
    
            <div class="weekday week">${d}</div>`).join(' ')}
            
            `
            document.getElementById('content').innerHTML = ` 
            <button class="weekCalendar" onclick="switchMonth(-1)">&lt;&lt;</button>
            <button class="weekCalendar" onclick="weekCalendar()">Uke</button>
            <button class="weekCalendar" onclick="switchMonth(+1)">&gt;&gt;</button> `;
            let aMonday = currentMondayDate;
            while (aMonday.getDate() >= 7) {
                aMonday = addDays(aMonday, -7);
            }
           
            document.getElementById('content').innerHTML += ` 
            <div class="week">${monthLoop()}</div>
            <div class="week">${createWeekHtml(aMonday)}</div>
            <div class="week">${createWeekHtml(addDays(aMonday, 7))}</div>
            <div class="week">${createWeekHtml(addDays(aMonday, 14))}</div>
            <div class="week">${createWeekHtml(addDays(aMonday, 21))}</div>
            <div class="week">${createWeekHtml(addDays(aMonday, 28))}</div>
            
            `;
            document.getElementById('content').innerHTML += `
            <br>
            <p class="ccRed">Rød: Yoga</p>
            <p class="ccBlue">Blå: Events</p>
            <p class="ccGreen">Grønn: Sessions</p>`
        }

        
function monthLoop(){
return model.calender.days.map(n => `<div class="weekday">${n}</div>`).join(' ');
}

        function createWeekHtml(monday) {
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
                            if(date.toLocaleDateString() == item.date){
                                html += `<p><b>${item.color}</b></p>`  
                            }
                            
                        }
                       
        
                        html +=  `</div>`;
                    
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
            currentMondayDate = addDays(currentMondayDate, x * 7);
            showMonth();
        }