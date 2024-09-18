import { useState } from "react";

import { Github, Twitter, Mail, Clipboard, Box, Code } from "lucide-react";
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
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight glow-md text-alix2-secondary">
            alix.
          </h1>
          <p className="text-2xl text-alix2-secondary">
            <Box className="inline" /> software engineer, based in north
            carolina <br />
            IT, linux, and apple enthusiast <br /> always thinking with
            <span className="font-bold glow-sm"> design</span> in mind <br />
            <span className="font-bold glow-sm">focused on aesthetics, </span>
            while creating <span className="font-bold glow-sm">
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
        <div className="container mx-auto grid grid-cols-3 gap-8 m-20 max-w-2xl text-md">
          <div>
            <h1 className="text-alix2-accent3 mb-3">current focus</h1>
            <div className="flex flex-col gap-2">
              <Entry
                name="osu! Tournament Rating"
                href="https://otr.stagec.xyz/"
                year={2024}
                summary="backend developer for the API and database of the o!tr website."
              />
              <Entry
                name="kqm.gg"
                href="https://kqm.gg"
                year={2024}
                summary="lead developer of the website redesign team. we're working on a complete refresh, including workflow changes, a brand new backend, and a new design."
                />
            </div>
          </div>
          <div>
            <h1 className="text-alix2-accent3 mb-3">past projects</h1>
            <div className="flex flex-col gap-2">
              <Entry
                name="alix.sh"
                href="https://alix.sh"
                year={2023}
                summary="this website right here, welcome :)"
              />
              <Entry
                name="lime"
                href="https://github.com/alixdotsh/lime"
                year={2020}
                summary="a discord bot written in python using the discord.py api and a utility called voxelbotutils"
              />
            </div>
          </div>
          <div>
            <h1 className="text-alix2-accent3 mb-3">languages/frameworks</h1>
            <div className="flex flex-col gap-2">
              <Entry name="typescript" summary="live laugh love ts" />
              <Entry
                name="c#"
                summary="still very beginner in this, but hope to improve on it!"
              />
              <Entry
                name="python"
                summary="first language i ever learned, very rusty at it though"
              />
              <Entry
                name="react/tailwindcss/nextjs"
                summary="my favorite trio for making websites"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-3 mt-2 underline decoration-alix2-accent2 font-bold">
          network
        </h1>
        <p className="text-alix2-secondary">
          i'm always open to talk, whether it's for inquiries about a possible
          job or not. the best way to contact me is on
          <span>
            {" "}
            <a className="underline" href="https://twitter.com/alixdotsh">
              twitter
            </a>
          </span>
          , or on
          <span>
            {" "}
            <a className="underline" href="https://t.me/alixdotsh">
              telegram
            </a>
          </span>
          . for more important inquiries you can contact me via email at{" "}
          <span>
            {" "}
            <a className="underline" href="mailto:me@alix.sh">
              me@alix.sh
            </a>
          </span>
        </p>
      </div>
    </>
  );
};

export default Home;
