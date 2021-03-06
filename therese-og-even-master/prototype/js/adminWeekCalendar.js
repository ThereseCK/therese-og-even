function adminWeekCalender() {

  let mondayWeekStart = model.current.week;
  if (mondayWeekStart === null) {
    mondayWeekStart = model.current.week = getMondayOfCurrentWeek(
      new Date()
    );
  }

  document.getElementById("content").innerHTML = `<div>
<button class="weekCalendarBTN" onclick="switchWeekAdmin(-1)">&lt;&lt;</button>
<button class="weekCalendarBTN" onclick="adminCalendar()">Måned</button>
<button class="weekCalendarBTN" onclick="switchWeekAdmin(+1)">&gt;&gt;</button>
</div>
<table class="weekday">
<tr>
<th> Uke: ${showWeekSwitch()} </th>

${createWeekCalendarHtml(mondayWeekStart)}

</tr>
<tr>
${appointmentsAdmin(0)}
${appointmentsAdmin(1)}
${appointmentsAdmin(2)}
${appointmentsAdmin(3)}
${appointmentsAdmin(4)}
</tr>
</table>
<div class="week addButton" onclick="addButton()"> + </div>
`;
}

function createWeekCalendarHtml(monday) {
  return createMultipleDayWeekHtml(monday);
}

function appointmentsAdmin(timeSlot) {

  const dayNos = Array.from(model.calender.days.keys());
  

  return `
      <tr><th class="weekday">${model.calender.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
    `
          <td class="weekday">
         
          
          ${eventsFromDayAndTime(model.current.week, dayNo, timeSlot).map(c => `
          
          
          ${c.name}<br>
          Påmeldte: ${getNumberOfRegistrations(c.id)} / ${c.maxParticipants}<br>
          <br><div onclick="viewParticipants(this)">
          <button class="calendarButtonAdmin">Påmeldte</button>  
          </div> 
          <br>
          `).join('')}
          
          </td>`).join('')}
          </tr>`;

}


function eventsFromDayAndTime(baseDateTxt, dayCount, timeSlot) {
  let baseDateMillis = new Date(baseDateTxt).getTime();
  let date = new Date(baseDateMillis + 1000 * 60 * 60 * 24 * dayCount)
    .toISOString()
    .substr(0, 10);
  return model.categories.filter(
    (categories) =>
      categories.date == date && categories.time.timeSlot == timeSlot
  );
}


 




function switchWeekAdmin(x) {
  model.current.week = addDays(
    model.current.week,
    x * 7
  );
  if (x == "1") model.calender.ukepiltastForward++;
  if (x == "-1") model.calender.ukepiltastForward--;
  adminWeekCalender();
}

function showWeekSwitch() {
  return week + model.calender.ukepiltastForward;
}



