
/* Header Menu */
export const menuItems = [
    {
        name : 'Home',
        link : '/',
        submenu : []
    },
    {
        name : 'Quick Menu',
        link : '',
        submenu : [
            {
                link : '',
                name : 'React Installation',
                divider: false
            },
            {
                link : '',
                name : 'Useful Packages',
                divider: false
            },
            {
                link : '',
                name : 'React Doc. Summary',
                divider: false
            } 
        ],
    },
    {
        name : 'Class Component Examples',
        link : '',
        submenu : [
            {
                link : '',
                name : 'Clock',
                divider: false
            },
            {
                link : '',
                name : 'Warning',
                divider: false
            },
            {
                link : '',
                name : 'Toggle',
                divider: false
            },
            {
                link : '',
                name : 'Login',
                divider: false
            },
            {
                link : '',
                name : 'Form',
                divider: false
            },
            {
                link : '',
                name : 'Temperature Calculator',
                divider: true
            },
            {
                link : '',
                name : 'Search Product',
                divider: true
            }      
        ],
    },
    {
        name : 'Hook Examples',
        link : '',
        submenu : [
            {
                link : '',
                name : 'Click Counter',
                divider: false
            }
        ],
    }
];

/* Image Slider */
export const sliderImages = [
    {
        fileName: "slider-react-planet.png",
        title   : "Welcome To React.",
        summary : "Prepare yourself for landing, before exploring."
    },
    {
        fileName: "slider-react-inner-me.png",
        title   : "Now What?",
        summary : "Get inspired if all your hope is lost."
    },
    {
        fileName: "slider-react-info.png",
        title   : "Next Stop React Native.",
        summary : "Embrace yourself for another adventure."
    } 
];

/* To Do List */
export const toDoList = [
    {
        border: 'primary',
        header: 'Learn Modern Javascript.',
        title: 'Example Topics',
        text: [
          'Execution Context',
          'First Class Citizen',
          'Class field',
          'Rest parameters',
          'Spread Operator',
          'Computed property names',
          'Destructuring assignment'
        ],
        link:'https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=1',
        linkName:'Video Tutorial',
        timeline: '1 month'
    },
    {
      border: 'secondary',
      header: 'Learn React Js.',
      title: 'Important Topics',
      text: [
        'Props and State',
        'Class Component',
        'Higher-Order Components',
        'Uncontrolled Components',
        'Hooks',
        'Lifting State Up',
        'Composition vs Inheritance'
      ],
      link:'https://reactjs.org/docs/getting-started.html',
      linkName:'React Documentation',
      timeline: '1 month'
    },
    {
      border: 'warning',
      header: 'Create And Host A Simple Web App.',
      title: 'Website Design',
      text: [
        'Menu',
        'Slider',
        'Body',
        'Footer',
        'Navigation using react router',
        'Google Map and EmailJs',
        'CRUD operation'
      ],
      link:'',
      linkName:'',
      timeline: '2 weeks'
    }
];

/* Query List */
export const faqList = [
    {
        title: 'Why react ?',
        summary: 'React focuses on thinking about how the UI should look at any given moment, rather than how to change it over time, which eliminates a whole class of bugs.',
    },
    {
        title: 'What is purpose of react ?',
        summary: 'There should be a single “source of truth” for any data that changes in a React application.',
    },
    {
        title: 'How to decide when to make a new component ?',
        summary: 'By using the Single-responsibility principle.',
    },
    {
        title: 'Which data model does react use ?',
        summary: 'Json data model.',
    },
    {
        title: 'How many data model does react use ?',
        summary: 'There are two types of “model” data in React: props and state.',
    },

];