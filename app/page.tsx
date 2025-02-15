"use client";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { IconStarFilled } from "@tabler/icons-react";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { Link as ScrollLink, Element } from "react-scroll";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Chat from "@/components/chatbot-port";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/images/s_5.png",
    title: "Content Creation",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/images/s_2.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
];

export default function Home() {
  return (
    <div
      className="overflow-clip 
inset-0 
-z-10 h-full w-full bg-[#fafafa]
bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
 bg-[size:14px_24px]"
    >
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 xl:w-4/5 2xl:w-[68%] bg-gradient-to-tl from-zinc-200 to-slate-200 flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/Design 17.png"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/showcase"} className="hover:text-blue-500">
              Showcase
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Process
            </ScrollLink>
            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-500"
            >
              Guarentees
            </ScrollLink>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <a href="tel:8744003734" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3 ">
              (+91) 8744003734
            </button>
          </a>
          <Link
            href={"/meeting"}
            className="px-6 py-3 text-lg hover:bg-[#abcbff] rounded[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book A Call
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>

          <p
            className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500
        "
          >
            Schedule a call with us to discuss your project and get a quote in
            minutes
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Showcase
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Develop
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Strategy
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4  my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5">
                Trusted By fast Moving Brands Globally
              </h1>

              <div className="flex my-6 gap-x-5 w-full ">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={83} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Client
                    </p>
                  </h1>
                </div>
                <div className="w-px bg-gray-300 self-stretch"> </div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={27} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Project Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>
            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/images/blog.png",
                    name: "logo",
                  },
                  {
                    logo: "/images/greenmind.jpg",
                    name: "logo",
                  },
                  {
                    logo: "/images/aiinterview.jpg",
                    name: "logo",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5  2xl:w-[68%] md:mx-auto ">
          <h1>
            <WordPullUpDemo />
          </h1>

          <p className="md:text-center py-4 md:w-1/2 mx-auto md:text-2xl text-gray-500 ">
            All Of Our Services Are Designed to Help your Business Stand Out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 ">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-zinc-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p
            className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-slate-500"
          >
            "Each of our services is thoughtfully designed to elevate your
            business, helping it capture attention and make a lasting
            impression."
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto ">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <AnimatedBeamMultipleOutputDemo />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <BoxRevealDemo />
            </div>
          </div>
        </main>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/logo.webp"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;I&apos;ve been working with Ak for over 2 years and
              He&apos;s been amazing to work with. He&apos;d helped us grow our
              business and we couldn&apos;t be happier with the results.&quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              Koshal <br />
              Design Manager <br />
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:pd-20 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
        <LetsMakeThingsHappenSection />
      </section>

      <footer className=" text-black bg-zinc-100">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between pb-5">
            {/* Find Us Section */}
            <div className="flex items-center mb-6 md:mb-0 md:w-1/3 space-x-3">
              <FaMapMarkerAlt className="text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Find me</h4>
                <span>New Delhi, India</span>
              </div>
            </div>

            {/* Call Us Section */}
            <div className="flex items-center mb-6 md:mb-0 md:w-1/3 space-x-3">
              <FaPhone className="text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Call me</h4>
                <span>8744003734</span>
              </div>
            </div>

            {/* Mail Us Section */}
            <div className="flex items-center md:w-1/3 space-x-3">
              <FiMail className="text-2xl" />
              <div>
                <h4 className="text-lg font-semibold">Mail Me</h4>
                <span>anikeshuzumaki@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between pt-5 pb-5">
            {/* Logo and About Section */}
            <div className="mb-10 md:w-1/3">
              <div className="footer-logo hidden md:block mb-4">
                <a href="index.html">
                  <img
                    src="https://imgs.search.brave.com/Hca24WLOm_5uaPnJb_ObJ44Sn-G-X9RPLZezoV7DTTk/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly9ha2Rl/dmxhYnMuY29tL21l/dGEvYWtkZXYtb2cu/cG5n"
                    alt="logo"
                    className="w-full max-w-xs"
                  />
                </a>
              </div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-400">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-300">
                  <FaTwitter />
                </a>
                <a href="#" className="text-red-600 hover:text-red-400">
                  <FaGooglePlusG />
                </a>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="mb-10 md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Expert Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Latest News
                  </a>
                </li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="md:w-1/3">
              <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
              <p className="mb-4">
                Don’t miss to subscribe to my feeds, kindly fill the form below.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="px-4 py-2 w-full border border-gray-600 bg-gray-700 text-white rounded-l focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-500">
                  <FaTelegramPlane />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="bg-transparent py-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; 2024, All Rights Reserved{" "}
              <a href="" className="text-blue-500 hover:underline">
                Ak
              </a>
            </p>
            <ul className="flex justify-center md:justify-end space-x-4 text-sm text-gray-400 mt-2 md:mt-0">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <Chat />
    </div>
  );
}
