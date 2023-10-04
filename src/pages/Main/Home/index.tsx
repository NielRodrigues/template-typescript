import React, { useEffect, useState, useRef } from 'react'
import { BGTop, Container, Content, ScrollIndicator } from './style'
import { motion } from 'framer-motion'
import SplitType from 'split-type'
import gsap, { Expo } from 'gsap'


import imageTop from "../../../assets/images/BG-Topo-NWB.png"
import Button1 from '../../../components/Button1'

function Home() {
  const sloganRef = useRef(null)
  const sloganRef2 = useRef(null)
  const sloganRef3 = useRef(null)


  useEffect(() => {
    if(sloganRef.current && sloganRef2.current && sloganRef3.current) {
        SplitType.create(sloganRef.current, { types: "words, chars" })
        SplitType.create(sloganRef2.current, { types: "words, chars" })
        SplitType.create(sloganRef3.current, { types: "words, chars" })

        gsap.fromTo(".char", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 3,
            duration: 3,
            stagger: {
                amount: 2,
            }
        })
    }
  }, [])
  

  return (
    <Container>
        <ScrollIndicator />
        <Content>
            <div className="slogan">
                <h1 ref={sloganRef}>O Maior centro</h1>
                <h1 ref={sloganRef2}>de desenvolvimento</h1>
                <h1 ref={sloganRef3}>Empresarial do Brasil.</h1>
            </div>

            <div className="text-and-button">
                <motion.h2
                        animate={{ y: [120, 0], opacity: [0, 1] }}
                        transition={{ ease: [0.06, 0.9, 0.26, 0.99], duration: 1.5, delay: 3.7 }}
                    >
                    Somos um guia que resolve o todo. Sabemos cada passo que você precisar dar, pois existe uma trilha a ser seguida. Independente do seu tamanho, os problemas são os mesmos, só mudam de escala.
                </motion.h2>

                <Button1 link='/' text='Conheça a nossa trilha empresarial' />
            </div>
        </Content>
        <BGTop>
            <motion.img src={imageTop} alt="BackgrounD Top" 
                animate={{ y: [120, 0], opacity: [0, 1] }}
                transition={{ ease: [0.06, 0.9, 0.26, 0.99], duration: 1.5, delay: 3.2 }}
            />
        </BGTop>
    </Container>
  )
}

export default Home