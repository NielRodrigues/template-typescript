import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Container, ContentHover } from './style'

function Menu() {

  const [hover, setHover] = useState(false)

  const menuRef = useRef(null)
  const contentRef = useRef(null)

  const mouseEnter = (event) => {

    const { clientX, clientY } = event;
    const { top, left } = menuRef.current.getBoundingClientRect()
    const content = contentRef.current.getBoundingClientRect()


    const x = clientX - ( left + 32 / 2)
    const y = clientY - ( top + 32 / 2)

    gsap.to(menuRef.current, {x: x})
    gsap.to(menuRef.current, {y: y})

    gsap.to(contentRef.current, {left: -(content.width + 12)})
    gsap.to(contentRef.current, {top: 32})
    setHover(true)
  }

  const mouseLeave = (event) => {
    setHover(false)

    const content = contentRef.current.getBoundingClientRect()
    gsap.to(contentRef.current, {left: -(content.width + 12)})
    gsap.to(contentRef.current, {top: 32 })

    const { clientX, clientY } = event;

    gsap.to(menuRef.current, {x: 0})
    gsap.to(menuRef.current, {y: 0})

  }

  return (
    <Container 
      onMouseMove={mouseEnter}
      onMouseLeave={mouseLeave}
      ref={menuRef}
    >
        <div className="line" />
        <div className="line" />
        <div className="line" />

        <ContentHover 
          ref={contentRef}
          style={hover ? { display: "flex" } : { display: "none" }}
        >
          <span>Menu</span>
        </ContentHover>
    </Container>
  )
}

export default Menu