import React, { useEffect, useRef, useState } from 'react'
import { Container } from './style'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logoNWB from "../../assets/images/Logo-Marquee-NWB.svg"
import Band from "../../assets/images/Band-NWB.png"
import JovemPan from "../../assets/images/Jovem-Pan-NWB.png"
import PEGN from "../../assets/images/PEGN-NWB.png"
import R7 from "../../assets/images/R7-NWB.png"

function InfiniteText2() {

  const content1 = useRef(null)
  const content2 = useRef(null)
  const slider = useRef(null)

  let xPercent = 0
  let direction  = -1
  let velocity = 0.08
  let lastScrollTop = 0

  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {
    const switchVelocity = () => {
      velocity = 0.2
      setTimeout(() => {
        velocity = 0.05
      }, 200)

      if(window.scrollY >= lastScrollTop) {
        direction = -1
      } else {
        direction = 1
      }

      lastScrollTop = window.scrollY
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
              <span>Na mídia</span>
              <img src={logoNWB} alt="logo" />
              <img src={Band} alt="Band" />
              <img src={logoNWB} alt="logo" />
              <img src={JovemPan} alt="Jovem Pan" />
              <img src={logoNWB} alt="logo" />
              <img src={PEGN} alt="Pequenas Empresas Grandes Negócios" />
              <img src={logoNWB} alt="logo" />
              <img src={R7} alt="R7" />
              <img className='logo2' src={logoNWB} alt="logo" />
            </div>
            <div ref={content2} className="content">
            <span>Na mídia</span>
              <img src={logoNWB} alt="logo" />
              <img src={Band} alt="Band" />
              <img src={logoNWB} alt="logo" />
              <img src={JovemPan} alt="Jovem Pan" />
              <img src={logoNWB} alt="logo" />
              <img src={PEGN} alt="Pequenas Empresas Grandes Negócios" />
              <img src={logoNWB} alt="logo" />
              <img src={R7} alt="R7" />
              <img className='logo2' src={logoNWB} alt="logo" />
            </div>
        </div>
    </Container>
  )
}

export default InfiniteText2