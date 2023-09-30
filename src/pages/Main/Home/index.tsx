import React, { useState } from 'react'
import { BGTop, Button, Container, Content } from './style'
import { motion } from 'framer-motion'
import CursorMask from '../../../components/CursorMask'
import imageTop from "../../../assets/images/BG-Topo-NWB.png"

function Home() {
    const [click, setClick] = useState<boolean>(false)
  return (
    <Container>
        <CursorMask mask={click} />
        <Content>
            <div className="slogan">
                <motion.h1
                    animate={{ y: [40, 0], opacity: [0, 1] }}
                    transition={{ type: "keyframes", ease: [0.36, 0.85, 0.45, 0.85], duration: 0.8, delay: 2.8 }}
                >
                    O Maior centro
                </motion.h1>
                <motion.h1
                    animate={{ y: [40, 0], opacity: [0, 1] }}
                    transition={{ type: "keyframes", ease: [0.36, 0.85, 0.45, 0.85], duration: 0.8, delay: 3 }}
                >
                    de desenvolvimento
                </motion.h1>
                <motion.h1
                    animate={{ y: [40, 0], opacity: [0, 1] }}
                    transition={{ type: "keyframes", ease: [0.36, 0.85, 0.45, 0.85], duration: 0.8, delay: 3.2 }}
                >
                    Empresarial do Brasil.
                </motion.h1>
            </div>

            <div className="text-and-button">
                <motion.h2
                        animate={{ y: [40, 0], opacity: [0, 1] }}
                        transition={{ type: "keyframes", ease: [0.36, 0.85, 0.45, 0.85], duration: 0.8, delay: 3.1 }}
                    >
                    Somos um guia que resolve o todo. Sabemos cada passo que você precisar dar, pois existe uma trilha a ser seguida. Independente do seu tamanho, os problemas são os mesmos, só mudam de escala.
                </motion.h2>

                <motion.a href="/"
                    animate={{ y: [40, 0], opacity: [0, 1] }}
                    transition={{ type: "keyframes", ease: [0.36, 0.85, 0.45, 0.85], duration: 0.8, delay: 3.3 }}
                    onMouseEnter={() => setClick(true)}
                    onMouseLeave={() => setClick(false)}
                >
                    <span>Conheça a nossa trilha empresarial</span>
                    <div className="icon" />
                </motion.a>
            </div>
        </Content>
        <BGTop>
            <motion.img src={imageTop} alt="BackgrounD Top" 
                animate={{ y: [40, 0], opacity: [0, 1] }}
                transition={{ type: "keyframes", ease: [0.36, 0.85, 0.45, 0.85], duration: 0.8, delay: 3.4 }}
            />
        </BGTop>
    </Container>
  )
}

export default Home