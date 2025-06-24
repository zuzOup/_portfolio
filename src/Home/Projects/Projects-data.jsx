export const project_withImg = [
  {
    name: "Travel & Journal Blog",
    text: "A custom travel blog and journal built with React/JavaScript. The app uses Firebase Realtime Database to store and manage content, and it’s deployed via Firebase Hosting. It includes integration with a Historical Weather API to enrich each entry with past weather data. Images are delivered through Google Drive, keeping hosting lightweight and flexible. The design draws from scrapbook aesthetics with layered visuals and personal photos, blending storytelling with real-time data.",
    stack: ["React", "Firebase", "Firebase RTD", "Historical Weather API"],
    github: "https://github.com/zuzOup/blog",
    web: "https://na-rok-torontakama.web.app/",
    img: "/projects/blog.png",
  },
  {
    name: "WYSIWYG Blog Editor",
    text: `A custom blog editor built in React/JavaScript. It uses Tiptap for rich text editing and Dnd Kit for smooth drag-and-drop content reordering. Integrated with Firebase RTD, the editor enables full CRUD functionality — allowing articles to be created, updated, or deleted in real time. It supports embedding images and dynamic data like historical weather. Styled to mirror the final blog layout, it provides a true "What You See Is What You Get" editing experience.`,
    stack: ["JS", "Webpack", "Moment.js", "date-fns"],
    github: "https://github.com/zuzOup/text-editor",
    web: "https://na-rok-torontakama-editor.netlify.app/",
    img: "/projects/editor.png",
  },
  {
    name: "Todo List App",
    text: "A JavaScript todo list app built with Webpack, supporting multiple projects and tasks with details like title, due date, and priority. Features include task creation, editing, deletion, and completion, with data persistence via localStorage. Date handling and formatting are powered by moment and date-fns. The UI enables easy project and task management with clear priority indicators.",
    stack: ["React", "Netlify", "jsPDF", "html2canvas-pro", "Tailwind"],
    github: "https://github.com/zuzOup/The-Odin-Project/tree/main/Todo-List",
    web: "https://zuzoup.github.io/The-Odin-Project/Todo-List/dist/",
    img: "/projects/todo.png",
  },

  {
    name: "Real-Time Resume Editor with PDF Download",
    text: "A React application for creating and editing a personalized CV. The CV design updates in real time as users make edits and can be downloaded as a PDF with a single click using html2canvas-pro to capture a snapshot and jsPDF to generate the PDF. Styled with Tailwind CSS, the project showcases React state management, component design, and interactive UI, deployed live on a modern hosting platform.",
    stack: ["React", "Netlify", "jsPDF", "html2canvas-pro", "Tailwind"],
    github:
      "https://github.com/zuzOup/The-Odin-Project/tree/main/CV-Application%2BTailwind",
    web: "https://sweet-manatee-d66f51.netlify.app/",
    img: "/projects/cveditor.png",
  },
];

/*----------------------------------------------------------------------*/

export const projects_square = [
  {
    name: "The Odin Project",
    text: `Practical web dev projects from *The Odin Project - Full Stack JavaScript Path*`,
    github: "https://github.com/zuzOup/The-Odin-Project",
    innerLink: "https://www.theodinproject.com/",
  },
  {
    name: "Advent Of Code",
    text: `JavaScript solutions to the *Advent of Code* challenges from 2021 to 2024`,
    github: "https://github.com/zuzOup/Advent-of-code",
    innerLink: "https://adventofcode.com",
  },

  {
    name: "Wes Bos Projects",
    text: `Completed projects from *Wes Bos*’ courses`,
    github: "https://github.com/zuzOup/Wes-Bos-Projects",
    innerLink: "https://wesbos.com/courses/",
  },
  {
    name: "Codewars",
    text: `Solved coding katas for practicing JS skills on *Codewars*`,
    web: "https://www.codewars.com/users/zuzOup/completed_solutions",
    innerLink: "https://www.codewars.com/",
  },
  {
    name: "Codecademy",
    text: `Completed front-end projects as part of the Front-End Engineer career path on *Codecademy*`,
    github: "https://github.com/zuzOup/Codecademy",
    innerLink: "https://www.codecademy.com/learn/paths/front-end-engineer-career-path",
  },
  {
    name: " Travel Blog (Old version)",
    text: "A personal travel journal built with vanilla JavaScript — simple, lightweight, and all hand-coded.",
    github: "https://github.com/zuzOup/_blog-old-version",
    web: "https://zuzoup.github.io/_blog-old-version/",
  },
  {
    name: "Blog Text Editor (Old ver.)",
    text: "A custom-built text editor in JavaScript, created for writing and formatting blog posts.",
    github: "https://github.com/zuzOup/_text-editor-old",
    web: "https://zuzoup.github.io/_text-editor-old/",
  },
  {
    name: "Wedding Gallery",
    text: "CSS + JSS photo gallery",
    github: "https://github.com/zuzOup/_wedding-gallery",
    web: "https://zuzoup.github.io/_wedding-gallery/",
  },
];

export function splitText(string, innerLink) {
  if (!string.includes("*")) return string;

  const arr = string.split("*");

  return `${arr[0]}<a href="${innerLink}" target="_blank">${arr[1]}</a>${arr[2]}`;
}

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

export const svg_git = () => {
  return (
    <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
      ></path>
    </svg>
  );
};

export const svg_web = () => {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path
        d="M384,224V408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V168a40,40,0,0,1,40-40H271.48"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="28"
        fill="none"
      ></path>
      <polyline
        points="336 64 448 64 448 176"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="28"
        fill="none"
      ></polyline>
      <line
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="28"
        fill="none"
        x1="224"
        y1="288"
        x2="440"
        y2="72"
      ></line>
    </svg>
  );
};
