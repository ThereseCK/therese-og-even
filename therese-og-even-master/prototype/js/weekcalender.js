var currentMondayDate = getMondayOfCurrentWeek();
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
${timeLoop()}

<tr>
${appointments()}
</tr>

</table>
    `;
}




function timeLoop(){
    return model.calender.timeSlot.map(n => `<tr class="weekday"><td>${n}</td></tr>`).join(' ');
    }

    function weekLoop(){
        return model.calender.days.map(n => `<th class="weekday">${n}</th>`).join(' ');
        }


    //     <table> 
    //     <tr>
    //         <th> </th>
           
    //         ${model.days.map(d => `
            
    //         <th>${d}</th>`).join('') }
           
    //     </tr>
      
    //     ${createHtmlForTimeSlot( selectedEvents)}
     
    //     <tr class="pause"> 
    //         <th> 10.00 - 10.20 </th>
    //         <th colspan="5"> FELLES PAUSE </th>
    //     </tr>
    //     ${createHtmlForTimeSlot(1, selectedEvents)}
    //     <tr class="pause"> 
    //         <th> 11.20 - 12.20 </th>
    //         <th colspan="5"> Lunsj </th>
    //     </tr>
    //     ${createHtmlForTimeSlot(2, selectedEvents)}
    //     <tr class="pause"> 
    //         <th> 13.20 - 13.40 </th>
    //         <th colspan="5"> FELLES PAUSE </th>
    //     </tr>
    //     ${createHtmlForTimeSlot(3, selectedEvents)}
    //     <tr class="pause"> 
    //         <th> 14.40 - 15.00 </th>
    //         <th colspan="5"> Oppsummering og avslutning i team der alle deler det viktigste de har lært. Individuell oppsummering med egen logg til slutt</th>
    //     </tr>
    // </table>