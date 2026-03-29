import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "Articula",
    desc: "Learn with expert anytime anywhere.",
    img: "/static/projects/articulaImage.png",
    link: "https://login-for-vercel.vercel.app",
    github: "https://github.com/abdalmjeedalshami/ixcoders-articula-app",
    tags: ["HTML", "CSS", "JS", "React", "Bootstrap", "JSON"],
  },
  {
    id: 1,
    title: "3legant",
    desc: "Stylish furniture, affordable prices, timeless designs, transforming homes into comfortable living spaces.",
    img: "/static/projects/3legant-image.jpg",
    link: "https://3legant-t.vercel.app",
    github: "https://github.com/abdalmjeedalshami/3legant",
    tags: ["HTML", "CSS", "OOP", "Swiper"],
  },
  {
    id: 2,
    title: "Agrios",
    desc: "Agriculture & Organic Market",
    img: "/static/projects/agrios.png",
    link: "https://agrios-t.vercel.app",
    github: "https://github.com/abdalmjeedalshami/Agrios",
    tags: ["React", "NextJS", "SCSS", "API"],
  },
  {
    id: 3,
    title: "Future Tech",
    desc: "Explore the Frontiers of Artificial Intelligence",
    img: "/static/projects/future-tech.png",
    link: "https://future-tech-t.vercel.app",
    github: "https://github.com/abdalmjeedalshami/future-tech",
    tags: ["HTML", "CSS", "OOP", "Swiper"]
  },
  {
    id: 4,
    title: "Crafting Digital",
    desc: "Transforming ideas into elegant solutions through creative design and innovative development",
    img: "/static/projects/crafting-digital.png",
    link: "https://crafting-digital.vercel.app",
    github: "https://github.com/abdalmjeedalshami/crafting-digital",
    tags: ["NPM", "HTML"],
  },
  {
    id: 5,
    title: "panto",
    desc: "",
    img: "/static/projects/panto.png",
    link: "https://panto-t.vercel.app",
    github: "https://github.com/abdalmjeedalshami/panto",
    tags: ["HTML", "CSS", "OOP", "Swiper"]
  },
  {
    id: 6,
    title: "Via Tours",
    desc: "",
    img: "/static/projects/via-tours.png",
    link: "https://via-tours-t.vercel.app",
    github: "https://github.com/abdalmjeedalshami/via-tours",
    tags: ["HTML", "CSS", "OOP", "Swiper"]
  },
  {
    id: 7,
    title: "3DFi",
    desc: "Create stunning 3D assets effortlessly. No coding required.",
    img: "/static/projects/3dfiImage.png",
    link: "https://3dfi.vercel.app",
    github: "https://github.com/abdalmjeedalshami/3DFi",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 8,
    title: "Lemon Wares",
    desc: "Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.",
    img: "/static/projects/lemon-wares.png",
    link: "https://lemon-wares-t.vercel.app",
    github: "https://github.com/abdalmjeedalshami/lemon-wares",
    tags: ["HTML", "CSS", "OOP", "Swiper"]
  },
  {
    id: 9,
    title: "Best AI chatbots 2025",
    desc: "",
    img: "/static/projects/do-not-found.jpg",
    link: "/projects",
    github: "https://github.com/abdalmjeedalshami/The-best-AI-chatbots-of-2025",
    tags: ["HTML", "CSS", "OOP", "Swiper"]
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
