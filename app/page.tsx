"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { Button } from "@/components/ui/button"

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
import MonitorIcon from "../public/icons/Monitor.svg";
import PencilCupIcon from "../public/icons/Pencil Cup.svg";
import UnitIcon from "../public/icons/Unit.svg";

import Pic1 from "../public/assets/1.png";
import Pic2 from "../public/assets/2.png";
import Pic3 from "../public/assets/3.png";
import Pic4 from "../public/assets/4.png";
import Pic5 from "../public/assets/Untitled design(11).png";
import Pic6 from "../public/assets/6.png";
import Pic7 from "../public/assets/7.png";
import Pic8 from "../public/assets/8.png";
import Pic9 from "../public/assets/9.png";
import FigmaCertificate from '../public/assets/UC-6f91bf84-d035-4932-b476-25098a306a5b.jpg'
import ReactCerificate from '../public/assets/react_certificate.png'
import phpCerificate from '../public/assets/phpcerificate.jpg'
import BasicWeb from '../public/assets/basic_webcertificate.jpg'

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



const content = [
  {
    
    title: "Figma Certificate",
    description:
      "This Figma course has been an amazing adventure! I'm incredibly proud to have learned the skills to design a website from scratch. A huge thanks to Anton Voroniuk, Željko Milivojević, and the fantastic support team for their invaluable knowledge and guidance. Completing this course is a major stepping stone in my design journey, and it's only stoked my passion even more!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={FigmaCertificate}
          width={3000}
          height={3000}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "React Certificate",
    description:
      "Conquered React Fundamentals! Aced Meta's React course on Coursera, solidifying my grasp of building user interfaces for web applications. The instructors' expertise and practical exercises were instrumental. This achievement marks a major step in my web development journey, and I'm pumped to leverage these skills to create interactive web experiences! ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src={ReactCerificate}
        width={3000}
        height={3000}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "PHP & Laravel Certificate",
    description:
      "Leveled up my skills! Completed an on-site PHP & Laravel course with Instinct Institute. Feeling empowered to build interactive web experiences oth backend & frontend!",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src={phpCerificate}
        width={3000}
        height={3000}
        className="h-full w-full  "
        alt="linear board demo"
      />
    </div>
    ),
  },
  {
    title: "Basic Web Certifcation",
    description:
      " I have completed the comprehensive Basic Web Certification program at Instinct Institute. This intensive course equipped me with a strong understanding of essential web development principles, paving the way for me to delve deeper into advanced topics like React.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
      <Image
        src={BasicWeb}
        width={3000}
        height={3000}
        className="h-full w-full  "
        alt="linear board demo"
      />
    </div>
    ),
  },
];
export default function Home() {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => setIsTouched(true);
  const handleTouchEnd = () => setIsTouched(false);
  const [hovered, setHovered] = useState(Array(cards.length).fill(false));

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
            <h1 className="relative flex items-center z-10 text-5xl justify-center md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
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
            <div className="link-btn text-white flex flex-col md:flex-row gap-3 mt-5 ">
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
        <h2 className="text-center text-4xl md:text-7xl  font-bold leading-8">
          Best Gallary
        </h2>
        <div className="logos group relative my-10 overflow-hidden whitespace-nowrap py-3 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)] opacity-50">
          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48 rounded-lg"
              src={Pic1}
              alt="Transistor"
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80  object-cover h-48 rounded-lg"
              src={Pic2}
              alt="Reform"
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48 rounded-lg"
              src={Pic3}
              alt="Tuple"
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48 rounded-lg"
              src={Pic4}
              alt="SavvyCal"
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48 rounded-lg"
              src={Pic5}
              alt="SavvyCal"
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48 rounded-lg"
              src={Pic6}
              alt=""
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48 rounded-lg"
              src={Pic7}
              alt=""
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48 rounded-lg"
              src={Pic8}
              alt=""
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48 rounded-lg"
              src={Pic9}
              alt=""
            />
          </div>

          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48 rounded-lg"
              src={Pic1}
              alt="Transistor"
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80  object-cover h-48  rounded-lg"
              src={Pic2}
              alt="Reform"
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48  rounded-lg"
              src={Pic3}
              alt="Tuple"
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48  rounded-lg"
              src={Pic4}
              alt="SavvyCal"
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48  rounded-lg"
              src={Pic5}
              alt=""
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48  rounded-lg"
              src={Pic6}
              alt=""
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48  rounded-lg"
              src={Pic7}
              alt=""
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48  rounded-lg"
              src={Pic8}
              alt=""
            />
            <Image
              width={200}
              height={200}
              className="mx-4 inline w-80 object-cover h-48  rounded-lg"
              src={Pic9}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="text-white my-5 md:my-10">
          <div className="text-4xl md:text-7xl  mb-2 font-bold leading-none rounded-lg">
            <h2 className="flex ">
              About{" "}
              <Image
                src={NotePadIcon}
                alt="email_icon"
                width={70}
                height={70}
                className="w-10 md:w-20"
              ></Image>
            </h2>
          
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 resume-section text-white">
          <div className="info-section lf flex-1">
            <p className="text-xl md:text-3xl ">
              {" "}
              My name is{" "}
              <span className="text-4xl font-bold bg-yellow-500/80 px-2 rounded-lg">
                Rado
              </span>
              . I am a student at Limkokwing University of Creative Technology
              specialized in Software Engineering with Multimedia. Through my
              journey, I am not only{" "}
              <span className="bg-green-600 px-2 rounded">
                {" "}
                <Image
                  src={MonitorIcon}
                  alt="email_icon"
                  width={30}
                  height={30}
                  className="inline"
                ></Image>{" "}
                coding
              </span>{" "}
              but I love to explore thing such{" "}
              <span className="bg-blue-600 px-2 rounded">
                {" "}
                <Image
                  src={PencilCupIcon}
                  alt="email_icon"
                  width={30}
                  height={30}
                  className="inline"
                ></Image>{" "}
                Hackathon
              </span>
              ,{" "}
              <span className=" bg-purple-600 px-2 rounded">
                {" "}
                <Image
                  src={UnitIcon}
                  alt="email_icon"
                  width={30}
                  height={30}
                  className="inline"
                ></Image>{" "}
                StartUp
              </span>{" "}
              , Workshop and more. Scroll down to see my expertise.
              <br></br> If there any work please contact me by:
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
        <div className="text-white my-10 text-4xl md:text-7xl  font-bold leading-none">
          <h2 className=" flex ">
            My{" "}
            <Image
              src={ConnectIcon}
              alt="email_icon"
              width={70}
              height={70}
              className="w-10 md:w-20"
            ></Image>
          </h2>
          <h2> Expertise</h2>
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
        <div className="text-white my-10 text-4xl md:text-7xl  mb-2 font-bold leading-none">
          <h2 className=" flex ">
            Achivement
            <Image
              src={ProjectIcon}
              alt="email_icon"
              width={70}
              height={70}
              className="w-10 md:w-20"
            ></Image>
          </h2>
          <h2> & Experience{" "}</h2>
        </div>

        <div className="">
          <StickyScroll content={content} />
        </div>
      </section>
      <section className="h-screen"></section>
    </>
  );
}
