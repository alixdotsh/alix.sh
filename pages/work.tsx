import Link from "next/link";
import Entry from "./components/entry";
import { ChevronLeft } from "lucide-react";

const Work = () => {
  return (
    <>
      <div className="w-screen h-auto min-h-screen flex items-center justify-center flex-col py-16 lg:px-0 px-4">
        <div className="max-w-5xl">
          <a
            className="flex items-center gap-1 font-medium relative z-30 text-alix-200 hover:text-alix-50 duration-200"
            href="/"
          >
            <ChevronLeft size={18} strokeWidth={2.8} />
            <h1>back</h1>
          </a>
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight glow-md text-alix-50">
            work
          </h1>
          <h2 className="text-xl text-alix-50">
            things i have worked on, whether it be personal projects or with
            collaboration
          </h2>
          <div className="grid grid-rows-2 grid-cols-2 mx-auto items-stretch gap-2 pt-5 col-span-2">
            <div className="row-span-2">
              <div className=" bg-alix-900 p-5 rounded-xl row-span-2">
                <h1 className="text-2xl text-left font-bold">
                  <a
                    className="underline decoration-alix-300"
                    href="https://keqingmains.com"
                  >
                    keqingmains.com // 2023
                  </a>
                </h1>
                <h1 className="text-lg text-alix-100">
                  frontend/backend, design
                </h1>
                <h2>
                  kqm is a website tailored to theorycrafting and guides for
                  both Genshin Impact, and Honkai: Star Rail, i work for both
                  sides. for the genshin side, i work in publishing guides and
                  pages, along with updating them as needed. for the honkai
                  side, i work on the website development and redesign. i will
                  eventually also be working on a simulation tool for the honkai
                  side that is purely backend and written in go.
                </h2>
              </div>
            </div>
            <div className=" bg-alix-900 p-5 rounded-xl row-span-2">
              <h1 className="text-2xl text-left font-bold">
                <a
                  className="underline decoration-alix-300"
                  href="https://alix.sh"
                >
                  alix.sh // 2023
                </a>
              </h1>
              <h1 className="text-lg text-alix-100">frontend, design</h1>
              <h2>
                the website you currently are browsing! this is a small and
                simple website, but this also shows a little bit of my full
                capabilities.
              </h2>
            </div>
          </div>
          <p className="text-lg mt-4">
            more to come soon. you could add more to this list by{" "}
            <a href="/" className="underline decoration-alix-300">
              hiring me!
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
