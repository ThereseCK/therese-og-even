

weekCalendar();
function weekCalendar(){
    document.getElementById('content').innerHTML = '';
    
   
    
document.getElementById('content').innerHTML += `<button class="weekCalendar" onclick="switchWeek(-1)">&lt;&lt;</button>
<button class="weekCalendar" onclick="showMonth()">Måned</button>
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
// ${timeLoop()}




// function timeLoop(){
//     return model.calender.timeSlots.map(n => `<tr class="weekday"><td>${n}</td></tr>`).join(' ');
//     }

    function weekLoop(){
        return model.calender.days.map(n => `<th class="weekday">${n}</th>`).join(' ');
        }


function appointments(timeSlot, categories){
    const dayNos = Array.from(model.calender.days.keys());
    return `
        <tr><th>${model.calender.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
        `
            <td>
                ${model.categories.name}
       
                <ul>
                    ${eventsFromDayAndTime(dayNo, timeSlot, categories).map(categories => `
                  
                    <li> 
                        ${categories.name} <strong ><br>(${categories.info.join(', ')}</strong>)    
                    </li><br>
                    `).join('')}
                </ul>
            </td>`).join('')}
            </tr>`;
}
function eventsFromDayAndTime(dayNo, timeSlot, categories) {
    return model.categories.filter(
        categories => categories.date === dayNo && categories.time.timeSlot === timeSlot
    );
}

function switchWeek(x) {
    currentMondayDate = addDays(currentMondayDate, x * 7);
    weekCalendar();
}