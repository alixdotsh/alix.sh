import { useState } from "react"

const start = () => {
    return (
      <>
        <div className="text-alix-50 font-sans">
          <div className="grid grid-rows-2 grid-cols-3 w-3/5 mx-auto h-screen items-center justify-center">
            <div className="bg-alix-900 p-5 rounded-xl">
              <h1 className="text-lg text-right">__________________ - x</h1>
              <p className="text-sm text-left">/home</p>
              <p className="text-sm text-right">Host: ???????</p>
              <p className="text-sm text-right">OS: macOS 13.2.1</p>
              <p className="text-sm text-right">Architecture: arm64</p>
              <p className="text-sm text-right">
                Contact:{" "}
                <a
                  className="underline decoration-alix-300"
                  href="https://alix.sh"
                >
                  https://alix.sh
                </a>
              </p>
            </div>
            <div className="bg-alix-900 p-5 text-center rounded-xl">
              <h1 className="text-lg text-right">__________________ - x</h1>
              <p className="text-sm text-left">/time</p>
              <p className="text-sm text-right">time</p>
              <p className="text-sm text-right">date</p>
            </div>
            <div className="bg-alix-900 p-5 text-center rounded-xl">
              <h1 className="text-lg text-right">__________________ - x</h1>
              <p className="text-sm text-left">/music</p>
              <p className="text-sm text-right">spotify status would go here</p>
            </div>
            <div className="bg-alix-900 p-5 text-center col-span-2 rounded-xl">
              <h1 className="text-lg text-right">__________________ - x</h1>
              <p className="text-sm text-left">/curl</p>
              <p className="text-sm text-right">placeholder</p>
            </div>
            <div className="bg-alix-900 p-5 text-center col-span-1 rounded-xl">
              <h1 className="text-lg text-right">__________________ - x</h1>
              <p className="text-sm text-left">/apps</p>
              <p className="text-sm text-right">icons linking to twitter, spotify, twitch, github, etc...</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default start