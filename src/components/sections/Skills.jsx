import React from 'react';
import { BiLogoNetlify, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt, DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaAws, FaCss3Alt, FaDigitalOcean, FaGitAlt, FaGitlab, FaHtml5, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAntdesign, SiExpress, SiFlask, SiJest, SiNuxtdotjs, SiPassport, SiPostman, SiPythonanywhere, SiSequelize, SiTailwindcss, SiTensorflow } from "react-icons/si";

const SkillItem = ({ icon: Icon, label }) => (
  <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium border border-black bg-black text-white dark:border-white dark:bg-black dark:text-white whitespace-nowrap">
    <Icon className="text-2xl" /> {label}
  </span>
);

const ScrollingRow = ({ skills, direction = 'left', speed = 'normal' }) => {
  const speedClass = {
    slow: 'animate-scroll-slow',
    normal: 'animate-scroll',
    fast: 'animate-scroll-fast'
  }[speed];

  return (
    <div className="relative flex overflow-x-hidden">
      <div className={`flex gap-4 animate-scroll ${direction === 'right' ? 'animate-scroll-reverse' : ''} ${speedClass}`}>
        {[...skills, ...skills].map((skill, index) => (
          <SkillItem key={`${skill.label}-${index}`} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </div>
  );
};

function Skills() {
  const row1 = [
    { icon: FaHtml5, label: "HTML" },
    { icon: FaCss3Alt, label: "CSS" },
    { icon: IoLogoJavascript, label: "JavaScript" },
    { icon: BiLogoTypescript, label: "TypeScript" },
    { icon: FaPython, label: "Python" },
    { icon: FaReact, label: "React" },
    { icon: SiExpress, label: "Express" },
    { icon: FaNodeJs, label: "NodeJS" },
    { icon: SiFlask, label: "Flask" },
    { icon: SiTailwindcss, label: "Tailwind" }
  ];

  const row2 = [
    { icon: FaVuejs, label: "VueJS" },
    { icon: SiNuxtdotjs, label: "NuxtJS" },
    { icon: SiJest, label: "Jest" },
    { icon: SiTensorflow, label: "Tensorflow" },
    { icon: SiAntdesign, label: "Ant Design Vue" },
    { icon: FaGitAlt, label: "Git" },
    { icon: DiGithubAlt, label: "Github" },
    { icon: FaGitlab, label: "Gitlab" },
    { icon: BiLogoNetlify, label: "Netlify" },
    { icon: CgVercel, label: "Vercel" }
  ];

  const row3 = [
    { icon: IoLogoFirebase, label: "Firebase" },
    { icon: SiPostman, label: "Postman" },
    { icon: FaDigitalOcean, label: "Digital Ocean" },
    { icon: FaAws, label: "AWS EC2" },
    { icon: DiMongodb, label: "MongoDB" },
    { icon: BiLogoPostgresql, label: "PostgreSQL" },
    { icon: SiSequelize, label: "Sequelize" },
    { icon: SiPassport, label: "PassportJS" },
    { icon: FaDocker, label: "Docker" },
    { icon: SiPythonanywhere, label: "PythonAnywhere" }
  ];

  return (
    <section id="skills" className="mx-4 lg:mx-20">
      <h4 className="text-black text-left my-20 text-3xl font-bold mb-8 dark:text-gray-200">
        cd /home/Tech
      </h4>
      <div className="flex flex-col gap-8">
        <ScrollingRow skills={row1} direction="left" speed="normal" />
        <ScrollingRow skills={row2} direction="right" speed="slow" />
        <ScrollingRow skills={row3} direction="left" speed="fast" />
      </div>
    </section>
  );
}

export default Skills;