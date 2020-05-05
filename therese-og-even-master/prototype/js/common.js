// function range(from, to) {
    //     return Array.from(Array(to - from).keys()).map(n => n + from);
    // }
    
    //variabler:
    let todaysDate = new Date();
        let onejan = new Date(todaysDate.getFullYear(), 0, 1);
        let week = Math.ceil( (((todaysDate - onejan) / 86400000) + onejan.getDay() + 1) / 7 )
        

const range = (from, to) => Array.from(Array(to - from).keys()).map(n => n + from);

function addDays(date, dayCount) {
    //console.log(date, " hva er date? null?")
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
// common Admin ting

function addButton(){
    let peoples = model.maxParticipantsInEvents.map(p => `<option>${p}</option>`).join('');
    let timeSlot = model.calender.timeSlots.map(n => `<option>${n}</option>`).join(' ');
    let yogaEvents = model.categories.filter(n => n.category === null)
    .map(n => `<option>${n.name}</option>`).join('');
   document.getElementById('content').innerHTML = `<div>
   <select> 
   ${yogaEvents}
   </select><br>
   <select> 
   ${timeSlot}
   </select><br>
   <select>${peoples} </select><br>
   <input type="date"></input><br>
   <input type="text" value="Navn på event"></input> <br>
   <input type="text" value="informasjon"></input><br>
    <button onclick="addEvent()">Bekreft</button>
   </div>
   `; 
}


