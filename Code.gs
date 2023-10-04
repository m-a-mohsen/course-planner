function createEvent() {
  const calendar = CalendarApp.getCalendarById("136f3c380284a044b408eb040241b5b78e68abbe3073bceadc7c9fa11a149d18@group.calendar.google.com");
  const sheet = SpreadsheetApp.getActiveSheet().getDataRange().getValues();

sheet.forEach(function(row){
// seting morning sessions
setEvent(row[0], 9, 30, 10, 30, row[1])
// seting afternoon sessions
setEvent(row[0], 14, 0, 15, 0, row[2])
})

// function which takes date, start hours,start minutes,end hours, end minutes, title
function setEvent( date, startHour, startMinutes, endHour, endMinutes, title) {
    // set start date
  let  morningStartTime = new Date(date)
  morningStartTime.setHours(startHour)
  morningStartTime.setMinutes(startMinutes)

    // set end date
  let  morningEndTime = new Date(date)
  morningEndTime.setHours(endHour)
  morningEndTime.setMinutes(endMinutes)

  calendar.createEvent(title, morningStartTime, morningEndTime,{location:'Spiced Academy, Ritterstraße 12-14, 10969 Berlin, Germany',description: 'Instrctor : ?'})
}

}
