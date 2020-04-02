
function showMonthAdmin(mon) {
    showMonth();
    var dayCount = 7;
    let html = '';

    for (var i = 0; i < dayCount; i++) {
        var date = addDaysAdmin(mon, i);
        var dayName = weekdayNamesAdmin[date.getDayAdmin()];
        var appointmentsTodayAdmin = getAppointmentsAdmin(date);
        html += ` 
            <div class="weekday" onclick="dayDateAdmin()"> 
                 ${appointmentsTodayAdmin.length} avtaler
            </div>
            
            `;
        }
        return html;
}