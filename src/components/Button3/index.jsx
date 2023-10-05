import React, { useState, useRef, useEffect, useContext } from 'react'
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import CursorMask from '../CursorMask'
import gsap from 'gsap'

import "./style.css"
import { ReactComponent as Arrow } from "../../assets/icons/arrow-right-md.svg"
import { MouseContext } from '../../contexts/MouseHoverContext'


function Button3({ text, link }) {
  const array = new Array(text.length).fill(0).map((_, index) => index);

  const { setClick } = useContext(MouseContext)

  const [hover, setHover] = useState(false)

  const refLink = useRef(null)
  const spanRef = useRef(null)
  const arrowRef = useRef(null)
  const ballRef = useRef(null)

  const mouseMove = (event) => {
        setClick(true)
        setHover(true)
        const { clientX, clientY } = event;
        const { top, left } = arrowRef.current.getBoundingClientRect();
        const ball = ballRef.current.getBoundingClientRect();

        const span = spanRef.current.getBoundingClientRect();
        
        const x = (clientX - span.x -  (span.width) / 2) / 24
        const y = (clientY - span.y - (span.height) / 2) / 2

        gsap.to(arrowRef.current, {x: x})
        gsap.to(arrowRef.current, {y: y})
    }

    const mouseLeave = (event) => {
        setClick(false)
        setHover(false)
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
    <motion.a 
        href={link} className='button'
        animate={{ y: [120, 0], opacity: [0, 1] }}
        transition={{ ease: [0.06, 0.9, 0.26, 0.99], duration: 1.5, delay: 4 }}
        onMouseMove={mouseMove}
        onMouseLeave={mouseLeave}
        ref={refLink}
    >
        <span ref={spanRef} className='content-span'>    
        {
            hover ? array.map((letter, index)=> <span className='letter' key={index} style={{animationDelay:  `${index * 20}ms`}}>{text[index] === " " ? " " : text[index]}</span>) : text
        }
        </span>
        <div ref={ballRef} className="icon">
            <Arrow ref={arrowRef} />
        </div>
    </motion.a>
  )
}

Button3.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}


export default Button3