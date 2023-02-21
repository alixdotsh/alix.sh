import { NextPage } from "next"
import Link from "next/link"

import { Sinextdotjs, Sireact, Sitailwindcss, Sitypescript, Sipython } from "@icons-pack/react-simple-icons"
import { ChevronLeft } from "lucide-react"
import clsx from "clsx"

const languages = [
  {
    name: "typescript",
    type: "frontend",
    description: "the main language i used to make most of my stuff, including this website.",
    icon: Sitypescript,
    color: "text-[#3178C6] p-[2px]",
    background: "bg-[#111a24]"
  },
  {
    name: "python",
    type: "backend",
    description: "the language that i used when first started coding, which i made a discord bot with.",
    icon: Sipython,
    color: "text-[#3776AB] p-[2px]",
    background: "bg-[#111a24]"
  }
]

const frameworks = [
  {
    name: "react",
    language: "typescript",
    description: "the ui framework that i use primarily.",
    icon: Sireact,
    color: "text-[#61DAFB]",
    background: "bg-[#1a3036]",
  },
  {
    name: "next.js",
    language: "typescript",
    description: "adds routing, server rendering, and more features to react, making it run as a regular html website to users.",
    icon: Sinextdotjs,
    color: "text-black",
    background: "bg-white"
  },
  {
    name: "tailwind",
    language: "css",
    description: "makes creating pretty sites faster and less painful, without having to make many .css files.",
    icon: Sitailwindcss,
    color: "text-[#06B6D4]",
    background: "bg-[#142e33]"
  }
]

const Code: NextPage = () => {
    return (
        <>
        <div className="bg-black pattern-dots pattern-neutral-900 pattern-bg-transparent pattern-size-6 pattern-opacity-100">
        <div className="max-w-6xl px-6 sm:p-0 p-8 sm:py-20 m-auto w-screen h-screen">
      <Link href="/" className="flex items-center gap-1 font-medium relative z-30 text-gray-200 hover:text-white duration-200">
          <ChevronLeft size={18} strokeWidth={2.8} />
          <h1>back</h1>
      </Link>
      <h1 className="text-7xl font-larsseitbold text-white relative z-20">code</h1>
      <h2 className="font-larsseit text-lg text-white">foundations of the things i make.</h2>
      <div className="mt-2">
        <h1 className="font-larsseitbold text-3xl my-2 text-white">languages</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {languages.map(x => (
            <div key={x.name} className="bg-neutral-900 bg-opacity-40 pt-4 pb-3 px-4 rounded-xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <div className={clsx(x.background, "p-2 rounded-lg")}>
                  <x.icon size={36} className={clsx(x.color, "")} />
                </div>
                <div>
                  <h1 className="text-2xl font-larsseitbold text-white -mt-[2px]">{x.name}</h1>
                  <h2 className=" font-larsseit text-white -mt-[2px]">{x.type}</h2>
                </div>
              </div>
              <h1 className="text-gray-200">{x.description}</h1>
            </div>
          ))}
        </div>
        <h1 className="font-larsseitbold text-3xl my-2 text-white">frameworks</h1>
        <div className="grid grid-cols-1  sm:grid-cols-4 gap-3">
          {frameworks.map(x => (
            <div key={x.name} className="bg-neutral-900 bg-opacity-40 pt-4 pb-3 px-4 rounded-xl backdrop-blur-md">
              <div className="flex items-center gap-2 mb-2">
                <div className={clsx(x.background, "p-2 rounded-lg")}>
                  <x.icon size={28} className={clsx(x.color, "")} />
                </div>
                <div>
                  <h1 className="text-xl font-larsseitbold -mt-[2px] text-white">{x.name}</h1>
                  <h2 className="text-sm font-larsseit -mt-1 text-white">{x.language}</h2>
                </div>
              </div>
              <h1 className="text-gray-200">{x.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </>
    )
}

export default Code