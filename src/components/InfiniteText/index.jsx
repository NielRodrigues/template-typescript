import React, { useEffect, useRef } from 'react'
import { Container } from './style'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logoNWB from "../../assets/images/Logo-Marquee-NWB.svg"

function InfiniteText() {

  const content1 = useRef(null)
  const content2 = useRef(null)
  const slider = useRef(null)

  let xPercent = 0
  let direction  = -1
  let velocity = 0.05

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const switchVelocity = () => {
      velocity = 0.2
      setTimeout(() => {
        velocity = 0.05
      }, 200)
    }

    window.addEventListener("scroll", switchVelocity)

    return () => window.removeEventListener("scroll", switchVelocity) 
  }, [])

  useEffect(() => {
    requestAnimationFrame(animation)

    gsap.to(slider.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight,
            scrub: 0.25,
            onUpdate: e => direction = e.direction * -1,
        },
    })
  }, [])

  const animation = () => {
    if(xPercent <= -100) {
        xPercent = 0;
    }

    if(xPercent > 0) {
        xPercent = -100;
    }
    gsap.set(content1.current, { xPercent: xPercent, ease: "easeOut" })
    gsap.set(content2.current, { xPercent: xPercent, ease: "easeOut"  })

    xPercent += velocity * direction;

    requestAnimationFrame(animation)
  }

  return (
    <Container>
        <div ref={slider} className="slider">
            <div ref={content1} className="content">
              <span>No Way Back</span>
              <img src={logoNWB} alt="logo" />
              <span>No Way Back</span>
              <img className='logo2' src={logoNWB} alt="logo" />
            </div>
            <div ref={content2} className="content">
              <span>No Way Back</span>
              <img src={logoNWB} alt="logo" />
              <span>No Way Back</span>
              <img className='logo2' src={logoNWB} alt="logo" />
            </div>
        </div>
    </Container>
  )
}

export default InfiniteText