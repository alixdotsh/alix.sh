import { useState } from 'react';
import Link from "next/link"

import { Github, Twitter, Mail, Clipboard } from "lucide-react"
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

const variants = {
  inital: { y: 60 },
  visible: { y: 0 },
  exit: { y: 60 }
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
            className="text-white flex items-center gap-1 py-2 px-4 font-medium bg-gray-900 bg-opacity-40 rounded-full backdrop-blur-md">
            <Clipboard size={18} strokeWidth={2.2} />
            <h1>Copied to clipboard!</h1>
          </motion.div>
        </AnimatePresence>
      </div>
    <div className="bg-black flex flex-col items-center sm:flex-row justify-center gap-20 w-screen h-screen p-2">
    <div>
      <div className="bg-gradient-to-r from-pink-600 to-purple-500 via-rose-500 animate-gradient-x justify-center items-center flex flex-col content-center 
      auto rounded-md shadow-xl box-border h-20 -32 p-4 m-9 border-2 border-black">
        <p className='text-white text-2xl text-center font-larsseitbold'>(｡•̀ᴗ-)✧</p>
      </div>
      <h1 className="text-4xl text-center text-white font-larsseitbold sm:text-7xl tracking-tighter">hi! i'm alix</h1>
      <h2 className="text-2xl text-center text-white font-larsseit">tired artist and web developer <br />
      gamer on the side :3</h2>
      <div className="flex text-white items-center justify-center gap-2 mt-1">
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
    </>
  );
}

export default Home