const model = {
  selectedModule: "Home",

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
        participants: ["even", "therese"],
        category: 6
      },
      {
        id: 2,
        name: "Midnattsyogaevent",
        date: "2020-05-02",
        participants: [],
        category: 8
      }
    ]
  },

  menuOptions: [
    { id: 1, functionName: "profil", txt: "&#128100;" },
    { id: 1, functionName: "showLogIn", txt: "Logg inn" },
    { id: 1, functionName: "showInfo", txt: "Informasjon" },
    { id: 1, functionName: "kalender", txt: "Kalender & Booking" },
    { id: 1, functionName: "home", txt: "&#127968;" },
    { id: 2, functionName: "logOut", txt: "Logg Ut", onlyForAdmin: true },
    {
      id: 2,
      functionName: "infoChange",
      txt: "Endre Informasjon",
      onlyForAdmin: true
    },
    {
      id: 2,
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
    { id: 1, name: "Yoga", category: null },
    { id: 2, name: "Event", category: null },
    { id: 3, name: "Session", category: null },
    {
      id: 4,
      name: "Yin & Yang",
      info: "pusteyoga",
      price: 1500,
      maxParticipants: 15,
      currentParticipants: 5,
      category: 1
    },
    {
      id: 5,
      name: "Manneyoga",
      info: "For Menn",
      price: 2000,
      maxParticipants: 10,
      currentParticipants: 2,
      category: 1
    },
    {
      id: 6,
      name: "Yin",
      info: "Bevegelse",
      price: 1000,
      maxParticipants: 12,
      currentParticipants: 3,
      category: 1
    },
    {
      id: 7,
      name: "Fullmåneyoga",
      info: "yoga ved fullmåne",
      price: 1000,
      maxParticipants: 5,
      currentParticipants: 5,
      category: 2
    },
    {
      id: 8,
      name: "Nymåneyoga",
      info: "yoga ved nymåne",
      price: 1000,
      maxParticipants: 5,
      currentParticipants: 2,
      category: 2
    },
    {
      id: 9,
      name: "Veiledning",
      info: "veilednings time",
      price: 1500,
      maxParticipants: 1,
      currentParticipants: 0,
      category: 3
    },
    {
      id: 10,
      name: "Yoga",
      info: "yoga ",
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
    complete: true
  }
};
