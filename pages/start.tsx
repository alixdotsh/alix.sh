import { useEffect, useState } from "react";
import { NextApiRequest, NextApiResponse } from "next";
import moment from "moment";
require('dotenv').config();

// api funcs

// time and date funcs
function Date() {
  var date = moment().subtract(10, "days").calendar();
  return date;
}

function Time() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = moment().format("LTS");
      setTime(currentTime);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return time;
}

const start = () => {
  return (
    <>
      <div className="text-alix-50 font-sans">
        <div className="grid grid-rows-2 grid-cols-3 w-3/5 mx-auto h-screen items-center justify-center">
          <div className="bg-alix-900 p-5 rounded-xl">
            <p className="text-sm text-left">/home</p>
            <p className="text-sm text-right">Host: ???????</p>
            <p className="text-sm text-right">OS: macOS 14.0</p>
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
            <p className="text-sm text-left">/time</p>
            <p className="text-sm text-right">time: {Time()}</p>
            <p className="text-sm text-right">date: {Date()}</p>
          </div>
          <div className="bg-alix-900 p-5 text-center rounded-xl">
            <p className="text-sm text-left">/music</p>
            <p className="text-sm text-right">spotify status would go here</p>
          </div>
          <div className="bg-alix-900 p-5 text-center col-span-2 rounded-xl">
            <p className="text-sm text-left">/cmd</p>
            <p className="text-sm text-right bg-alix-700 rounded-md">
              <code>cd developer/alix.sh && pnpm i && pnpm dev</code>
            </p>
          </div>
          <div className="bg-alix-900 p-5 text-center col-span-1 rounded-xl">
            <p className="text-sm text-left">/apps</p>
            <p className="text-sm text-right">
              icons linking to twit, spotify, twitch, github, etc...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default start;
