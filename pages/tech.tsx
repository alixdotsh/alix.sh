import { NextPage } from "next"
import Link from "next/link"

import { ChevronLeft, Monitor, Tablet, Smartphone, Watch } from "lucide-react"
import clsx from "clsx"

const languages = [
  {
    name: 'macBook pro 13"',
    type: "macOS",
    description: "apple m2, 8gb ram, 512gb ssd",
    icon: Monitor,
    color: "text-[#ffffff] p-[2px]",
    background: "bg-[#262626]"
  },
  {
    name: 'lenovo legion 5 15ARH05',
    type: "windows",
    description: "ryzen 7 4800h, 16gb ram, nvidia gtx 1660ti, 512gb ssd",
    icon: Monitor,
    color: "text-[#ffffff] p-[2px]",
    background: "bg-[#262626]"
  }
]

const frameworks = [
  {
    name: "ipad pro",
    language: "ipadOS",
    description: "m1, 128gb, i use apple pencil alongside",
    icon: Tablet,
    color: "text-[#ffffff] p-[2px]",
    background: "bg-[#262626]"
  },
  {
    name: "iphone xr",
    language: "iOS",
    description: "64gb",
    icon: Smartphone,
    color: "text-[#ffffff] p-[2px]",
    background: "bg-[#262626]"
  },
  {
    name: "apple watch",
    language: "watchOS",
    description: "series 7",
    icon: Watch,
    color: "text-[#ffffff] p-[2px]",
    background: "bg-[#262626]"
  }
]

const Tech: NextPage = () => {
    return (
        <>
        <div className="bg-black pattern-dots pattern-neutral-900 pattern-bg-transparent pattern-size-6 pattern-opacity-100">
        <div className="max-w-6xl px-6 sm:p-0 p-8 sm:py-20 m-auto w-screen h-screen">
      <Link href="/" className="flex items-center gap-1 font-medium relative z-30 text-gray-200 hover:text-white duration-200">
          <ChevronLeft size={18} strokeWidth={2.8} />
          <h1>back</h1>
      </Link>
      <h1 className="text-7xl font-larsseitbold text-white relative z-20">tech i use</h1>
      <h2 className="font-larsseit text-lg text-white">technology that i use everyday for general use or development.</h2>
      <div className="mt-2">
        <h1 className="font-larsseitbold text-3xl my-2 text-white">main</h1>
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
        <h1 className="font-larsseitbold text-3xl my-2 text-white">everything else</h1>
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

export default Tech