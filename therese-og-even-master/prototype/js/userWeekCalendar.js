function weekCalendar() {
  let mondayWeekStart = model.current.week;
  if (mondayWeekStart === null) {
    mondayWeekStart = model.current.week = getMondayOfCurrentWeek(
      new Date()
    );
  }

  document.getElementById("content").innerHTML = `<div>
<button class="weekCalendarBTN" onclick="switchWeek(-1)">&lt;&lt;</button>
<button class="weekCalendarBTN" onclick="userCalendar()">Måned</button>
<button class="weekCalendarBTN" onclick="switchWeek(+1)">&gt;&gt;</button>
</div>
<table class="weekday">
<tr>
<th class="weekdayHeader"> Uke: ${showWeekSwitch()} </th>

${createWeekCalendarHtml(mondayWeekStart)}

</tr>
<tr>
${appointments(0)}
${appointments(1)}
${appointments(2)}
${appointments(3)}
${appointments(4)}
</tr>
</table>
`;
}

function createWeekCalendarHtml(monday) {
  return createMultipleDayWeekHtml(monday);
}

function appointments(timeSlot) {
  let disabledOrNot = model.login.loggedInUser == null ? 'disabled' : "" ;

  const dayNos = Array.from(model.calender.days.keys());
  
  return `
      <tr><th class="weekdayHeader">${model.calender.timeSlots[timeSlot]}</th>${dayNos.map(dayNo =>
          `
          <td class="weekday">
         
          
          ${eventsFromDayAndTime(model.current.week, dayNo,  timeSlot,).map(c => `
          
          
          ${c.name}<br>
          <div  onclick="userJoinSession(this)"><button class="calendarButton"> Meld på</button>  </div> 
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

function switchWeek(x) {
 model.current.week = addDays(
    model.current.week,
    x * 7
  );
  if (x == "1") model.calender.ukepiltastForward++;
  if (x == "-1") model.calender.ukepiltastForward--;
  weekCalendar();
}

function showWeekSwitch() {
  return week + model.calender.ukepiltastForward;
}
