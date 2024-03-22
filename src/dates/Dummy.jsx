// data routing
export let Data = [
  {
    icon: "fa-solid fa-chart-pie",
    inside: [
      {
        icon: 'fa-solid fa-universal-access',
        text: 'External',
        url: 'main'
    },
    {
        icon: 'fa-solid fa-chart-simple',
        text: 'Internal',
        url: 'marketing'
    },
   
    ],
  },
  {
    icon: "fa-solid fa-diagram-project",
    inside: [
      {
        icon: "fa-solid fa-universal-access",
        text: "PRD",
        url: "prd",
      },
      {
        icon: "fa-solid fa-chart-simple",
        text: "Specifications",
        url: "specification",
      },
    ],
  },
  {
    icon: "fa-solid fa-server",
    inside: [
      {
        icon: "fa-solid fa-universal-access",
        text: "Hardware",
        url: "main",
      },
      {
        icon: "fa-solid fa-chart-simple",
        text: "Software",
        url: "marketing",
      },
    ],
  },
  {
    icon: "fa-solid fa-list",
    inside: [
      {
        icon: "fa-solid fa-universal-access",
        text: "Material",
        url: "main",
      },
      {
        icon: "fa-solid fa-chart-simple",
        text: "Production",
        url: "marketing",
      },
    ],
  },
  {
    icon: "fa-solid fa-octopus-deploy",
    inside: [
      {
        icon: "fa-solid fa-universal-access",
        text: "Online",
        url: "main",
      },
      {
        icon: "fa-solid fa-chart-simple",
        text: "Dealearship",
        url: "marketing",
      },
    ],
  },
];

// task data card
export let dateCards = [
  {
    text: "Completed Task",
    task: "100",
    color: "border-violet-500",
  },
  {
    text: "Previous",
    task: "200",
    color: "border-yellow-500",
  },
  {
    text: "Next task",
    task: "50",
    color: "border-lime-500",
  },
  {
    text: "Working",
    task: "150",
    color: "border-red-500",
  },
 
 
];

export let topSellingAndGrossingItems = [
  {
    title: "Top selling items by Employee",
    items: [
      {
        img: "https://cdn3d.iconscout.com/3d/premium/thumb/human-10561578-8511733.png?f=webp",
        text: "Best selling previous year by Alisa jain",
        money: "$100,000",
        percentage: "+8.5%",
        color: "text-lime-600",
      },
      {
        img: "https://static-cdn.icons8.com/l/3d/images/cu1_with_coffee_girl_2_close-up.webp",
        text: "Best selling previous year by Aisha parmar",
        money: "$ 10000",
        percentage: "+2.5%",
        color: "text-lime-500",
      },
      {
        img: "https://static-cdn.icons8.com/l/3d/images/2_thumb_up_man_1.webp",
        text: "Best selling previous year by Ritesh ojha",
        money: "$ 7000",
        percentage: "-0.5%",
        color: "text-yellow-600",
      },
    ],
  },
  {
    title: "New joiner Employee and selling items",

    // title: "Top grossing items",
    items: [
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlJIUlf33dFRivxgal5kvBvC4wE6NF7floQ&usqp=CAU",
        text: "Best selling previous year by Rehan Ahmad",
        money: "$5000",
        percentage: "+2.5%",
        color: "text-lime-500",
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJoaOxJjKSkO5bDEuhaGx52UVTMf3voNTW9fSlaqTxBS_T5TAgxbr1kceqORK7PvuVwdA&usqp=CAU",
        text: "Best selling previous year by Md.  Arif ",
        money: "$3000 ",
        percentage: "+1.5%",
        color: "text-lime-500",
      },
      {
        img: "https://as2.ftcdn.net/v2/jpg/05/93/63/91/1000_F_593639138_VxNCmuUqt7FqDosQzMs3FwH7Hh9TVfgE.jpg",
        text: "Best selling previous year by Ayhan",
        money: "$ 2.302,00",
        percentage: "-0.5%",
        color: "text-orange-600",
      },
    ],
  },
];
// all main condidate data is here
export let dateStaff = [
  {
    name: "Alica Kane",
    percent: "Founder",
    color: "text-orange-400",
    money: "$294",
  },
  {
    name: "Bena Kane",
    percent: "CEO",
    color: "text-blue-400",
    money: "$294",
  },
  {
    name: "John walke",
    percent: "Manager",
    color: "text-lime-500",
    money: "$1,912",
  },

  {
    name: "Firmino Kudo",
    percent: "HR",
    color: "text-indigo-700",
    money: "$2,009",
  },
  {
    name: "Beby Jovancy",
    percent: "Team Leader",
    color: "text-yellow-500",
    money: "$1,089",
  },
];

// pie chart data sales
export let dataPie = [
  {
    x: "Mini Car",
    y: 500,
  },
  {
    x: "Intermediate SVU",
    y: 878,
  },
  {
    x: "Pickup",
    y: 608,
  },
  {
    x: "Van",
    y: 787,
  },
  {
    x: "Luxury car",
    y: 368,
  },  
];
// all types car sales 
export let dataColumn = [
  {
    x: "Mini Car ",
    y: 685,
    color: "#af93f7",
  },
  {
    x: "Intermediate",
    y: 878,
    color: "#7443f1",
  },
  {
    x: "Van",
    y: 608,
    color: "#5112f3",
  },
  {
    x: "Luxury car",
    y: 787,
    color: "#2e166b",
  },
  {
    x: "Pick up",
    y: 368,
    color: "#b1a9d2",
  },

];


export const dataLine = [
  [
    { x: " ", y: 292, color: "#FECF24" },
    { x: "Mon, 20", y: 335, color: "#FECF24" },
    { x: "Tue, 21", y: 414, color: "#FECF24" },
    { x: "Wed, 22", y: 365, color: "#FECF24" },
    { x: "Thu, 23", y: 343, color: "#FECF24" },
    { x: "Fri, 24", y: 357, color: "#FECF24" },
    { x: "Sat, 25", y: 213, color: "#FECF24" },
    { x: "Sun, 26", y: 400, color: "#FECF24" },
    { x: "Mon, 27", y: 381, color: "#FECF24" },
    { x: "Tue, 28", y: 404, color: "#FECF24" },
  ],
  [
    { x: " ", y: 274, color: "#B1E71D" },
    { x: "Mon, 20", y: 304, color: "#B1E71D" },
    { x: "Tue, 21", y: 401, color: "#B1E71D" },
    { x: "Wed, 22", y: 352, color: "#B1E71D" },
    { x: "Thu, 23", y: 436, color: "#B1E71D" },
    { x: "Fri, 24", y: 404, color: "#B1E71D" },
    { x: "Sat, 25", y: 446, color: "#B1E71D" },
    { x: "Sun, 26", y: 298, color: "#B1E71D" },
    { x: "Mon, 27", y: 293, color: "#B1E71D" },
    { x: "Tue, 28", y: 307, color: "#B1E71D" },
  ],
  [
    { x: " ", y: 265, color: "#FF736A" },
    { x: "Mon, 20", y: 281, color: "#FF736A" },
    { x: "Tue, 21", y: 292, color: "#FF736A" },
    { x: "Wed, 22", y: 341, color: "#FF736A" },
    { x: "Thu, 23", y: 338, color: "#FF736A" },
    { x: "Fri, 24", y: 314, color: "#FF736A" },
    { x: "Sat, 25", y: 327, color: "#FF736A" },
    { x: "Sun, 26", y: 423, color: "#FF736A" },
    { x: "Mon, 27", y: 415, color: "#FF736A" },
    { x: "Tue, 28", y: 407, color: "#FF736A" },
  ],
  [
    { x: " ", y: 241, color: "#73CB50" },
    { x: "Mon, 20", y: 274, color: "#73CB50" },
    { x: "Tue, 21", y: 284, color: "#73CB50" },
    { x: "Wed, 22", y: 271, color: "#73CB50" },
    { x: "Thu, 23", y: 316, color: "#73CB50" },
    { x: "Fri, 24", y: 294, color: "#73CB50" },
    { x: "Sat, 25", y: 296, color: "#73CB50" },
    { x: "Sun, 26", y: 378, color: "#73CB50" },
    { x: "Mon, 27", y: 438, color: "#73CB50" },
    { x: "Tue, 28", y: 407, color: "#73CB50" },
  ],
  [
    { x: " ", y: 178, color: "#8569F6" },
    { x: "Mon, 20", y: 198, color: "#8569F6" },
    { x: "Tue, 21", y: 249, color: "#8569F6" },
    { x: "Wed, 22", y: 310, color: "#8569F6" },
    { x: "Thu, 23", y: 283, color: "#8569F6" },
    { x: "Fri, 24", y: 297, color: "#8569F6" },
    { x: "Sat, 25", y: 186, color: "#8569F6" },
    { x: "Sun, 26", y: 316, color: "#8569F6" },
    { x: "Mon, 27", y: 389, color: "#8569F6" },
    { x: "Tue, 28", y: 397, color: "#8569F6" },
  ],
];

// chart as like what you want to do show
export let dataBar = [
  {
    x: "Positive",
    task: 13451,
    color: "red",
  },
  {
    x: "Negative",
    task: 11839,
    color: "red",
  },
  {
    x: "comments",
    task: 10463,
    color: "red",
  },

];


// Total expanse in this card
export let card = [
  {
    text: "Total orders",
    icon: "fa-solid fa-file",
    iconColor: "text-indigo-500",
    money: "100",
    percent: "4.2%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "Total sales",
    icon: "fa-solid fa-person-rays",
    iconColor: "text-indigo-500",
    money: "129",
    percent: "2.2%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "Net sales",
    icon: "fa-solid fa-filter-circle-dollar",
    iconColor: "text-indigo-500",
    money: "  20",
    percent: "4.0%",
    percentColor: "text-lime-500",
    trend: "fa-solid fa-arrow-up",
  },
  {
    text: "Cancelled orders",
    icon: "fa-solid fa-circle-xmark",
    iconColor: "text-indigo-500",
    money: "12",
    percent: "1.5%",
    percentColor: "text-orange-600",
    trend: "fa-solid fa-arrow-down",
  },
];

