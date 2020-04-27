const model = {
  current : {
    monthStartMonday: null,
    week: null
  },
  selectedModule: "Home",
  logInSession: "Bruker",
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
    // courses: [
    //   {
    //     id: 1,
    //     name: "Vår-yin",
    //     date: "2020-05-01",
    //     maxParticipants: 10,
    //     participants: ["even", "therese"],
    //     category: 1
    //   },
    //   {
    //     id: 2,
    //     name: "Yin",
    //     date: "2020-04-01",
    //     maxParticipants: 15,
    //     participants: ["even", "therese"],
    //     category: 1
    //   },
    //   {
    //     id: 3,
    //     name: "Midnattsyogaevent",
    //     date: "2020-05-02",
    //     maxParticipants: 5,
    //     participants: [],
    //     category: 2
    //   },
    //   {
    //     id: 4,
    //     name: "Veileding",
    //     date: "2020-05-05",
    //     maxParticipants: 1,
    //     participants: ['Even'],
    //     category: 3
    //   }
    // ]
  },

  menuOptions: [
    { id: 5, functionName: "home", txt: "&#127968;", onlyForAdmin: false },
    { id: 3, functionName: "showInfo", txt: "Informasjon", onlyForAdmin: false },
    { id: 4, functionName: "userCalendar", txt: "Kalender & Booking", onlyForAdmin: false },
    { id: 2, functionName: "showLogIn", txt: "Logg inn", onlyForAdmin: false },
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
    { id: 1, name: "Yoga", category: null, info: '', color: null, },
    { id: 2, name: "Event", category: null, info: '' },
    { id: 3, name: "Session", category: null, info: '' },
    {
      id: 4,
      name: "Yin & Yang",
      info: "pusteyoga",
      date: '2020-03-24',
      price: 1500,
      maxParticipants: 15,
      currentParticipants: 5,
      participants: [1,2],
      category: 1,
      color: `<p style="color: red;  font-size:20px; float:left;">.</p>`,
      time: {
        
        timeSlot: 1,
      }
    },
    {
      id: 5,
      name: "Manneyoga",
      info: "Dette er en behagelig øvelse som passer for menn",
      date: '2020-04-14',
      price: 2000,
      maxParticipants: 10,
      currentParticipants: 2,
      category: 1,
      color: `<p style="color: red;  font-size:20px; float:left;">.</p>`,
      time: {
        timeSlot: 2,
      }
    },
    {
      id: 6,
      name: "Yin",
      info: "Bevegelse",
      date: '2020-05-05',
      price: 1000,
      maxParticipants: 12,
      currentParticipants: 3,
      category: 1,
      color: `<p style="color: blue; font-size:20px; float:left;">.</p>`,
      time: {
        timeSlot: 0,
      }
    },
    {
      id: 7,
      name: "Fullmåne-yoga",
      info: "yoga ved fullmåne",
      date: '2020-04-24',
      price: 1000,
      maxParticipants: 5,
      currentParticipants: 5,
      category: 2,
      color: `<p style="color: blue; font-size:20px; float:left;">.</p>`,
      time: {
        timeSlot: 4,
      }
    },
    {
      id: 8,
      name: "Nymåne-yoga",
      info: "yoga ved nymåne",
      date: '2020-04-15',
      price: 1000,
      maxParticipants: 5,
      currentParticipants: 2,
      category: 2,
      color: `<p style="color: blue; font-size:20px; float:left;">.</p>`,
      time: {
        timeSlot: 2,
      }
    },
    {
      id: 9,
      name: "Veiledning",
      info: "veilednings time",
      date: '2020-04-20',
      price: 1500,
      maxParticipants: 1,
      currentParticipants: 0,
      category: 3,
      color: `<p style="color: green; font-size:20px; float:left;">.</p>`,
      time: {
        timeSlot: 3,
      }
    },
    
    {
      id: 11,
      name: "Yoga",
      info: "Fjernes bare test",
      date: '2020-04-25',
      price: 1500,
      maxParticipants: 1,
      currentParticipants: 1,   // step 2: pushe id'ene til den som er logga inn inn her hvor den melder seg på - ha et eget number of Parti. 
      category: 3,
      color: `<p style="color: green; font-size:20px; float:left;">.</p>`,
      time: {
        timeSlot: 4,
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
      id: 1,   
      name: "Even Vågen",
      password: "passord",
      adress: "Skien",
      phone: "12345678",
      email: "hei@hotmail.com",
      isAdmin: true,
      category: 2
    },
    {
      id: 2,
      name: "Therese Nordnes",
      password: "lol",
      adress: "Verningen",
      phone: "87654321",
      email: "hade@hotmail.com",
      isAdmin: false,
      category: 1
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

