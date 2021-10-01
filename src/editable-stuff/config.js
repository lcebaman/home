// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Luis",
  middleName: "",
  lastName: "Cebamanos",
  message: " Passionate about making the world a better place with High Performance Computing. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/lcebaman",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/lcebamanos/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/naranjito.png"),
  imageSize: 375,
  message:
    "My name is Luis Cebamanos. I am Telecom and Computing Engineer espicialise in High Performance Computing. I beleive in the Open Source Software community and Science. In my free time I do small research projects and train Mixed Martial Arts.",
  resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "lcebaman", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/naranjito.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/naranjito.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 50 },
    { name: "C", value: 80 },
    { name: "C++", value: 65 },
    { name: "Fortran", value: 70 },
    { name: "MPI", value: 80 },
    { name: "OpenMP", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 85 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organisation", value: 65 },
    { name: "Creativity", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm always looking for new Software Engineering challenges and mostly in parallel computing! If you have any ideas or just want to say hi. please feel free to email me at",
  email: "luis.cebamanos@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
    data: [
	{
      role: 'HPC Benchmarking & Applications Specialist',// Here Add Company Name
      companylogo: require('../assets/img/atos.jpeg'),
      date: 'October 2020 – Present',
    },
    {
      role: 'HPC Applications Consultant',// Here Add Company Name
      companylogo: require('../assets/img/epcc.jpeg'),
      date: 'May 2012 – October 2020',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/inquisitive.jpeg'),
      date: 'February 2011 – March 2012',
    },
    {
      role: 'HPC Software Support Engineer',
      companylogo: require('../assets/img/heriot.jpeg'),
      date: 'February 2009 – December 2010',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
