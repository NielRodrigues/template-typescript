import React, { useRef, useEffect } from 'react'
import { Container, Div2, Title } from './style'
import gsap, { Power4 } from 'gsap'
import { ScrollTrigger } from "gsap/all";
import Button2 from '../../../components/Button2';

function Solutions() {

  const titleRef = useRef(null)
  const divRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.fromTo(titleRef.current, {
        y: 40,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        ease: Power4.easeInOut,
        duration: 0.4,
        scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 80%",
            scrub: 4,
            // markers: true,
        }
    })

    gsap.fromTo(divRef.current, {
        y: 40,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        ease: Power4.easeInOut,
        duration: 0.4,
        scrollTrigger: {
            trigger: divRef.current,
            start: "top 80%",
            end: "top 80%",
            scrub: 4,
            // markers: true,
        }
    })
  }, [])

  return (
    <Container>
        <Title ref={titleRef}>Nossas<br />soluções</Title>
        <Div2 ref={divRef} style={{position: "unset"}}>
            <h1>Pré, <br />durante <br />& pós.</h1>
            <h2>Os Superprodutos é a nossa forma de entregar a solução você antes ou em qualquer momento da Trilha Empresarial.</h2>

            <Button2 link='/' text='Conheça a nossa trilha empresarial' />
        </Div2>

        <Div2></Div2>
    </Container>
  )
}

export default Solutions