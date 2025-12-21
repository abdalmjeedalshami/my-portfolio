import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Articula",
    desc: "Learn with expert anytime anywhere.",
    img: "/static/projects/articulaImage.png",
    link: "https://ixcoders-articula-app.vercel.app/",
    github: "https://github.com/abdalmjeedalshami/ixcoders-articula-app",
    tags: ["HTML", "CSS", "JS", "React", "Bootstrap", "JSON"],
  },
  {
    id: 1,
    title: "3DFi",
    desc: "Create stunning 3D assets effortlessly. No coding required.",
    img: "/static/projects/3dfiImage.png",
    link: "#",
    github: "#",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 2,
    title: "3legant",
    desc: "Stylish furniture, affordable prices, timeless designs, transforming homes into comfortable living spaces.",
    img: "/static/projects/3legant-image.jpg",
    tags: ["HTML", "CSS", "OOP", "Swiper"],
  },
  {
    id: 3,
    title: "Agrios",
    desc: "Agriculture & Organic Market",
    img: "/static/projects/Agrios.png",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 4,
    title: "Crafting Digital",
    desc: "Transforming ideas into elegant solutions through creative design and innovative development",
    img: "/static/projects/crafting-digital.png",
    tags: ["NPM", "HTML"],
  },
  {
    id: 5,
    title: "Future Tech",
    desc: "Explore the Frontiers of Artificial Intelligence",
    img: "/static/projects/future-tech.png",
    tags: ["HTML", "CSS", "OOP", "Swiper"]
  },
  {
    id: 6,
    title: "Lemon Wares",
    desc: "Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.",
    img: "/static/projects/lemon-wares.png",
    tags: ["HTML", "CSS", "OOP", "Swiper"]
  },
  {
    id: 7,
    title: "Madlibs",
    desc: "A simple version of Madlibs built for the web!",
    img: "/static/projects/madlibs.png",
    link: "https://fillemin.netlify.app/",
    github: "https://github.com/braydentw/madlibs",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
