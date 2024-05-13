const Projects = [
  {
    title: "HR Asesor Data Management System",
    description:
      "In this project, I developed a full-stack web application using the MERN (MongoDB, Express.js, React, and Node.js) stack to create, read, update, and delete (CRUD) asesor data for my company's HR department,  with stats and filters to make the system user-friendly for HR professionals to manage the information of asesors within the organization efficiently.",
    imageUrl: "/images/asesor-thumbnail.png",
    features: [
      {
        title: "CRUD Operations",
        list: [
          "Create: HR professionals can easily add new asesors to the system, providing essential details such as personal information, qualifications, and contact details.",
          "Read: A dynamic and searchable interface enables quick access to detailed profiles of individual asesors.",
          "Update: HR administrators can efficiently modify and update asesor information, ensuring data accuracy and relevance.",
          "Delete: The system allows for the removal of obsolete or inactive asesors, maintaining a clean and up-to-date database.",
        ],
      },
      {
        title: "Statistical Insights",
        list: [
          "This project provides insightful statistics of the asesor data, offering HR professionals a comprehensive overview",
        ],
      },
      {
        title: "Advanced Filtering",
        list: [
          "Robust filtering options enable HR personnel to customize views based on specific criteria, enhancing the efficiency of data management.",
        ],
      },
      {
        title: "Responsive UI/UX Design",
        list: [
          "The user interface is designed to be intuitive and responsive, ensuring a seamless experience across different devices and screen sizes.",
          "Interactive elements enhance usability, making it easy for HR professionals to navigate and perform tasks efficiently.",
        ],
      },
    ],
    techStack: [
      "Frontend: React.js for a dynamic and responsive user interface.",
      "Backend: Node.js and Express.js for server-side development.",
      "Database: MongoDB for efficient and scalable data storage.",
      "Deployment: VPN for security.",
    ],
    additionalDesc:
      "Benefits: The Asesor Management System optimizes the HR workflow by providing a centralized and efficient platform for managing asesor data. With its intuitive interface, advanced features, and robust security measures, AMS empowers HR professionals to make informed decisions, maintain data accuracy, and enhance overall productivity in handling the workforce within the organization.",
  },
  {
    title: "Exam Admin Dashboard",
    description:
      "This application aims to empower company administrators with the tools they need to monitor and ensure the completeness of essential documents while the exam is going.",
    imageUrl: "/images/adminApp-thumbnail.jpg",
    features: [
      {
        title: "Real-Time Monitoring",
        list: [
          "The dashboard provides a real-time overview of ongoing exams, displaying key metrics such as the number of participants, exam progress, and completion status.",
          "Administrators can quickly assess the status of multiple exams simultaneously, ensuring efficient supervision.",
        ],
      },
      {
        title: "Document Completeness Checker",
        list: [
          "The application includes a document completeness checker that verifies whether participants have submitted all required documents for the exam.",
          "Administrators receive instant notifications for any missing or incomplete documents, allowing for prompt follow-up.",
        ],
      },
      {
        title: "Participant Analytics",
        list: [
          "Detailed analytics on participant performance and engagement during exams are available, aiding administrators in understanding trends and identifying potential issues.",
          "Visual representations, such as charts and graphs, provide insights into participant behavior and performance metrics.",
        ],
      },
      {
        title: "User-Friendly Interface",
        list: [
          "The dashboard boasts a user-friendly and responsive design, ensuring a seamless experience for administrators across various devices.",
          "Intuitive navigation and interactive elements contribute to a straightforward and efficient user experience.",
        ],
      },
    ],
    techStack: [
      "Frontend: ReactJS and TailwindCSS for a dynamic and interactive user interface.",
      "Deployment: VPN for security.",
    ],
    additionalDesc:
      "The Exam Admin Dashboard enhances the efficiency and accuracy of exam administration by providing administrators with a centralized hub for monitoring, document management, and communication. With its real-time capabilities and user-friendly interface, the application empowers administrators to ensure the smooth execution of exams, uphold document completeness, and promptly address any issues that may arise during the examination process.",
  },
  {
    title: "F1 Standings Tracker",
    description:
      'The "F1 Standings Tracker" is a web frontend project built using ReactJS that allows Formula 1 enthusiasts to stay updated with the latest drivers standings in the F1 racing season. This dynamic and user-friendly application fetches data from an API source to provide real-time information about the current standings of F1 drivers, their points, and their team affiliations.',
    livePageLink: "https://f1.dimnyan.tech/",
    sourceCodeLink: "https://github.com/dimnyan/f1-app",

    imageUrl: "/images/f1-thumbnail.png",
    features: [
      {
        title: "Real-Time Standings",
        list: [
          "The application fetches live data from a public API source, providing users with up-to-the-minute information on the current Formula 1 drivers' standings.",
          ,
          "Users can stay informed about changes in rankings, points, and team affiliations as the racing season progresses.",
        ],
      },
      {
        title: "Responsive Design",
        list: [
          "The application is designed to be responsive, ensuring a seamless experience across different devices, including desktops, tablets, and mobile phones.",
          ,
          "Responsive design elements adapt to various screen sizes, maintaining functionality and aesthetics.",
        ],
      },
    ],
    techStack: [
      "Frontend: ReactJS and TailwindCSS for a dynamic and reactive user interface.",
      "API Integration: Utilizes a public API as the data source for real-time F1 standings.",
      "Routing: React Router for seamless navigation within the application.",
    ],
    additionalDesc:
      'The "F1 Standings Tracker" caters to the avid Formula 1 fan base, offering a visually appealing and feature-rich platform to stay connected with the latest developments in the racing season. By harnessing the capabilities of ReactJS and a public API, this application provides an engaging and interactive experience, making it the go-to resource for enthusiasts seeking real-time updates on F1 drivers standings, points, and team affiliations.',
  },

  {
    title: "Personal Landing Page",
    description:
      "Making a memorable first impression on the digital stage. Welcome to my Personal Landing Page! Build with Next.js & Tailwind CSS. This project is a showcase of modern web development excellence, powered by Next.js and styled with the elegance of Tailwind CSS. Hosted on Vercel, it's a dynamic, lightning-fast, and visually stunning personal landing page.",
    sourceCodeLink: "https://github.com/dimnyan/dimnyan-tech",
    livePageLink: "#",
    imageUrl: "/images/landing-thumbnail.png",
    features: [
      {
        title: "Next.js - React Framework",
        list: [
          "Leverages the power of React for a seamless and interactive user experience.",
          "Server-side rendering for enhanced performance and SEO optimization.",
          "Efficient routing and component-based architecture for maintainability.",
        ],
      },
      {
        title: "Tailwind CSS - Elegant Styling",
        list: [
          "Stylish and elegant design achieved with the utility-first approach of Tailwind CSS.",
          "Customizable and responsive components for a visually appealing layout.",
          "Theming and consistent styling across the entire landing page.",
        ],
      },
      {
        title: "Vercel - High-Performance Hosting",
        list: [
          "Hosted on Vercel, a platform known for its speed and reliability.",
          "Automatic deployments from version control, ensuring the latest updates are always live.",
          "Global content delivery network (CDN) for lightning-fast page loading times.",
        ],
      },
    ],
    techStack: [
      "Frontend: Next.js for React-based web development.",
      "Styling: Tailwind CSS for a clean and elegant design.",
      "Hosting: Vercel for high-performance hosting and automatic deployments.",
    ],
    additionalDesc:
      "This Personal Landing Page is not just a digital presence; it's an experience. This page is designed to leave a lasting impression. Explore my work, discover my skills, and connect with me - all within a seamlessly crafted digital environment.",
  },

  {
    title: "Expense Tracking App ",
    description:
      "This project is part of my Udemy course in ReactJS, focusing on the creation of an Expense Tracker App. The core functionality of this app includes expense entry, categorization, and a dynamic chart with real-time updates as users apply filters.",
    sourceCodeLink: "https://github.com/dimnyan/Udemy-React-expenseApp",
    imageUrl: "/images/expense-thumbnail.png",
    features: [
      {
        title: "Expense Entry",
        list: [
          "Users can effortlessly add new expenses by providing details such as the amount, description, and date of the expenditure.",
        ],
      },
      {
        title: "Real-time Dynamic Chart",
        list: [
          "A dynamic chart provides a visual representation of expense data, offering insights into spending trends over time.",
          "The chart updates in real-time as users apply filters or add new expenses, providing an instant overview of their financial activities.",
        ],
      },
      {
        title: "Filtering and Sorting:",
        list: [
          "Users can apply filters to view expenses based on specific criteria, such as date",
          "Sorting options allow for a customized display of expense data, enhancing the user's ability to analyze and manage their finances.",
        ],
      },
      {
        title: "User-Friendly Interface",
        list: [
          "The app features a clean and user-friendly interface designed to enhance the overall user experience.",
          "Responsive design ensures a seamless experience across various devices and screen sizes.",
        ],
      },
    ],
    techStack: [
      "Frontend: ReactJS for building a dynamic and interactive user interface.",
      "Styling: CSS for styling the components and ensuring a visually appealing interface.",
    ],
    additionalDesc:
      "Note: This project is intended for educational purposes and aligns with the curriculum of the Udemy course in ReactJS. The Expense Tracker App provides a practical application of the concepts learned in the course, allowing learners to reinforce their knowledge through hands-on development.",
  },

  {
    title: "Real-Time Markdown Editor",
    description:
      "This project is a web application built with React and Redux that allows users to write and edit text in Markdown format, providing a live preview of the rendered HTML.",
    livePageLink: "http://markdown.dimnyan.tech",
    sourceCodeLink: "https://github.com/dimnyan/fe-challenge-2-freecodecamp",
    imageUrl: "/images/markdown-thumbnail.png",
    features: [
      {
        title: "Markdown Editing",
        list: [
          "Users can write and edit text using Markdown syntax with real-time feedback.",
        ],
      },
      {
        title: "Live Preview",
        list: [
          "The application displays a live preview of the rendered HTML as the user types, ensuring clarity and accuracy.",
        ],
      },
      {
        title: "Redux State Management",
        list: [
          "Redux efficiently manages the application state, including the current Markdown content and potentially additional features like formatting options.",
        ],
      },
      {
        title: "Deployment",
        list: [
          "The application is hosted on Vercel, a robust platform that ensures smooth deployment and high availability",
        ],
      },
      {
        title: "Custom Domain",
        list: [
          "For a professional touch, the application is accessible at the dedicated domain markdown.dimnyan.tech, making it readily accessible and memorable",
        ],
      },
    ],
    techStack: [
      "Frontend: React (JavaScript library for building user interfaces)",
      "State Management: Redux (JavaScript library for predictable state management)",
      "React Markdown Library (e.g., react-markdown): Enables parsing of Markdown syntax and rendering the corresponding HTML",
      "Deployment: Vercel (platform for deployment and hosting)",
      "Domain: markdown.dimnyan.tech (custom domain for accessibility)",
    ],
    additionalDesc:
      "This project is ideal for anyone interested in learning React, Redux, and building interactive web applications. It serves as a valuable tool for earning the FreeCodeCamp certification and showcasing web development expertise in working with rich text formats like Markdown.",
  },
  {
    title: "Interactive Drum Pad",
    description:
      "This project is a web-based drum pad application built with React and Redux, allowing users to create beats by triggering audio samples of drum sounds.",
    livePageLink: "http://drumpad.dimnyan.tech",
    sourceCodeLink: "https://github.com/dimnyan/fe-challenge-3-freecodecamp",
    imageUrl: "/images/drumpad-thumbnail.png",
    features: [
      {
        title: "Drum Pad Interface",
        list: [
          "Provides a user-friendly interface with virtual drum pads that trigger corresponding sounds when clicked.",
        ],
      },
      {
        title: "Audio Playback",
        list: [
          "Plays high-quality audio samples of various drum sounds when a corresponding button is pressed.",
        ],
      },
      {
        title: "Keyboard Integration",
        list: [
          "Utilizes document event listeners to capture key presses and map them to specific drum sounds, providing a tactile playing experience.",
        ],
      },
      {
        title: "Redux State Management",
        list: [
          "Manages application state using Redux, potentially including information on the currently selected drum sound or playback settings.",
        ],
      },
      {
        title: "Custom Domain",
        list: [
          "For a professional touch, the application is accessible at the dedicated domain drumpad.dimnyan.tech, making it readily accessible and memorable",
        ],
      },
    ],
    techStack: [
      "Frontend: React (JavaScript library for building user interfaces)",
      "State Management: Redux (JavaScript library for predictable state management)",
      "Document Event Listener: Captures key presses from the user's keyboard.",
      "Deployment: Vercel (platform for deployment and hosting)",
      "Domain: drumpad.dimnyan.tech (custom domain for accessibility)",
    ],
    additionalDesc:
      "This project is designed for anyone interested in learning React, Redux, and building interactive web applications with sound integration. It serves as a valuable tool for earning the FreeCodeCamp certification and showcasing web development skills in creating engaging user experiences.",
  },
  {
    title: "Dynamic Quote Generator ",
    description:
      "This project showcases a captivating single-page application (SPA) built with React and Redux for state management. It leverages a public quote API to fetch inspiring quotes, keeping users engaged with a continuous stream of wisdom.",
    livePageLink: "http://quotes.dimnyan.tech",
    sourceCodeLink: "https://github.com/dimnyan/fe-challenge-1-freecodecamp",
    imageUrl: "/images/quotes-thumbnail.png",
    features: [
      {
        title: "Random Quote Display",
        list: [
          "The application seamlessly retrieves quotes from a public API, presenting users with a new thought-provoking quote each time they interact with it.",
        ],
      },
      {
        title: "Dynamic Color Scheme",
        list: [
          "To enhance the interactive experience, the background and button colors are randomly generated upon every quote change. This creates a visually dynamic and engaging presentation.",
        ],
      },
      {
        title: "React & Redux Architecture",
        list: [
          "The application leverages React's component-based structure for efficient UI rendering and Redux for centralized and predictable state management",
        ],
      },
      {
        title: "Vercel Deployment",
        list: [
          "The application is hosted on Vercel, a robust platform that ensures smooth deployment and high availability",
        ],
      },
      {
        title: "Custom Domain",
        list: [
          "For a professional touch, the application is accessible at the dedicated domain quotes.dimnyan.tech, making it readily accessible and memorable",
        ],
      },
    ],
    techStack: [
      "Frontend: React (JavaScript library for building user interfaces)",
      "State Management: Redux (JavaScript library for predictable state management)",
      "API Fetching: Public Quote API (source for retrieving quotes)",
      "Deployment: Vercel (platform for deployment and hosting)",
      "Domain: quotes.dimnyan.tech (custom domain for accessibility)",
    ],
    additionalDesc:
      "I hope this project description effectively captures the essence of your quote generator. Feel free to tailor it further to highlight any specific aspects or functionalities you'd like to emphasize.",
  },

  // {
  //   title: "Penguin Wave Animation - HTML CSS",
  //   description:
  //     "The Penguin Wave Animation project is a fun web animation created using HTML and CSS. It features an adorable penguin character with a waving hand, bringing life to the web page users with its playful movement.",
  //   livePageLink: "http://dimnyan.000webhostapp.com/Projects/penguinwave.html",
  //   sourceCodeLink:
  //     "https://github.com/dimnyan/freeCodeCamp-responsiveDesign/tree/main/16.%20Penguin%20Wave",

  //   imageUrl: "/images/penguin-thumbnail.png",
  //   features: [
  //     {
  //       title: "HTML Structure",
  //       list: [
  //         "The HTML structure is clean and straightforward, providing a solid foundation for the penguin animation.",
  //         "Elements are appropriately organized to support the seamless integration of the penguin character into various web pages.",
  //       ],
  //     },
  //     {
  //       title: "CSS Styling",
  //       list: [
  //         "CSS styles are thoughtfully applied to bring the penguin to life, with attention to details such as color, shading, and proportions.",
  //         "The code is well-organized and commented, making it easy for developers to understand and customize the animation to suit different themes or branding.",
  //       ],
  //     },
  //     {
  //       title: "Adorable Penguin Character",
  //       list: [
  //         "The project stars a cute penguin character designed to evoke a sense of joy and playfulness.",
  //         "The penguin comes to life with a dynamic wave animation, creating a lighthearted and entertaining element for website visitors.",
  //       ],
  //     },
  //     {
  //       title: "Responsive Design",
  //       list: [
  //         "The Penguin Wave Animation is designed to be responsive, adapting gracefully to different screen sizes and resolutions.",
  //         "The responsive design ensures that the playful penguin can spread joy across a variety of devices, from desktops to smartphones.",
  //       ],
  //     },
  //   ],
  // },
];
export default Projects;
