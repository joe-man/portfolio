import React from "react";
import { FaBeer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";

export const experiencesData = [
  {
    title: "Graduated Northcoders Bootcamp",
    location: "London, England",
    description:
      "I graduated after 13 weeks of intense studying. I'm currently looking for a position as a front-end or full-stack developer.",
    icon: React.createElement(FaBeer),
    date: "Nov 2023 - Feb 2024",
  },
  {
    title: "RPA Developer",
    location: "Manchester, England",
    description:
      "I completed various HTML, CSS, Responsive Web Design, JS and React courses with Codecademy and FreeCodeCamp.",
    icon: React.createElement(MdComputer),
    date: "May 2022 - Nov 2023",
  },
  {
    title: "German Language Course",
    location: "Berlin, Germany",
    description:
      "I completed a German language course at VICTORIA University in Berlin, where I achieved level B2 in German.",
    icon: React.createElement(LuGraduationCap),
    date: "October 2022 - August 2023",
  },
  {
    title: "Bar Team Leader",
    location: "Manchester, England",
    description:
      "I worked as a bar team lead, managing bar operations, mainting efficient inventory control and ensuring seamless service during events.",
    icon: React.createElement(BsBriefcase),
    date: "April 2019 - May 2022",
  },
] as const;
