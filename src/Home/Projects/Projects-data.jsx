export const projects_big = [
  {
    name: "Travel Blog",
    text: "Travel blog inspired by granma's scrapbook photo albums. The blog was built using React and Vite. It is hosted on Firebase which also doubles as a database. Images are stored on Google Disc. Historical Weather API was used to get weather data for each article.",
    stack: ["React", "Firebase"],
    github: "https://github.com/zuzOup/blog",
    web: "https://na-rok-torontakama.web.app/",
    img: "/public/projects/blog.png",
  },

  {
    name: "Blog Editor",
    text: "Blog Editor that let's me create and edit articles for my blog. The editor was built using React and Vite and it's connected to the blog via Firebase's Realtime Database. I've used React libraries such as TipTap and DnD kit.",
    stack: ["React", "Firebase"],
    github: "https://github.com/zuzOup/text-editor",
    web: "https://na-rok-torontakama-editor.netlify.app/",
    img: "/public/projects/editor.png",
  },
];

export const project_squares = [
  {
    name: "",
    text: "",
    github: "",
    web: "",
    stack: "",
  },
  {},
  {},
  {},
  {},
];

// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

const color = "#005249";

export const svg_git = () => {
  return (
    <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        stroke={color}
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
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill={color}>
      <path
        d="M384,224V408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V168a40,40,0,0,1,40-40H271.48"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="28"
        fill={"none"}
      ></path>
      <polyline
        points="336 64 448 64 448 176"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="28"
        fill={"none"}
      ></polyline>
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="28"
        fill={"none"}
        x1="224"
        y1="288"
        x2="440"
        y2="72"
      ></line>
    </svg>
  );
};
