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
            <div class="week addButton"> + </div>
            
            `;
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
                                html += `<p>${item.name}</p>`  
                            }
                            
                        }
                       

                        html +=  `</div>`;
                    
                     //her! if admin cal. is chosen - show extra info here + +
                }
                return html;
        }
        function dayDate() { //det er her lista over dagens events   - sende med påklikket dag, bruke den til å loope i modellen
            document.getElementById('content').innerHTML = `  
            Her kommer oversikt over dagen du har trykket på.
            `;
        }

        // function getAppointments(date) {
        //     var filteredList = [];
        //     for (var i = 0; i < appointments.length; i++) {
        //         var appointment = appointments[i];
        //         if (appointment.date.getFullYear() == date.getFullYear()
        //             && appointment.date.getMonth() == date.getMonth()
        //             && appointment.date.getDate() == date.getDate()) {
        //             filteredList.push(appointment);
        //         }
        //     }
        //     return filteredList;
        // }

        // function showDate(year, month, day) {
        //     var date = new Date(year, month, day);
        //     var appointmentsToday = getAppointments(date);
        //     alert(JSON.stringify(appointmentsToday));
        
        //     //return JSON.stringify(appointmentsToday) // få ut en string
        // }

        function getMondayOfCurrentWeek() {
            var today = new Date();
            var diffToMonday = 1 - today.getDay();
            var monday = addDays(today, diffToMonday);
            return monday;
        }

        function addDays(date, dayCount) {
            return new Date(date.getTime() + (dayCount * 24 * 60 * 60 * 1000));
        }
