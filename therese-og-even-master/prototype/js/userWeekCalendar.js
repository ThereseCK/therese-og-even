var currentMondayDate = getMondayOfCurrentWeek();
function weekCalendar(){ 
   
document.getElementById('content').innerHTML = `<div>
<button class="weekCalendar" onclick="switchWeek(-1)">&lt;&lt;</button>
<button class="weekCalendar" onclick="userCalendar()">Måned</button>
<button class="weekCalendar" onclick="switchWeek(+1)">&gt;&gt;</button></div>
<table class="weekday">
<tr>
<th> Uke: ${showWeekSwitch()} </th>
${weekLoop()} <br>
</tr>
<tr>

${appointments(1)}
${appointments(2)}
${appointments(3)}
${appointments(4)}
</tr>

</table>
`;
}

function showWeekSwitch(){    
    return week + model.calender.ukepiltastForward;
}


function weekLoop(){
    
    
    
 let firstdayOfThisWeek = todaysDate.getDate()  
 const dayNos = Array.from(model.calender.days.keys());
 const currentweekNo = model.calender.currentWeek; 
 let selectedWeeksDates = dayNos.map( dayNo => ` ${dateAsText(currentweekNo, dayNo)}`); 
    return dayNos.map( dayNo => `<th class="weekday">${model.calender.days[dayNo] } <br>
     ${dateAsText(currentweekNo, dayNo)}

    </th>
    `).join(' ')
    ;
    }
        function appointments(timeSlot, categories){
   
            const dayNos = Array.from(model.calender.days.keys());
            
            return `
                <tr><th class="weekday">${model.calender.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
                    `
                    <td class="weekday">
                   
                       
        
                            ${eventsFromDayAndTime(model.calender.currentWeek, dayNo, timeSlot,).map(c => `
                          
                             
                                ${model.categories.name}
                                <button class="calendarButton"> Meld på</button>   
                            <br>
                            `).join('')}
                       
                    </td>`).join('')}
                    </tr>`;
        }

        

        dateAsText();
        function dateAsText(hei, dayCount){
            const baseDateMillis = new Date(hei).getTime();
            const date = new Date(baseDateMillis+1000*60*60*24*dayCount);
            
            return date.toLocaleDateString();

        }
        
        function eventsFromDayAndTime(baseDateTxt, dayCount, timeSlot) {
            const baseDateMillis = new Date(baseDateTxt).getTime();
            const date = new Date(baseDateMillis+1000*60*60*24*dayCount).toISOString().substr(0,10);
            return model.categories.filter(
                categories => categories.date === date && categories.time.timeSlot === timeSlot
            );
        }
        
        function switchWeek(x) {
            currentMondayDate = addDays(currentMondayDate, x * 7);
            if(x == "1") model.calender.ukepiltastForward++;
            if(x == "-1")model.calender.ukepiltastForward--;
           
            weekCalendar();
        }
