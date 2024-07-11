"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../components/modules/card.module.css";
import ToolboxImage from "../public/icons/Toolbox.png";
import WebsiteImage from "../public/icons/Web.png";
import EmailIcon from "../public/icons/New Message.png";
import GreenTechIcon from "../public/icons/Greentech.svg";
import PhoneIcon from "../public/icons/Rotary Dial Telephone.png";
import ReactIcon from "../public/icons/Share.svg";
import ConnectIcon from "../public/icons/Connect.svg";
import NotePadIcon from "../public/icons/Notepad.svg";
import ProjectIcon from "../public/icons/Folder.svg";
import Pic1 from "../public/assets/1.png";
import Pic2 from "../public/assets/2.png";
import Pic3 from "../public/assets/3.png";
import Pic4 from "../public/assets/4.png";
import Pic5 from "../public/assets/Untitled design(11).png";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const cards = [
  {
    id: 1,
    title: "React & NextJS",
    description:
      "Additional description about React and NodeJS... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur rerum veniam officia, est asperiores accusamus, eos incidunt ad dolorem ea accusantium nam, voluptate totam aliquid. Cum veritatis quod quos non.",
    icon: ReactIcon,
    category: "Front-End Framework",
  },
  {
    id: 2,
    title: "NodeJS & Express",
    description:
      "Additional description about React and NodeJS... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur rerum veniam officia, est asperiores accusamus, eos incidunt ad dolorem ea accusantium nam, voluptate totam aliquid. Cum veritatis quod quos non.",
    icon: ReactIcon,
    category: "API Dev",
  },

  {
    id: 3,
    title: "PHP & Laravel",
    description:
      "Additional description about React and NodeJS... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur rerum veniam officia, est asperiores accusamus, eos incidunt ad dolorem ea accusantium nam, voluptate totam aliquid. Cum veritatis quod quos non.",
    icon: ReactIcon,
    category: "Full-Stack Framework",
  },
  {
    id: 4,
    title: "MongoDB & MySQL",
    description:
      "Additional description about React and NodeJS... Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur rerum veniam officia, est asperiores accusamus, eos incidunt ad dolorem ea accusantium nam, voluptate totam aliquid. Cum veritatis quod quos non.",
    icon: ReactIcon,
    category: "Database",
  },
  // Add more cards as needed
];
export default function Home() {
  const [hovered, setHovered] = useState(Array(cards.length).fill(false));
  const [isProjectHovered, setIsProjectHovered] = useState(false);

  const projectCardMouseEnter = () => {
    console.log("enter");
    setIsProjectHovered(true);
  };

  const projectCardMouseLeave = () => {
    console.log("leave");
    setIsProjectHovered(false);
  };

  const handleMouseEnter = (index: number) => {
    setHovered((prev) => {
      const newHovered = [...prev];
      newHovered[index] = true;
      return newHovered;
    });
  };

  const handleMouseLeave = (index: number) => {
    setHovered((prev) => {
      const newHovered = [...prev];
      newHovered[index] = false;
      return newHovered;
    });
  };

  return (
    <>
      <section>
        <div className="h-[40rem] md:h-screen w-full rounded-md relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative flex items-center z-10 text-lg justify-center md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
              Rad
              <span className="mx-2 align-baseline">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </span>
              No
            </h1>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Full Stack Developer
            </p>
            <div className="link-btn text-white flex gap-3 mt-5 ">
              <Link
                href="https://facebook.com/rado.goodboy"
                className="flex space-x-2 bg-[#3F5569] p-3 px-9 rounded-md"
              >
                <Image
                  src={ToolboxImage}
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />{" "}
                <span>LinkedIn Profile</span>
              </Link>
              <Link
                href="https://facebook.com/rado.goodboy"
                className="flex space-x-2 bg-[#3F5569] p-3  px-9 rounded-md"
              >
                <Image
                  src={WebsiteImage}
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />{" "}
                <span>Facebook Profile</span>
              </Link>
            </div>
          </div>
          <BackgroundBeams />
        </div>
      </section>

      <section className=" text-white">
        <h2 className="text-center text-7xl mb-2 font-bold leading-8">
          Best Gallary
        </h2>
        <p className="text-center text-lg font-extralight leading-8 ">
          We are trusted by the world’s most innovative teams
        </p>

        <div className="logos group relative overflow-hidden whitespace-nowrap py-3 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            <Image
              width={400}
              height={400}
              className="mx-4 inline max-w-full object-cover h-auto"
              src={Pic1}
              alt="Transistor"
            />
            <Image
              width={400}
              height={400}
              className="mx-4 inline max-w-full  object-cover h-auto"
              src={Pic2}
              alt="Reform"
            />
            <Image
              width={400}
              height={400}
              className="mx-4 inline max-w-full object-cover h-auto"
              src={Pic3}
              alt="Tuple"
            />
            <Image
              width={400}
              height={200}
              className="mx-4 inline max-w-full object-cover h-auto"
              src={Pic4}
              alt="SavvyCal"
            />
            <Image
              width={400}
              height={200}
              className="mx-4 inline max-w-full object-cover h-auto"
              src={Pic5}
              alt="SavvyCal"
            />
          </div>

          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            <Image
              width={400}
              height={400}
              className="mx-4 inline max-w-full object-cover h-auto"
              src={Pic1}
              alt="Transistor"
            />
            <Image
              width={400}
              height={400}
              className="mx-4 inline max-w-full  object-cover h-auto"
              src={Pic2}
              alt="Reform"
            />
            <Image
              width={400}
              height={400}
              className="mx-4 inline max-w-full object-cover h-auto"
              src={Pic3}
              alt="Tuple"
            />
            <Image
              width={400}
              height={200}
              className="mx-4 inline max-w-full object-cover h-auto"
              src={Pic4}
              alt="SavvyCal"
            />
            <Image
              width={400}
              height={200}
              className="mx-4 inline max-w-full object-cover h-auto"
              src={Pic5}
              alt="SavvyCal"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="text-white my-10">
          <h2 className="flex text-7xl mb-2 font-bold leading-none">
            About{" "}
            <Image
              src={NotePadIcon}
              alt="email_icon"
              width={70}
              height={70}
              className=""
            ></Image>
            Me
          </h2>
          <p className="text-lg font-extralight leading-8 ">
            Check out about my resume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 resume-section text-white">
          <div className="info-section lf flex-1">
            <h3 className="text-3xl">Hiii, I am Rado</h3>
            <p className="text-lg ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              nam, at numquam magni atque sequi, eos amet debitis voluptas
              perspiciatis nesciunt qui harum repudiandae odit cum ipsum optio
              quis delectus! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Sint, aut tenetur laboriosam aperiam nesciunt totam
              similique, illum assumenda architecto sapiente cumque voluptatem
              voluptas cum eius molestiae quidem. Suscipit, aut ducimus? Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              voluptatibus necessitatibus voluptates corporis beatae. Totam
              obcaecati iste beatae quaerat necessitatibus quam nostrum ratione.
              Minima, soluta exercitationem? Tenetur at minus nobis.
            </p>
            <div className="contact-section ">
              <div className="top-section-ct flex flex-col md:flex-row">
                <div className="email flex flex-1 h-full items-center my-2 md:my-8 space-x-2">
                  <Image
                    src={EmailIcon}
                    alt="email_icon"
                    width={30}
                    height={30}
                  ></Image>
                  <p>norado.dev@gmail.com</p>
                </div>
                <div className="email flex flex-1 h-full items-center my-2 md:my-8 space-x-2">
                  <Image
                    src={PhoneIcon}
                    alt="email_icon"
                    width={30}
                    height={30}
                  ></Image>
                  <p>011 899276</p>
                </div>
              </div>
            </div>
          </div>
          <div className="picture-side rf flex-1">
            <Image
              src={Pic1}
              height={1000}
              width={1000}
              alt=""
              className="w-full h-full rounded-lg"
            ></Image>
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="text-white my-10">
          <h2 className=" flex text-7xl mb-2 font-bold leading-none">
            My{" "}
            <Image
              src={ConnectIcon}
              alt="email_icon"
              width={70}
              height={70}
            ></Image>
            Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 expertise-section text-white gap-4">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`card border-[#ACCDC0] border rounded-lg flex-1 relative ${styles.card_hover}  duration-300`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="card_header flex justify-between p-4">
                <div className="card_header_ls">
                  <Image
                    src={card.icon}
                    height={35}
                    width={35}
                    alt=""
                    className="rounded-lg p-2 border-[#ACCDC0] border"
                  />
                </div>
                <div className="card_header_rs">
                  <div className="ls-info flex gap-2">
                    <Image
                      src={GreenTechIcon}
                      height={20}
                      width={20}
                      alt=""
                      className=""
                    />{" "}
                    <span>{card.category}</span>
                  </div>
                </div>
              </div>

              <div className="card_body h-[12rem] flex justify-center p-4 flex-col relative overflow-hidden">
                <h3>{card.title}</h3>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={
                    hovered[index]
                      ? { opacity: 1, height: "auto" }
                      : { opacity: 0, height: 0 }
                  }
                  className="w-full text-sm text-gray-300 mt-2"
                >
                  {card.description}
                </motion.p>
              </div>

              <div className="card_footer border-t p-4">
                Hover to view the info
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto">
        <div className="text-white my-10">
          <h2 className=" flex text-7xl mb-2 font-bold leading-none">
            Projects{" "}
            <Image
              src={ProjectIcon}
              alt="email_icon"
              width={70}
              height={70}
            ></Image>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 expertise-section text-[#3F5569] gap-4">
          <div className="project_card p-4">
            <motion.div
              className="project_wrapper p-4 bg-white"
              initial={{ opacity: 0, backgroundColor: "#ACCDC0" }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }} // Overall animation duration
              whileHover={{
                backgroundImage: `url(${Pic1.src})`,
                backgroundSize: "130%", // Increase this value for more zoom
                filter: "brightness(80%)", // Dark filter effect
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: {
                  backgroundImage: { duration: 1, ease: "easeOut" },
                  backgroundSize: { duration: 1, ease: "easeOut" }, // Duration and easing for backgroundSize animation
                },
              }}
            >
              <motion.div
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="project_card_header">
                  <div>1</div>
                </div>
                <div className="project_card_body h-[30rem] flex justify-center items-center">
                  <motion.h3
                    className="text-4xl"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Loan Calculator
                  </motion.h3>
                </div>
                <div className="project_card_footer">
                  <p>Full Stack Development</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white"
              >
                <div className="project_card_header">
                  <div>Project Name</div>
                </div>
                <div className="project_card_body h-[30rem] flex justify-center items-center">
                  <h3 className="text-4xl">Project Description</h3>
                </div>
                <div className="project_card_footer">
                  <p>ReactJS, NextJS, and Express</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <div className="project_card p-4">
            <motion.div
              className="project_wrapper p-4 bg-white"
              initial={{ opacity: 0, backgroundColor: "#ACCDC0" }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }} // Overall animation duration
              whileHover={{
                backgroundImage: `url(${Pic1.src})`,
                backgroundSize: "cover", // Increase this value for more zoom
                filter: "brightness(80%)", // Dark filter effect
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: {
                  backgroundImage: { duration: 1, ease: "easeOut" },
                  backgroundSize: { duration: 1, ease: "easeOut" }, // Duration and easing for backgroundSize animation
                },
              }}
            >
              <motion.div
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="project_card_header">
                  <div>1</div>
                </div>
                <div className="project_card_body h-[30rem] flex justify-center items-center">
                  <motion.h3
                    className="text-4xl"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Loan Calculator
                  </motion.h3>
                </div>
                <div className="project_card_footer">
                  <p>Full Stack Development</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white"
              >
                <div className="project_card_header">
                  <div>Project Name</div>
                </div>
                <div className="project_card_body h-[30rem] flex justify-center items-center">
                  <h3 className="text-4xl">Project Description</h3>
                </div>
                <div className="project_card_footer">
                  <p>ReactJS, NextJS, and Express</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
