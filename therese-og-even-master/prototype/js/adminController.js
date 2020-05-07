function addEvent(){

let selectType = document.getElementById('eventType').value;
let timeSlotSelect = document.getElementById('timeSlot').value;
let maxParticipantsSelect = document.getElementById('maxPeople').value;
let dateSelect = document.getElementById('dateEvent').value;
let nameOnEvent = document.getElementById('eventName').value;
let priceOnEvent = document.getElementById('eventPrice').value;
let informationEvent = document.getElementById('eventInfo').value;
let eventID = model.categories.length + 1; 
let colorSelect =  model.categories.color;
if(selectType === 'Yoga'){
  selectType = 1 
  colorSelect = `<p  class="ccRed">☯</p>`;
}
if(selectType === 'Event'){
  selectType =  2; 
  colorSelect = `<p  class="ccBlue">☯</p>`;
}
if(selectType === 'Session'){
  selectType = 3;
  colorSelect = `<p  class="ccGreen">☯</p>`;
}
if(timeSlotSelect === "08.00-10.00"){
  timeSlotSelect = 0
};
if(timeSlotSelect === "10.00-12.00"){
  timeSlotSelect = 1
}
if(timeSlotSelect === "12.00-14.00"){
  timeSlotSelect = 2
}
if(timeSlotSelect === "14.00-16.00"){
  timeSlotSelect = 3
}
if(timeSlotSelect === "16.00-18.00"){
  timeSlotSelect = 4
}


model.categories.push({
    id: `${eventID}`,
    name: `${nameOnEvent}`,
    category: `${selectType}`,
    info: `${informationEvent}`,
    date: `${dateSelect}`,
    price: `${priceOnEvent}`,
    maxParticipants: `${maxParticipantsSelect}`,
    color: `${colorSelect}`,
    time: {
    timeSlot: `${timeSlotSelect}`},
    
})}




  
  
  
  
  function pushNewEvent(){
    //Her kan admin legge til et nytt fast event.
  }

  function changeInfo(){
    //endre informasjonsteksten som er der fra før og pushe oppdatering til modelen
  }

  
  