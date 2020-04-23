// function range(from, to) {
//     return Array.from(Array(to - from).keys()).map(n => n + from);
// }

const range = (from, to) => Array.from(Array(to - from).keys()).map(n => n + from);

function addDays(date, dayCount) {
    //console.log(date, " hva er date? null?")
    return new Date(date.getTime() + (dayCount * 24 * 60 * 60 * 1000));
}

function dateString(baseDate, index) {
    return addDays(baseDate, index).toISOString().substr(0,10);
}

function createMultipleDayHtml(baseDate, itemToText) {
    var dayCount = 7;
    const html = range(0, dayCount).map(i => `
        <td class="weekday" onclick="dayDate()">
            <b>${ dateString(baseDate, i)}</b><br/>
            ${model.categories.filter(item => dateString(baseDate, i) == item.date).map(item => `
                <p><b>${itemToText(item)}</b></p>
            `).join('')}
        </td>
    `).join('');
    return html;
}

//variabler:
let todaysDate = new Date();
    let onejan = new Date(todaysDate.getFullYear(), 0, 1);
    let week = Math.ceil( (((todaysDate - onejan) / 86400000) + onejan.getDay() + 1) / 7 )


