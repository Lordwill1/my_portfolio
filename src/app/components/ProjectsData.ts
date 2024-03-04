interface ProjectDataTypes {
    id: number;
    projectImgURL: string;
    projectTitle: string;
    ProjectAbout: string;
    stack: string;
    projectGithubURL: string;
    projectLiveURL: string;
  }
  
  const ProjectData: ProjectDataTypes[] = [
    {
        id: 1,
        projectImgURL: "/img/getlinked.png",
        projectTitle: "Get-Linked",
        ProjectAbout: "A technology innovation Hackathon established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology",
        stack: "Javascript |Node.js | React.js | Vite | Typescript | TailwindCSS",
        projectGithubURL: "https://github.com/lordwill1/getlinked",
        projectLiveURL: "https://getlinked-ai-hackathon-challenge.vercel.app/",
    },
    {
        id: 2,
        projectImgURL: "/img/Ecommerce.png",
        projectTitle: "Sneakers",
        ProjectAbout: "An Ecommerce website where you upload your products for customers to purchase your products giving them access to various features",
        stack: "JavaScript | HTML | CSS",
        projectGithubURL: "https://github.com/Lordwill1/E-commerce-website",
        projectLiveURL: "https://lordwill1.github.io/E-commerce-website/",
    },
    
    {
        id: 3,
        projectImgURL: "/img/portfolio.png",
        projectTitle: "Portfolio",
        ProjectAbout: "This is the website you are currently on. My portfolio website that showcases my about, what I do, stack, journey, projects and contact information.",
        stack: "NextJS | Typescript | TailwindCSS | AOS",
        projectGithubURL: "https://github.com/Lordwill1/portfolio",
        projectLiveURL: "https://lordwill1.vercel.app/",
    },
    
    {
        id: 2,
        projectImgURL: "/img/jadoo.png",
        projectTitle: "Jadoo",
        ProjectAbout: "A travel agency landing web page that shows the services offered by the agency, the destinations and booking options associated with the agency",
        stack: "NextJS | Typescript | TailwindCSS",
        projectGithubURL: "https://github.com/Lordwill1/jadoo",
        projectLiveURL: "https://jadoo-travels.vercel.app/",
    },
    
     {
         id: 5,
         projectImgURL: "/img/just-do-it.png",
         projectTitle: "Just Do It",
         ProjectAbout: "A responsi, dynamic and aesthetic to-do list web app for keeping track of schedules and activties.",
         stack: "HTML | CSS | Javaript | Local Storage",
         projectGithubURL: "https:github.com/Lordwill1/todo_list",
         projectLiveURL: "https://lordwill1.github.io/todo-list/",
     },
  ]

  export default ProjectData