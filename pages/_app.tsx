import type { AppProps } from "next/app"
import  { useRouter } from "next/router"

import { AnimatePresence, motion } from "framer-motion"
import SEO from "@bradgarropy/next-seo"
import Head from "next/head"

import "../styles/globals.css"

const variants = {
  hidden: { opacity: 0, x: -100, y: 0 },
  hidden2: { opacity: 0, x: 100, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -100, y: 0 },
  exit2: { opacity: 0, x: 100, y: 0 },
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <SEO
        title="alix"
        description="digital artist, software engineer and ui designer"
        keywords={[
          "alix",
          "website",
          "portfolio",
          "developer",
          "artist",
          "designer",
        ]}
        themeColor="#a49dcf"
        colorScheme="dark"
        facebook={{
          image: "https://alix.sh",
          url: "https://alix.sh",
          type: "website",
        }}
        twitter={{
          image: "https:/alix.sh",
          card: "summary_large_image",
          site: "@alixdotsh",
        }}
      />
      <Head>
        <title>alix</title>
        <meta content="alix.sh" property="og:site_name" />
      </Head>

      <div className="overflow-hidden">
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <motion.main
            key={router.route}
            variants={variants}
            animate="enter"
            initial={router.route == "/" ? "hidden2" : "hidden"}
            exit={router.route == "/" ? "exit2" : "exit"}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <div className="relative z-20">
              <Component {...pageProps} />
            </div>
          </motion.main>
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp
