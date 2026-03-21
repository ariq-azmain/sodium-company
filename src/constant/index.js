import {
  mobile,
  backend,
  chess,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
} from "@/assets";

export const navLinks = [
  {
    name: "About",
    href: "#about",
    id: 1,
  },
  {
    name: "Achievement",
    href: "#achievement",
    id: 2,
  },
  {
    name: "Events",
    href: "#events",
    id: 3,
  },
];

// ── Cards Section Data ────────────────────────────────────────────────────────
// Source: original index.html — About, Departments, Events & Competitions sections
// Structure: array of sections, each section has a title + cards array
// Cards.tsx maps over this and renders a Card component per item.

export const cardsData = [
  {
    id: "about",
    title: "About Us",
    cards: [
      {
        title: "Vision & Mission",
        description:
          "Our vision is to empower creators and innovators across IT, media, and gaming sectors.",
      },
      {
        title: "Core Values",
        description:
          "Innovation, collaboration, integrity, and community-first mindset.",
      },
      {
        title: "Timeline / Achievements",
        description:
          "Our journey includes successful events, competitions, and tech products over the years.",
      },
    ],
  },
  {
    id: "achievement",
    title: "Departments",
    cards: [
      {
        title: "Media Department",
        description:
          "Creating content for YouTube, Facebook, Instagram, and more.",
      },
      {
        title: "IT Department",
        description:
          "Productive IT: Web, software, and apps for market. Competitive IT: AI, Robotics, and programming competitions.",
      },
      {
        title: "Gaming Department",
        description:
          "Organizing tournaments, competitions, and community gaming events.",
      },
    ],
  },
  {
    id: "events",
    title: "Events & Competitions",
    cards: [
      {
        title: "Upcoming",
        description: "See all scheduled events and competitions.",
      },
      {
        title: "Ongoing",
        description: "Active events you can join now.",
      },
      {
        title: "Past",
        description: "Highlights and results from previous events.",
      },
    ],
  },
];

export const members = [
  {
    id: 1,
    name: "Alicia Barker",
    img: "/images/members/alicia-barker.png",
    fild: ["Video Editor", "Graphics Designer"],
    dec: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quo dolorum, sunt.",
    link: "http://linkedin.com/",
    color: "#fffddd",
  },
  {
    id: 2,
    name: "Melanie Hurst",
    img: "/images/members/melanie-hurst.png",
    fild: ["SEO", "Digital Marketer"],
    dec: "lorem amet cumque Kind Laborum Editor sunt Lorem ipsum dolor sit amet.",
    link: "http://linkedin.com/",
    color: "#ddffe0",
  },
  {
    id: 3,
    name: "Becky Snider",
    img: "/images/members/becky-snider.png",
    fild: ["App Devoluper"],
    dec: "lorem amet cumque Kind Laborum Lorem ipsum dolor sit amet.",
    link: "http://linkedin.com/",
    color: "#ddffff",
  },
  {
    id: 4,
    name: "Jim Bradley",
    img: "/images/members/jim-bradley.png",
    fild: ["Web Devoluper", " Django"],
    dec: "Laborum Editor sunt Lorem ipsum dolor, sit amet consectetur adipisicing.",
    link: "http://linkedin.com/",
    color: "#ddddff",
  },
  {
    id: 5,
    name: "Jessica Saunders",
    img: "/images/members/jessica-saunders.png",
    fild: ["AI Agent", "Python"],
    dec: "Editor sunt Lorem ipsum dolor sit amet consectetur adipisicing.",
    link: "http://linkedin.com/",
    color: "#feddff",
  },
  {
    id: 6,
    name: "Mark Erixon",
    img: "/images/members/mark-erixon.png",
    fild: ["DotNet", "ASP Devoluper"],
    dec: "lorem amet cumque Kind Laborum Editor sunt Lorem, ipsum dolor.",
    link: "http://linkedin.com/",
    color: "#ffdddd",
  },
];

export const warks = [
  {
    title: "34+ events & computation",
    icon: mobile,
    iconBg: "radial-gradient(circle, #e566a3, #f8d3e5)",
    points: [
      "Lorem iunt autem, qui, totam voluptas",
      "Lorem ipsum dolor, consectetur adipisicing elit. Placeat cum distinctio se autem, qui, totam voluptas",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat cum autem, qui, totam voluptas",
      "Lorem ipsum elit. Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
    ],
  },
  {
    title: "Chess Club",
    icon: chess,
    iconBg: "radial-gradient(circle, #252525, #444444)",
    points: [
      "unde nesciunt autem, qui, totam voluptas",
      "Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
      "consectetur adipisicing elit. Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
      "Lorem ipsum dolor sit",
    ],
  },
  {
    title: "Science Club",
    icon: reactjs,
    iconBg: "radial-gradient(circle, #105946, #6bedcc)",
    points: [
      "totam voluptas",
      "sit amet, consectetur adipisicing elit. Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
      "Lorem ipsum dolor sit amet,  totam voluptas",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
    ],
  },
  {
    title: "20+ Science Fair",
    icon: backend,
    iconBg: "radial-gradient(circle, #00444e, #6eecff)",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
    ],
  },
  {
    title: "Student Management App",
    icon: web,
    iconBg: "radial-gradient(circle, #5c002b, #ff94c6)",
    points: [
      "e adipisci, officiis aspernatur nam ullam accusantium quibusdam, recusandae.em, qui, totam voluptas",
      "esciunt autem, qui, totam voluptas",
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat cum distinctio sed autem, qui, totam voluptas",
      "t amet, consectetur adipisicing elit. Placeat cum distinctio sed unde nesciunt autem, qui, totam voluptas",
    ],
  },
];

export const faq = [
  {
    id: "0",
    question: "What Is My Rule Is In SODIUM?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quam, cumque. Officia vel mollitia doloribus quaerat dolores sint explicabo id, optio corrupti repellendus, totam animi odit quidem dolorem accusantium quae.",
  },
  {
    id: "1",
    question: "What Is The Future Of SODIUM?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis iure error distinctio, labore, non ullam hic sapiente molestiae debitis amet.",
  },
  {
    id: "2",
    question: "What Kind Of Rule In SODIUM?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consequatur tempore dignissimos suscipit nihil nulla molestiae officia?",
  },
  {
    id: "3",
    question: "Why I Join SODIUM?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum similique ad deleniti obcaecati aperiam nobis tenetur ipsam, fuga ea quae non facilis deserunt quas quod consequuntur, pariatur sed voluptates nam. Nostrum, voluptatibus!",
  },
  {
    id: "4",
    question: "How Can I Benefit From SODIUM?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi numquam quaerat dolorem ad quo iste atque ex autem, repellendus deleniti! Tempore, ad.",
  },
  {
    id: "5",
    question: "What Is The Future Plan Of SODIUM?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error voluptatum aut ullam impedit. Corporis itaque eos, quas possimus at molestias! Similique amet quidem voluptatum ullam impedit sunt enim laudantium corporis voluptatibus incidunt ratione numquam nesciunt aliquid a recusandae, dignissimos aliquam?",
  },
  {
    id: "6",
    question: "What Is The Main Focus Of SODIUM?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "7",
    question: "Why I Take Services From SODIUM?",
    answer:
      "Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.",
  },
  {
    id: "8",
    question: "How Mutch People Take Services From SODIUM?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ipsa nam illo veritatis. Lorem ipsum dolor.",
  },
  {
    id: "9",
    question: "How I Become A SODIUM Member?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quibusdam laborum eligendi commodi excepturi sit quos ipsa molestias est consequuntur corporis nostrum hic neque amet, officia repellendus fugit reprehenderit asperiores eius reiciendis minus recusandae non. Rem, cumque, officiis. Praesentium minima hic deserunt illo illum minus natus aperiam, ad doloribus placeat!",
  },
];

export const socialLinks = [
  {
    id: 1,
    name: "Discord",
    icon: "/images/socialLinks/discord.svg",
    link: "https://discord.com",
  },
  {
    id: 2,
    name: "Whats App",
    icon: "/images/socialLinks/wha.svg",
    link: "https://whatsapp.com",
  },
  {
    id: 3,
    name: "GitHub",
    icon: "/images/socialLinks/github.svg",
    link: "https://github.com",
  },
  {
    id: 4,
    name: "Twitter",
    icon: "/images/socialLinks/twit.svg",
    link: "https://twitter.com",
  },
];
