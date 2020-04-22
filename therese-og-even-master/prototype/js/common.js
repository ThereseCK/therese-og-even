// function range(from, to) {
//     return Array.from(Array(to - from).keys()).map(n => n + from);
// }

const range = (from, to) => Array.from(Array(to - from).keys()).map(n => n + from);

function addDays(date, dayCount) {
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