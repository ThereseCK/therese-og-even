const model = {
  selectedModule: "Home",
  logInSession:"Bruker",
  calender: {
    days: [
      "Mandag",
      "Tirsdag",
      "Onsdag",
      "Torsdag",
      "Fredag",
      "Lørdag",
      "Søndag"
    ],
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
    courses: [
      {
        id: 1,
        name: "Vår-yin",
        date: "2020-05-01",
        maxParticipants: 10,
        participants: ["even", "therese"],
        category: 1
      },
      {
        id: 2,
        name: "Yin",
        date: "2020-04-01",
        maxParticipants: 15,
        participants: ["even", "therese"],
        category: 1
      },
      {
        id: 3,
        name: "Midnattsyogaevent",
        date: "2020-05-02",
        maxParticipants: 5,
        participants: [],
        category: 2
      },
      {
        id: 4,
        name: "Veileding",
        date: "2020-05-05",
        maxParticipants: 1,
        participants: ['Even'],
        category: 3
      }
    ]
  },

  menuOptions: [
    { id: 1, functionName: "profil", txt: "&#128100;", onlyForAdmin: false },
    { id: 2, functionName: "showLogIn", txt: "Logg inn", onlyForAdmin: false },
    { id: 3, functionName: "showInfo", txt: "Informasjon", onlyForAdmin: false },
    { id: 4, functionName: "showMonth", txt: "Kalender & Booking", onlyForAdmin: false },
    { id: 5, functionName: "home", txt: "&#127968;", onlyForAdmin: false },
    { id: 6, functionName: "logOut", txt: "Logg Ut", onlyForAdmin: true },
    {
      id: 7,
      functionName: "infoChange",
      txt: "Endre Informasjon",
      onlyForAdmin: true
    },
    {
      id: 8,
      functionName: "calender",
      txt: "Legg til I kalender",
      onlyForAdmin: true
    }
  ],
  contactInfo: {
    name: "Kontaktperson: Helle",
    adress: "Sted: Larvik",
    phone: "Telefonnummer: 90050098",
    email: "e-post: helle@holistica.no"
  },
  selectedCategoryId: null,
  categories: [
    { id: 1, name: "Yoga", category: null, info: '' },  
    { id: 2, name: "Event", category: null, info: ''},
    { id: 3, name: "Session", category: null, info: '' },
    {
      id: 4,
      name: "Yin & Yang",
      info: "pusteyoga",
      date: '25.3.2020',
      price: 1500,
      maxParticipants: 15,
      currentParticipants: 5,
      category: 1
    },
    {
      id: 5,
      name: "Manneyoga",
      info: "Dette er en behagelig øvelse som passer for menn",
      date: '2020-05-05',
      price: 2000,
      maxParticipants: 10,
      currentParticipants: 2,
      category: 1
    },
    {
      id: 6,
      name: "Yin",
      info: "Bevegelse",
      date: '2020-09-13',
      price: 1000,
      maxParticipants: 12,
      currentParticipants: 3,
      category: 1
    },
    {
      id: 7,
      name: "Fullmåneyoga",
      info: "yoga ved fullmåne",
      date: '2020-10-30',
      price: 1000,
      maxParticipants: 5,
      currentParticipants: 5,
      category: 2
    },
    {
      id: 8,
      name: "Nymåneyoga",
      info: "yoga ved nymåne",
      date: '2020-02-29',
      price: 1000,
      maxParticipants: 5,
      currentParticipants: 2,
      category: 2
    },
    {
      id: 9,
      name: "Veiledning",
      info: "veilednings time",
      date: '2020-05-08',
      price: 1500,
      maxParticipants: 1,
      currentParticipants: 0,
      category: 3
    },
    {
      id: 10,
      name: "Yoga",
      info: "yoga",
      date: '2020-08-30',
      price: 1500,
      maxParticipants: 1,
      currentParticipants: 1,
      category: 3
    }
  ],
  login: {
    loggedInUser: null,
    usernameEntry: "",
    passwordEntry: "",
    error: null,
    isAdmin: false
  },
  users: [
    {
      id: "even",
      name: "Even Vågen",
      password: "passord",
      adress: "Skien",
      phone: "12345678",
      email: "hei@hotmail.com",
      isAdmin: true,
      category: 2
    },
    {
      id: "therese",
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
    name: "",
    username: "",
    email: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
    complete: true,
  }
};