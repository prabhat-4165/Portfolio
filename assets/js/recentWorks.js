const recentWorks = [
  {
    title: "Artistic-Enigma",
    description: "An online web game with public and private rooms.",
    techs: ["MongoDB", "Expressjs", "Reactjs", "Nodejs"],
    img: "/images/artistic-enigma.png",
    links: [
      {
        url: "https://github.com/deepakduvesh/Artistic-Enigma.git",
        label: "Main Repository",
      },
    ],
  },
  {
    title: "Quiz-nest",
    description:
      "An online web quiz application for both teachers and students",
    techs: ["MongoDB", "Expressjs", "Reactjs", "Nodejs"],
    img: "/images/quiz-nest.png",
    links: [
      {
        url: " https://github.com/prabhat-4165/QuizNest.git",
        label: "Main Repository",
      },
    ],
  },
  {
    title: "Chatter-Box",
    description:
      "Chat application with real time notifications using socket.io",
    techs: ["MongoDB", "Expressjs", "Reactjs", "Nodejs"],
    img: "/images/chatter-box.png",
    links: [
      {
        url: "https://github.com/prabhat-4165/ChatterBox.git",
        label: "Main Repository",
      },
    ],
  },
];

const parent = document.getElementById("recent-works");

const getTech = (techs) => {
  return techs
    .map(
      (tech) =>
        `<button type="button" class="text-gray-900 bg-gray-100 border border-gray-100 hover:bg-gray-50 font-medium rounded-md text-sm px-3.5 py-2 mr-2 mb-2 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-600 dark:hover:border-gray-600">
                ${tech}
            </button>`
    )
    .join(" ");
};

const getLinks = (links) => {
  return links
    .map(
      (link) =>
        `<a href="${link.url}" target="_blank"
          class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center rounded-lg text-white bg-blue-500 hover:bg-blue-600 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 mr-2">
          ${link.label}
        </a>`
    )
    .join(" ");
};

const html = recentWorks.map(
  (work) =>
    `<div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="lg:h-36 object-cover">
            <img class="rounded-t-lg w-full" src=${work.img} alt=${
      work.title
    } />
        </div>
        <div class="p-3 border-t border-gray-100 dark:border-gray-600">
            <h5 class="text-xl font-semibold text-gray-900 dark:text-gray-200">${
              work.title
            }</h5>
        <p class="font-light text-gray-800 dark:text-gray-400">${
          work.description
        }</p>
        <div class="my-4 flex flex-wrap">
            ${getTech(work.techs)}
        </div>
        <div class="flex flex-wrap gap-2">
            ${getLinks(work.links)}
        </div>
        </div>
    </div>`
);

parent.innerHTML = html.join(" ");
