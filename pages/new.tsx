import { useState } from "react";

import {
  Github,
  Twitter,
  Mail,
  Clipboard,
  Box,
  Code,
  Briefcase,
  ChevronRight,
  Cpu,
  Palmtree,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import Entry from "./components/entry";

const socials = [
  {
    name: "github",
    icon: Github,
    link: "https://github.com/alixdotsh",
  },
  {
    name: "twitter",
    icon: Twitter,
    link: "https://twitter.com/alixdotsh",
  },
];

const variants = {
  inital: { y: 60 },
  visible: { y: 0 },
  exit: { y: 60 },
};

/* const Home = () => {
  return (
    <>
    </>
  )
} */

const Home = () => {
  const [showCopied, setShowCopied] = useState(false);

  return (
    <>
      <div className="flex justify-center absolute bottom-0 w-screen my-5">
        <AnimatePresence
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.div
            initial="initial"
            exit="exit"
            animate={showCopied ? "visible" : "exit"}
            transition={{ type: "spring", duration: 0.5 }}
            variants={variants}
            className="flex items-center gap-1 py-2 px-4 font-medium bg-alix-800 bg-opacity-40 rounded-full
            backdrop-blur-md"
          >
            <Clipboard size={18} strokeWidth={2.2} />
            <h1>Copied to clipboard!</h1>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="w-screen h-auto min-h-screen flex items-center justify-center flex-col py-16 lg:px-0 px-4">
        <div className="max-w-2xl">
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight glow-md text-alix-50">
            alix (｡•̀ᴗ-)✧
          </h1>
          <p className="text-2xl text-alix-50">
            digital artist, <Box className="inline" /> software engineer, based
            in north carolina <br />
            IT, linux, and apple enthusiast <br /> always thinking with
            <span className="font-bold glow-sm"> design</span> in mind <br />
            <span className="font-bold glow-sm">focused on aesthetics, </span>
            and creating <span className="font-bold glow-sm">
              beautiful
            </span>{" "}
            and
            <span className="font-bold glow-sm"> immersive</span> experiences
            with <Code className="inline" />
            <span className="font-bold glow-sm"> code</span>
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-2 mt-2">
            {socials.map((x) => (
              <a key={x.name} href={x.link}>
                <x.icon size={28} />
              </a>
            ))}
            <Mail
              onClick={() => {
                navigator.clipboard.writeText("me@alix.sh");
                setShowCopied(true);

                setInterval(() => {
                  setShowCopied(false);
                }, 5000);
              }}
              size={28}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4 mx-auto">
          <a
            href="/work"
            className="flex items-center gap-2 bg-alix-800 bg-opacity-50 py-2 px-4 rounded-xl backdrop-blur-sm group"
          >
            <Briefcase size={28} strokeWidth={2.2} />
            <h1 className="text-xl font-bold">work</h1>
            <div className="ml-auto">
              <ChevronRight
                size={20}
                strokeWidth={2.2}
                className="ml-8 sm:ml-2 text-alix-400 group-hover:text-alix-200 duration-200"
              />
            </div>
          </a>
          <a
            href="/tech"
            className="flex items-center gap-2 bg-alix-800 bg-opacity-50 py-2 px-4 rounded-xl backdrop-blur-sm group"
          >
            <Cpu size={28} strokeWidth={2.2} />
            <h1 className="text-xl font-bold">tech</h1>
            <div className="ml-auto">
              <ChevronRight
                size={20}
                strokeWidth={2.2}
                className="ml-8 sm:ml-2 text-alix-400 group-hover:text-alix-200 duration-200"
              />
            </div>
          </a>
          <a
            href="/life"
            className="flex items-center gap-2 bg-alix-800 bg-opacity-50 py-2 px-4 rounded-xl backdrop-blur-sm group"
          >
            <Palmtree size={28} strokeWidth={2.2} />
            <h1 className="text-xl font-bold">life</h1>
            <div className="ml-auto">
              <ChevronRight
                size={20}
                strokeWidth={2.2}
                className="ml-8 sm:ml-2 text-alix-400 group-hover:text-alix-200 duration-200"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
