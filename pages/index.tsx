import { useState } from 'react';
import Link from "next/link"

import { Github, Twitter, Mail, Clipboard , ChevronRight, Briefcase, Terminal, Box, Code} from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

function Header({ title } : { title: any}) {
  return (
    <h1>{title ? title : 'Default title'}</h1>
  );
}

const socials = [
  {
    name: "github",
    icon: Github,
    link: "https://github.com/alixdotsh"
  },
  {
    name: "twitter",
    icon: Twitter,
    link: "https://twitter.com/alixdotsh"
  }
]

const sections = [
  {
    name: "work",
    icon: Briefcase,
    link: "/work"
  },
  {
    name: "tech i use",
    icon: Terminal,
    link: "/tech"
  },
  {
    name: "code",
    icon: Box,
    link: "/code"
  }
]

const variants = {
  inital: { y: 60 },
  visible: { y: 0 },
  exit: { y: 60 }
}

const BoxIco = () => {
  return <Box />;
}

const CodeIco = () => {
  return <Code />;
}

const Home = () => {
  const [showCopied, setShowCopied] = useState(false)

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
            className="text-white flex items-center gap-1 py-2 px-4 font-medium bg-gray-900 bg-opacity-40 rounded-full
            backdrop-blur-md">
            <Clipboard size={18} strokeWidth={2.2} />
            <h1>Copied to clipboard!</h1>
          </motion.div>
        </AnimatePresence>
      </div>
    <div className="flex items-center flex-col sm:flex-row justify-center gap-20 container mx-auto p-2">
      <div>
      <h1 className="text-4xl text-white font-larsseitbold sm:text-7xl tracking-tight drop-shadow-[0_0_6px_rgba(255,255,255,1)]">alix (｡•̀ᴗ-)✧</h1>
      <h2 className="text-2xl text-neutral-100 font-larsseit"><span className="flex gap-x-1">digital artist, <span className="mt-1"><BoxIco /></span>software engineer, based in north carolina <br /></span>
      IT, linux, and apple entuhsiast, always thinking with <span className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,1)]"><b>design</b></span> in mind <br />
      <span className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,1)]"><b>focused on aesthetics,</b></span> creating 
      <span className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,1)]"> beautiful</span> and<br />
      <span className="flex gap-x-1"><span className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,1)]">immersive </span> 
      experiences with <span className="mt-1"><CodeIco /></span><span className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,1)]"><b>code</b></span></span></h2>
      <div className="flex text-white items-center justify-center sm:justify-start gap-3 sm:gap-2 mt-2">
        {socials.map(x=>
          <a key={x.name} href={x.link}>
            <x.icon size={28}/>
          </a>
          )}
          <Mail onClick={() => {
              navigator.clipboard.writeText("alix@kaedehara.xyz")
              setShowCopied(true)

              setInterval(() => {
                setShowCopied(false)
              }, 5000)

            }} size={28} className="cursor-pointer" />
            </div>
            </div>
            </div>

            <div className="container mx-auto grid grid-cols-3 grid-flow-col gap-8 m-20 max-w-2xl">
              <div className="text-md col-start-1 font-larsseit">
                <h1 className="text-neutral-400 mb-5">current</h1>
                <h2 className="text-white"><a className="underline decoration-rose-500">??? // 2022</a></h2>
                <p className="text-neutral-400">very early in the production stage still, check back soon!</p>
              </div>
              <div className="text-md col-start-2 font-larsseit">
              <h1 className="text-neutral-400 mb-5">projects</h1>
                <h2 className="text-white"><a className="underline decoration-rose-500" 
                href='https://kaedehara.xyz'>kaedehara.xyz // 2023</a></h2>
                <p className="text-neutral-400">this website right here, welcome :)</p>
                <h2 className="mt-2 text-white"><a className="underline decoration-rose-500" 
                href='https://github.com/alixdotsh/lime'>lime // 2020</a></h2>
                <p className="text-neutral-400">a discord bot written in python using the discord.py api and a utility called voxelbotutils</p>
              </div>
              <div className="col-start-3 text-md font-larsseit">
              <h1 className="text-neutral-400 mb-5">other</h1>
              <h2 className="text-white"><a className="underline decoration-rose-500">art</a></h2>
                <p className="text-neutral-400">digital art, concept art, anthropomorphism, anatomy</p>
                <h2 className="mt-2 text-white"><a className="underline decoration-rose-500">games</a></h2>
                <p className="text-neutral-400">genshin impact, osu!, valorant, league of legends, minecraft, and others</p>
              </div>
              </div>
              <div className="mx-auto max-w-2xl">
                <h1 className="text-white mb-3 mt-2 underline decoration-rose-500">network</h1>
                <p className="text-neutral-400">i'm always open to talk, whether it's for inquiries about a possible job or not. the best way to contact me is on <a className="underline" href='https://twitter.com/alixdotsh'>
                  twitter</a>, or on <a className="underline" href='https://t.me/alixowo'> telegram</a>. you can contact me via email at <a className="underline" href='mailto:alix@kaedehara.xyz'>
                    alix@kaedehara.xyz</a> for more important inquiries</p>
                </div>
    </>
  );
}

export default Home