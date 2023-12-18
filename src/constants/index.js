import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  viralmeme,
  carrent,
  consultbuddy,
  learnturtle,
  jobit,
  tripguide,
  threejs,
  python,
  dezy
} from "../assets";

export const navLinks = [
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Dezy(formerly Smile.Ai)",
    icon: dezy,
    iconBg: "#383E56",
    date: "March 2022 - Current",
    points: [
      "Used ReactJS, NextJS, Tailwind CSS for frontend, and Django for backend.",
      "Created lead generation features end-to-end to improve customer retention by 30%. Made scalable and robust infrastructure using SQS and lambda, protecting lead data during system crashes.",
      "Made a custom meme editor using a ready-made meme library which increased retention by 50%",
      "Configured auto OTP read and Google authentication using Firbease",
      "Used MixPanel for analytics and worked on Crashlytics to resolve up to 90% of bugs."
    ],
  },
  {
    title: "Android Developer",
    company_name: "ViralMeme",
    icon: viralmeme,
    iconBg: "#E6DEDD",
    date: "Dec 2019 - Jan 2021",
    points: [
      "Tech Stack Used - Java, Kotlin, XML, Firebase, Mixpanel.",
      "Developed Android applications from scratch, and set up projects and repositories.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Prince is an intelligent, hard-worker and responsible person. ",
    name: "Shivam Yuvraj",
    designation: "Engineering Manager",
    company: "Razorpay",
    image: "https://www.linkedin.com/in/shivam-yuvraj-9a110293/",
  },
  {
    testimonial:
      "Prince has single single-handedly managed the Andriod development of Our App. ",
    name: "Ankit Kumat Saw",
    designation: "Financial Mathematics, NCSU",
    company: "",
    image: "https://www.linkedin.com/in/ankitsaw/overlay/photo/",
  }
];

const projects = [
  {
    name: "Consult Buddy",
    description:
      "Easy consulting website which lets you track company records.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: consultbuddy,
    source_code_link: "https://github.com/prince-09/consult-buddy",
  },
  {
    name: "Learn Turtle",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "pagination",
        color: "pink-text-gradient",
      },
    ],
    image: learnturtle,
    source_code_link: "https://learnturtle.co/",
  },
];

export { services, technologies, experiences, testimonials, projects };
