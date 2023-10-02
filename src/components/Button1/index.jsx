import React, { useState, useRef, useEffect } from 'react'
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import CursorMask from '../CursorMask'
import gsap from 'gsap'

import "./style.css"
import { ReactComponent as Arrow } from "../../assets/icons/arrow-right-md.svg"


function Button1({ text, link }) {

  const [click, setClick] = useState(false)

  const refLink = useRef(null)
  const spanRef = useRef(null)
  const arrowRef = useRef(null)
  const ballRef = useRef(null)

  const mouseMove = (event) => {
        setClick(true)
        const { clientX, clientY } = event;
        const { top, left } = arrowRef.current.getBoundingClientRect();
        const ball = ballRef.current.getBoundingClientRect();

        const span = spanRef.current.getBoundingClientRect();
        
        const x = (clientX - span.x -  (span.width) / 2) / 12
        const y = clientY - top - 14

        console.log("clientX", clientX)
        console.log("span", span.x)
        
        console.log("\n\n\nclientY", clientY)

        console.log("top", top)
        console.log("left", left)

        console.log("\n\n\nball", ball)

        gsap.to(arrowRef.current, {x: x})
        gsap.to(arrowRef.current, {y: y})
    }

    const mouseLeave = (event) => {
        setClick(false)
        gsap.to(arrowRef.current, {x: 0})
        gsap.to(arrowRef.current, {y: 0})
    }


  useEffect(() => {

    window.addEventListener("mouseenter", mouseMove)
    window.addEventListener("mouseleave", mouseLeave)

    return () => {
        window.removeEventListener("mouseenter", mouseMove)
        window.removeEventListener("mouseleave", mouseLeave)
    }
  }, [])
  return (
    <>
        <CursorMask mask={click} />
        <motion.a 
            href={link} className='button'
            animate={{ y: [120, 0], opacity: [0, 1] }}
            transition={{ ease: [.75, 0, .25, 1], duration: 1.3, delay: 2.9 }}
            onMouseMove={mouseMove}
            onMouseLeave={mouseLeave}
            ref={refLink}
        >
            <span ref={spanRef}>{text}</span>
            <div ref={ballRef} className="icon">
                <Arrow ref={arrowRef} />
            </div>
        </motion.a>
    </>
  )
}

Button1.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}


export default Button1