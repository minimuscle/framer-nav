/** this is to FPO generate 5 links for the nav **/
import { easeOut, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { useEffect, useState } from "react"
import logo from "./assets/logo.svg"
import search from "./assets/search.svg"
import map from "./assets/map.svg"
import wishlist from "./assets/wishlist.svg"
import profile from "./assets/profile.svg"
const linkList = [{}, {}, {}, {}, {}]

const imgStyle = {
  maxWidth: "250px",
  margin: "0 72px 0 72px",
}

const imgStyleSmall = {
  height: "32px",
  margin: "0 0 0 32px",
}

const rightSideGrow = {
  marginLeft: "auto",
  order: 2,
  backgroundColor: "#fff",
  width: "40%",
  height: "64px",
  borderRadius: "5px",
  display: "flex",
  right: 0,
  flex: 1,
}

const rightSide = {
  marginLeft: "auto",
  order: 2,
  backgroundColor: "#fff",
  width: "40%",
  height: "64px",
  borderRadius: "5px",
  display: "flex",
}

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const [smallHeader, setHeader] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
    update()
  })

  function update() {
    if (scrollYProgress?.current < 0.1) {
      console.log("full")
      setHeader(false)
    } else if (scrollYProgress?.current > 0.1) {
      console.log("small")
      setHeader(true)
    }
  }

  const variants = {
    /** this is the "visible" key and it's respective style object **/
    full: { scale: [0.75, 1], y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    small: { scale: [2, 1], y: [-50, 0] },
  }

  return (
    <motion.nav
      layout
      variants={variants}
      animate={smallHeader ? "small" : "full"}
      transition={{
        type: "spring",
        mass: 0.5,
      }}
      className={smallHeader ? "smallNav" : "navStyles"}
    >
      <img
        src={logo}
        alt='AMW Logo'
        style={smallHeader ? imgStyleSmall : imgStyle}
      />
      <a className='link' href='#'>
        Buy a Car
      </a>
      <a className='link' href='#'>
        Sell a Car
      </a>
      <a className='link' href='#'>
        Services
      </a>
      <a
        className='link'
        href='#'
        style={smallHeader ? { display: "none" } : { display: "unset" }}
      >
        About
      </a>
      <a
        className='link'
        href='#'
        style={smallHeader ? { display: "none" } : { display: "unset" }}
      >
        Contact
      </a>
      <div
        className='vl'
        style={smallHeader ? { display: "unset" } : { display: "none" }}
      ></div>
      <div style={smallHeader ? rightSideGrow : rightSide}>
        <img
          className='searchIcon'
          src={search}
          alt='Search'
          style={smallHeader ? { padding: "20px 32px" } : { display: "unset" }}
        />
        <input
          placeholder='Search'
          style={smallHeader ? { display: "none" } : { display: "unset" }}
        />

        <a href='#'>
          <img className='sideIcons' src={map} alt='Search' />
        </a>
        <a href='#'>
          <img className='sideIcons' src={profile} alt='Profile' />
        </a>
        <a href='#'>
          <img className='sideIcons' src={wishlist} alt='Wishlist' />
        </a>
        <button>Call 1800 000 000</button>
      </div>
    </motion.nav>
  )
}
