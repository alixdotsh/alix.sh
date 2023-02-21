import { useState } from 'react';
import Link from "next/link"

import { Github, Twitter } from "lucide-react"

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

const Home = () => {
  return (
    <>
    <div className="bg-black flex flex-col items-center sm:flex-row justify-center gap-20 w-screen h-screen p-2">
    <div>
      <h1 className="text-4xl text-center text-white font-larsseitbold sm:text-7xl tracking-tighter">hi! i'm alix</h1>
      <h2 className="text-2xl text-center text-white font-larsseit">tired artist and web developer <br />
      gamer on the side :3</h2>
      <div className="flex items-center justify-center gap-2 mt-1">
        {socials.map(x=>
          <a key={x.name} href={x.link}>
            <x.icon size={28}/>
          </a>
          )}
      </div>
    </div>
    </div>
    </>
  );
}

export default Home