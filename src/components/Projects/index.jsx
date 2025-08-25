import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import work1 from "../../assets/Images/SummaristPic.png"
import work2 from "../../assets/Images/NFTImage.png"
import work3 from "../../assets/Images/blinkerImage.png"
import work4 from "../../assets/Images/TreactImage.png"
import work5 from "../../assets/Images/LibraryImage.png"
import work6 from "../../assets/Images/personalwebImage.png"

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Summarist",
      year: "2025",
      img: work1,
      title: "AI-Powered Book Summaries for Smarter Learning",
      detail: "Summarist is a web application that allows users to summarize business and self-development books using AI technology. The platform uses advanced algorithms to analyze text and generate concise summaries, making it easier for users to digest large amounts of information quickly.",
    },
    {
      client: "Ultraverse NFT World",
      year: "2025",
      img: work2,
      title: "A User-Friendly NFT Discovery & Management Platform",
      detail: "A platform that provides a user-friendly interface for browsing and discovering NFTs, as well as tools for managing digital assets.",
    },
    {
      client: "Blinker",
      year: "2025",
      img: work3,
      title: "Browse and Learn About Your Favorite Movies",
      detail: "The Movie Database is a web application that allows users to search for movies and view details about them. The application is built using HTML, CSS, and JavaScript. It uses the TMDB API to fetch movie data and display it to the user.",
    },
    {
      client: "Treact",
      year: "2025",
      img: work4,
      title: "Search, Customize & Save Web Templates",
      detail: "Treact is a web application that allows users to search for templates and customize them to their liking. Users can also save their favorite templates and download them as a PDF. The application is built using React.js, HTML, CSS, and JavaScript.",
    },
    {
      client: "The Library Project",
      year: "2025",
      img: work5,
      title: "An Online Bookstore Built with HTML, CSS & JS",
      detail: "Library is an e-commerce web application that allows users to search for books, add them to their cart, and purchase them. The application is built using HTML, CSS, and JavaScript.",
    },
    {
      client: "My Personal Webiste",
      year: "2025",
      img: work6,
      title: "My website displays some of my projects and experience",
      detail: "I'm a Frontend Software Engineer with a strong passion for building web applications with great user experiences.",
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Work"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            <ScrambleText delay={1}>Discover a curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
