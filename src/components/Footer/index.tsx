import React, { useEffect, useRef } from 'react'
import { Container, Line } from './style'
import Button3 from '../Button3'

import gsap, { Expo } from 'gsap'
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

function Footer() {

  const title = useRef(null)
  const logo = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    if(title.current) {
      SplitType.create(title.current, { types: "words, chars", charClass: "char10" })

        gsap.fromTo(".char10", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 3,
            stagger: {
                amount: 0.5,
            },
            scrollTrigger: {
                trigger: title.current,
                start: "top 80%",
                end: "top 80%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }
        })
    }

    gsap.fromTo(logo.current, {
      y: "100%",
      opacity: 0,
  }, {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut,
      delay: 0.2,
      duration: 3,
      scrollTrigger: {
          trigger: title.current,
          start: "bottom center",
          end: "bottom center",
          scrub: false,
          toggleActions: "restart none none reverse"
      }
  })
  }, [])

  return (
    <Container>
        <Line>
            <h1 ref={title}>Vamos conversar sobre<br/>nosso futuro juntos?</h1>
            <div className="social-media">
                <h3>FALE PELO E-MAIL</h3>
                <Button3 text='contato@nwbcompany.com.br' link='/' />
                <h3>INSTAGRAM</h3>
                <Button3 text='@nwbcompany' link='/' />
                <h3>INSTAGRAM</h3>
                <Button3 text='@nwbcompany' link='/' />
            </div>
        </Line>
        <Logo ref={logo} />
    </Container>
  )
}

export default Footer