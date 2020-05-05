const model = {
  current : {
    monthStartMonday: null,
    week: null
  },
  mainPageinfo: 'Her kommer text',
  selectedModule: "Home",
  logInSession: "Bruker",
  guests: ["Meg", "+1", "+2", "+4", "+5", "+6", "+7", "+8", "+9"],
  maxParticipantsInEvents: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  calender: {
    ukepiltastForward: 0,
    currentWeek: '2020-04-20',  
    days: [
      "Mandag",
      "Tirsdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lørdag",
      "Søndag"
    ],
    ukeNr: [1, 2, 3, 4, 5],
    timeSlots: ['08.00-10.00', '10.00-12.00', '12.00-14.00', '14.00-16.00', '16.00-18.00'],

    months: [
      "Januar",
      "Februar",
      "Mars",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Desember"
    ],
    currentEventView: ["monthly", "weekly", "daily"],
  },

  menuOptions: [
    { id: 5, functionName: "home", txt: "&#127968;", onlyForAdmin: false },
    { id: 3, functionName: "showInfo", txt: "Informasjon", onlyForAdmin: false },
    { id: 4, functionName: "userCalendar", txt: "Kalender & Booking", onlyForAdmin: false },
    { id: 2, functionName: "showLogIn", txt: "Logg inn", onlyForAdmin: false}, 
    { id: 1, functionName: "userProfil", txt: "&#128100;", onlyForAdmin: false },
    { id: 6, functionName: "logOut", txt: "Logg Ut", onlyForAdmin: true },
    {
      id: 7,
      functionName: "infoChange",
      txt: "Endre Informasjon",
      onlyForAdmin: true
    },
    {
      id: 8,
      functionName: "adminCalendar",
      txt: "Legg til I kalender",
      onlyForAdmin: true
    }
  ],
  contactInfo: {
    name: "Helle",
    adress: "Larvik",
    phone: "90050098",
    email: "helle@holistica.no"
  },
  selectedCategoryId: null,
  categories: [
    { id: 1, 
      name: "Yoga", 
      category: null, 
      info: '', 
      price: null,
      maxParticipants: 1,
      date: null, 
      color: `<p class="ccRed">☯</p>`,
      time: {
        
        timeSlot: 0,
      }
    },
    { id: 2,
       name: "Event", 
       category: null, 
       info: '', 
       date: null, 
       price: null,
       maxParticipants: null,
       color: `<p class="ccBlue">☯</p>`,
       time: {
        
        timeSlot: 0,
      }
      },
    { id: 3, 
      name: "Session", 
      category: null, 
      info: '',
       date: null, 
       price: null,
       maxParticipants: null,
       color: `<p class="ccGreen">☯</p>`,
       time: {
        
        timeSlot: 0,
      }
       },
    {
      id: 4,
      name: "Yin & Yang",
      info: "pusteyoga",
      date: '2020-05-22',
      price: 1500,
      maxParticipants: 15,
      category: 1,
      color: `<p class="ccRed">☯</p>`,
      time: {
        
        timeSlot: 4,
      }
    },
    {
      id: 5,
      name: "Manneyoga",
      info: "Dette er en behagelig øvelse som passer for menn",
      date: '2020-05-21',
      price: 2000,
      maxParticipants: 10,
      category: 1,
      color: `<p class="ccRed">☯</p>`,
      time: {
        timeSlot: 2,
      }
    },
    {
      id: 6,
      name: "Yin",
      info: "Bevegelse",
      date: '2020-05-20',
      price: 1000,
      maxParticipants: 12,
      category: 1,
      color: `<p  class="ccBlue">☯</p>`,
      time: {
        timeSlot: 3,
      }
    },
    {
      id: 7,
      name: "Fullmåne-yoga",
      info: "yoga ved fullmåne",
      date:  '2020-05-24',
      price: 1000,
      maxParticipants: 5,
      category: 2,
      color: `<p  class="ccBlue">☯</p>`,
      time: {
        timeSlot: 4,
      }
    },
    {
      id: 8,
      name: "Nymåne-yoga",
      info: "yoga ved nymåne",
      date: '2020-05-19',
      price: 1000,
      maxParticipants: 5,
      category: 2,
      color: `<p  class="ccBlue">☯</p>`,
      time: {
        timeSlot: 2,
      }
    },
    {
      id: 9,
      name: "Veiledning",
      info: "veilednings time",
      date: '2020-05-19',
      price: 1500,
      maxParticipants: 1, 
      category: 3,
      color: `<p class="ccGreen">☯</p>`,
      time: {
        timeSlot: 2,
      }
    },
    {
      id: 10,
      name: "Manneyoga",
      info: "Test",
      date: '2020-05-21',
      price: 2000,
      maxParticipants: 10,
      category: 1,
      color: `<p class="ccRed">☯</p>`,
      time: {
        timeSlot: 1,
      }
    },
    
    {
      id: 11,
      name: "Yoga",
      info: "Fjernes bare test",
      date: '2020-05-05',
      price: 1500,
      maxParticipants: 1,// step 2: pushe id'ene til den som er logga inn inn her hvor den melder seg på - ha et eget number of Parti. 
      category: 3,
      color: `<p class="ccGreen">☯</p>`,
      time: {
        timeSlot: 1,
      }
    },
  ],
  login: {
    loggedInUser: null,
    usernameEntry: "",
    passwordEntry: "",
    error: null,
    isAdmin: false
  },
  users: [   //step 3: løkke med if inni - matcher id'en til denne useren til en av de i current participants? isåfall print ut navn
    {
      id: 0,   
      name: "Even Vågen",
      password: "passord",
      adress: "Skien",
      phone: "12345678",
      email: "hei@hotmail.com",
      isAdmin: true,
      program: [
        {eventId: 4, peopleCount: 3}, 
        {eventId: 5, peopleCount: 1}, 
        {eventId: 9, peopleCount: 1}, 
      ],
    },
    {
      id: 1,
      name: "Therese Nordnes",
      password: "lol",
      adress: "Verningen",
      phone: "87654321",
      email: "hade@hotmail.com",
      isAdmin: false,
      program: [
        {eventId: 6, peopleCount: 3}, 
        {eventId: 5, peopleCount: 1},
        {eventId: 11, peopleCount: 1},
      ],
    },
    {
      id: 2,
      name: "Ola Nordmann",
      password: "Passord.",
      adress: "skogen",
      phone: "25364758",
      email: "Brukernavn.",
      isAdmin: false,
      program: [
        {eventId: 4, peopleCount: 1},
        {eventId: 7, peopleCount: 3},
        {eventId: 6, peopleCount: 3},
      ], 
    }
  ],

  newUser: {
    id: 0,       // step 1: autoid for hver bruker - sjekk length til allerede registrerte users og pluss på 1 - i pushen til users
    name: "",
    username: "",
    email: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
    complete: true,
  }
};

