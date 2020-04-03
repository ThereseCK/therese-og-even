var weekdayNames = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
        // var calendarDiv = document.getElementById('calendar');
        var currentMondayDate = getMondayOfCurrentWeek();
        // var appointments = [
        //     { date: new Date(2020, 2, 29, 12), text: 'Mno' },
        //     { date: new Date(2020, 2, 1, 12), text: 'Abc' },
        //     { date: new Date(2020, 2, 1, 12), text: 'Def' },
        //     { date: new Date(2020, 2, 2, 12), text: 'Ghi' },
        //     { date: new Date(2020, 2, 9, 12), text: 'Jkl' },
        // ];
        showMonth();

        function showMonth() {
            document.getElementById('content').innerHTML = "";
            
            document.getElementById('content').innerHTML = `
        
        ${weekdayNames.map(d => ` 
    
            <div class="weekday week">${d}</div>`).join(' ')}
            
            `
            document.getElementById('content').innerHTML = ` <button class="weekCalendar">Uke</button>`;
            let aMonday = currentMondayDate;
            while (aMonday.getDate() >= 7) {
                aMonday = addDays(aMonday, -7);
            }
           
            document.getElementById('content').innerHTML += ` 
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
                            console.log(item.name);
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
            ${model.categories.filter(l => l.date === '25.3.2020').
            map(n => `<ul>${n.time} <br>${n.name}<br><button class="infoButton"> Meld på </button> </ul>`).join(' ')
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
