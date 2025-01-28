const techSkills = [
  {
    title: "Coding Profiles",
    skills: [
      {
        icon: `<i class="fa-solid fa-code text-green-600"></i>`,
        name: "Knight @leecode",
      },
      {
        icon: `<i class="fa-solid fa-trophy text-blue-600"></i>`,
        name: "Pupil @codeforces",
      },
      {
        icon: `<i class="fa-solid fa-book text-yellow-600"></i>`,
        name: "College rank @GFG",
      },
    ],
  },
  {
    title: "Back-end",
    skills: [
      {
        icon: `<i class="fa-brands fa-node text-green-600"></i>`,
        name: "Node.js",
      },
      {
        icon: `<i class="fa-brands fa-node-js text-green-600"></i>`,
        name: "Express.js",
      },
    ],
  },

  {
    title: "Front-end",
    skills: [
      {
        icon: `<i class="fa-brands fa-react text-blue-600"></i>`,
        name: "React",
      },
      {
        icon: `<i class="fa-solid fa-fire text-red-600"></i>`,
        name: "ChakraUI",
      },
      {
        icon: `<i class="fa-brands fa-bootstrap text-purple-600"></i>`,
        name: "Bootstrap",
      },
      {
        icon: `<i class="fa-brands fa-css3-alt text-blue-600"></i>`,
        name: "Tailwind",
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      {
        icon: `<i class="fa-brands fa-js-square text-yellow-500"></i>`,
        name: "JavaScript",
      },
      {
        icon: `<i class="fa-brands fa-html5 text-orange-600"></i>`,
        name: "HTML",
      },
      {
        icon: `<i class="fa-brands fa-css3-alt text-blue-600"></i>`,
        name: "CSS",
      },
      {
        icon: `<i class="fa-solid fa-code text-red-600"></i>`,
        name: "C++",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        icon: `<i class="fa-solid fa-database text-green-700"></i>`,
        name: "MongoDB",
      },
      {
        icon: `<i class="fa-solid fa-database text-blue-700"></i>`,
        name: "MySQL",
      },
      {
        icon: `<i class="fa-solid fa-server text-gray-700"></i>`,
        name: "Mongoose",
      },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      {
        icon: `<i class="fa-brands fa-git-alt text-red-600"></i>`,
        name: "Git",
      },
      {
        icon: `<i class="fa-brands fa-github text-black"></i>`,
        name: "GitHub",
      },
      {
        icon: `<i class="fa-solid fa-laptop-code text-blue-500"></i>`,
        name: "Visual Studio Code",
      },
    ],
  },
];
const parent = document.getElementById("tech-skills");

const getSkill = (skills) => {
  const skillHtml = skills.map(
    (skill) =>
      `<p class="text-md text-gray-700 dark:text-gray-200">
            ${skill.icon}
            ${skill.name}
        </p>`
  );

  return skillHtml.join(" ");
};

const html = techSkills.map(
  (tech) =>
    `<div>
        <h2 class="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">${
          tech.title
        }</h2>
        ${getSkill(tech.skills)}
    </div>`
);

parent.innerHTML = html.join(" ");
