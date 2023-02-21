import { NextPage } from "next"
import Link from "next/link"

import { Briefcase, ChevronLeft, Link2 } from "lucide-react"

const work = [
  {
    name: "???",
    year: "2022",
    role: "creator + design",
    description: "still very early in the production stage, check back soon.",
  },
  {
    name: "lime",
    year: "2020-2021",
    role: "frontent + backend",
    description: "discord bot written in python that was for general purpose. find the repo by clicking the github icon at the home page :3",
    link: "/",
  },
  {
    name: "kaedehara.xyz",
    year: "2023",
    role: "frontend + design",
    description: "this website. very simple designs, but it shows a general idea of my capabilities.",
    link: "/",
  },
]

const Work: NextPage = () => {
  return (
    <div className="pattern-dots pattern-neutral-900 pattern-bg-transparent pattern-size-6 pattern-opacity-100">
    <div className="max-w-6xl px-6 sm:p-0 p-8 sm:py-20 m-auto">
      <Link href="/" className="flex items-center gap-1 font-medium relative z-30 text-gray-200 hover:text-white duration-200">
          <ChevronLeft size={18} strokeWidth={2.8} />
          <h1>back</h1>
      </Link>
      <h1 className="text-7xl font-larsseitbold relative z-20 text-white">work</h1>
      <h2 className="font-larsseit text-lg text-white">some of the stuff i've made.</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        {work.map(x => (
          <div key={x.name} className="px-5 py-3 col-span-2 bg-neutral-900 bg-opacity-40 backdrop-blur-md rounded-xl">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-larsseitbold text-white">{x.name}</h1>
              {x.link != null && 
                <Link as="a" href={x.link}>
                  <Link2 className="cursor-pointer" />
                </Link>
              }
              <h1 className="ml-auto text-sm font-larsseit text-white">{x.year}</h1>
            </div>
            <h1 className="font-larsseit text-white">{x.role}</h1>
            <h2 className="text-gray-200">{x.description}</h2>
          </div>
        ))}
        <div className="flex items-center justify-center flex-col px-5 py-3 col-start-1 text-center sm:col-start-2 col-span-2 bg-neutral-900 bg-opacity-40 backdrop-blur-md rounded-xl">
          <Briefcase size={32} />
          <h1 className="text-xl font-larsseit text-white">somewhat available for hire.</h1>
          <h2 className="text-white">contact me <Link href="/" className="text-rose-500">here</Link> to get in touch and discuss details with me :3</h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Work