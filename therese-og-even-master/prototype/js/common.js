
    let todaysDate = new Date();
        let onejan = new Date(todaysDate.getFullYear(), 0, 1);
        let week = Math.ceil( (((todaysDate - onejan) / 86400000) + onejan.getDay() + 1) / 7 )
        

const range = (from, to) => Array.from(Array(to - from).keys()).map(n => n + from);

function addDays(date, dayCount) {
    
    return new Date(date.getTime() + (dayCount * 24 * 60 * 60 * 1000));
}


function dateString(baseDate, index) {
    return addDays(baseDate, index).toISOString().substr(0,10);
}
function createWeekdayNamesHtml() {
    return model.calender.days.map(d => ` 
        <th class="weekdayHeader">${d}</th>
        `).join(' ');
        

}
function createMultipleDayHtml(baseDate, itemToText) {
    var dayCount = 7;
    const html = range(0, dayCount).map(i => `
    
        <td class="weekday" onclick="dayDate(this)">
            <b>${ dateString(baseDate, i)}</b><br/>
            ${model.categories.filter(item => dateString(baseDate,  i) == item.date).map(item => `
                <p><b>${itemToText(item)}</b></p>
            `).join('')}
        </td>
        
    `).join('');
    return html;
}
function createMultipleDayHtmlAdmin(baseDate, itemToText) {
    var dayCount = 7;
    const html = range(0, dayCount).map(i => `
    
        <td class="weekday" onclick="dayDateAdmin(this)">
            <b>${ dateString(baseDate, i)}</b><br/>
            ${model.categories.filter(item => dateString(baseDate,  i) == item.date).map(item => `
                <p><b>${itemToText(item)}</b></p>
            `).join('')}
        </td>
    `).join('');
    return html;
}

function createMultipleDayWeekHtml(baseDate) {
    var dayCount = 7;
    const html = range(0, dayCount).map(i => `
        <th class="weekdayHeader">
${model.calender.days[i]}<br><br>
            ${ dateString(baseDate, i)}<br/>
            
        
   </th> `).join('');
    return html;
}


function addButton(){
    let peoples = model.maxParticipantsInEvents.map(p => `<option>${p}</option>`).join('');
    let timeSlot = model.calender.timeSlots.map(n => `<option>${n}</option>`).join(' ');
    let yogaEvents = model.categories.filter(n => n.category === null)
    .map(n => `<option>${n.name}</option>`).join('');
   document.getElementById('content').innerHTML = `<div>
   <select id="eventType"> 
   ${yogaEvents}
   </select><br>
   <select id="timeSlot"> 
   ${timeSlot}
   </select><br>
   <select id="maxPeople">${peoples} </select><br>
   <input type="date" id="dateEvent"></input><br>
   <input type="text" id="eventName" placeholder="Navn på event"></input> <br>
   <input type="text" id="eventPrice" placeholder="Pris"></input> <br>
   <textarea type="text" id="eventInfo" placeholder="informasjon"></textarea><br>
    <button onclick="addEvent()">Bekreft</button>
   </div>
   `; 
}

function getNumberOfRegistrations(eventId){
    let count = 0;
    for(let user of model.users){
        let registrations = user.program.filter(e=>e.eventId === eventId);
        if(registrations.length === 1){
            const registration = registrations[0];
            count += registration.peopleCount;
        }
    }
    return count;
}



