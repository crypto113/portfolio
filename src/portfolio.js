/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "leebrett",
  logo_name: "Brett.Lee",
  nickname: "brett / lee",
  full_name: "Brett Lee",
  subTitle1: "Full Stack Developer,",
  subTitle2: "Open Source Enthusiast 🔥.",
  subTitle3: "Always learning.",
  resumeLink: "https://drive.google.com/file/d/1iCDbEc82A-8_lxA488H8TFk0e82wg1dm/view?usp=sharing",
  mail: "mailto:lee.brett926@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/leebrett926",
  gmail: "lee.brett926@gmail.com",
  gitlab: "https://gitlab.com/leebrett926",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for web and mobile",
        "⚡ Building responsive website front end using ReactJS, Vue, Angular ...",
        "⚡ Senior Blockchain developer for NFT Market place and Defi ...",
        "⚡ Powerful Backend Developer with Node, Express, Meteor, Laravel ...",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Academy of learning College",
      subtitle: "Bachelor of Science",
      logo_path: "ssgandhy.png",
      alt_name: "AOLCC",
      duration: "2012 - 2016",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.academyoflearning.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "M0001: MongoDB Basics",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      alt_name: "MongoDB University",
      color_code: "#47A048",
    },
    {
      title: "Postman Student Expert",
      subtitle: "Postman",
      logo_path: "postman.png",
      alt_name: "Postman",
      color_code: "#fffbf3",
    },
    {
      title: "Node.js",
      subtitle: "Workshop at canada",
      logo_path: "node.png",
      alt_name: "Workshop",
      color_code: "#47A048",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  experiences: [
    {
      title: "Cross Winter of Code Mentor",
      company: "CWOC",
      company_url: "https://crosswoc.ieeedtu.in/",
      logo_path: "cwoc.png",
      duration: "Feb 2021 - Present",
      location: "Work From Home",
      description: "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
      color: "#4285F4",
    },
    {
      title: "Campus Hustler",
      company: "Skillenza",
      company_url: "https://skillenza.com/",
      logo_path: "skillenza.png",
      duration: "Feb 2021 - Present",
      location: "Work from Home",
      description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
      color: "#196acf",
    },
    {
      title: "GitHub Student Developer",
      company: "GitHub",
      company_url: "https://github.com/",
      logo_path: "github.png",
      duration: "Nov 2019 - Present",
      location: "Work from Home",
      description: "Contribute to Open Source Community and Open Source Project.",
      color: "#040f26",
    },
    {
      title: "Google Local Guide",
      company: "Google Map",
      company_url: "https://maps.google.com/localguides/",
      logo_path: "localguide.png",
      duration: "Sep 2018 - Present",
      location: "Work From Home",
      description: "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
      color: "#D83B01",
    },
    {
      title: "GDG Student Volunteer",
      company: "Google Developer Groups",
      company_url: "https://gdg.community.dev/",
      logo_path: "gdg.png",
      duration: "Feb 2021 - Present",
      location: "Work From Home",
      description: "Google Developer Group Surat Student Volunteer and Member.",
      color: "#D83B01",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.svg",
    description: "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "1",
      name: "react-twitter-clone",
      url: "https://github.com/leebrett926/react-twitter-clone",
      description: "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "node-blockchain",
      url: "https://github.com/leebrett926/node-blockchain",
      description: "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos-typescript",
        },
      ],
    },
    {
      id: "3",
      name: "top-crypto-gainers",
      url: "https://github.com/leebrett926/top-crypto-gainers",
      description: "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "4",
      name: "personal-portfolio",
      url: "https://github.com/leebrett926/personal-portfolio",
      description: "A simple command line interface based quiz app to know more about me :).",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "node_express_crud_api_starter",
      url: "https://github.com/leebrett926/node_express_crud_api_starter",
      description: "Simple NodeJS Express CRUD Operations API starter.",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "4",
      name: "Portfolio",
      url: "https://github.com/leebrett926/portfolio",
      description: "A simple Modern interface based Portfolio site to know more about me :).",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "ReactJs",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "10",
      name: "COVID-19 Tracker",
      url: "https://github.com/leebrett926/Covid19TrackerReact",
      description: "Simple Covid-19 Tracker made using React and deployed to Vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },
    {
      id: "12",
      name: "NFT Launchpad",
      url: "https://deliquescent-cents.000webhostapp.com/",
      description: "NFT Launchpad crypto site portfolio",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
