var currentMondayDate = getMondayOfCurrentWeek();
function weekCalendar(){ 
    document.getElementById('content').innerHTML = '';
document.getElementById('content').innerHTML += `<button class="weekCalendar" onclick="switchWeek(-1)">&lt;&lt;</button>
<button class="weekCalendar" onclick="userCalendar()">Måned</button>
<button class="weekCalendar" onclick="switchWeek(+1)">&gt;&gt;</button>
<table class="weekday">
<tr>
<th> </th>
${weekLoop()}
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


function weekLoop(){

    let todaysDate = new Date();
    let onejan = new Date(todaysDate.getFullYear(), 0, 1);
let week = Math.ceil( (((todaysDate - onejan) / 86400000) + onejan.getDay() + 1) / 7 );
  
console.log(week + model.calender.ukepiltastForward, " er dette et ukenr? :<")
    //finne mandagens dato i current week og plusse på én for hver dag
     //pluss1 = tirsdag + 2 ons osv
 let firstdayOfThisWeek = todaysDate.getDate()
   
    return model.calender.days.map(n => `<th class="weekday">${n}</th>
    `).join(' ');
    }



        function appointments(timeSlot, categories){
   

            const dayNos = Array.from(model.calender.days.keys());
            return `
                <tr><th class="weekday">${model.calender.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
                `
                    <td class="weekday">
                        ${dateAsText(model.calender.currentWeek, dayNo)}
               
                        
                            ${eventsFromDayAndTime(model.calender.currentWeek, dayNo, timeSlot,).map(c => `
                          
                             
                                ${model.categories.name} <strong ><br>(${/*categories.info.join(', ')*/''}</strong>)    
                            <br>
                            `).join('')}
                       
                    </td>`).join('')}
                    </tr>`;
        }
        
        function dateAsText(baseDateTxt, dayCount){
            const baseDateMillis = new Date(baseDateTxt).getTime();
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
