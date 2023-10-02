import React, { useState } from 'react'
import { BGTop, Container, Content } from './style'
import { motion } from 'framer-motion'
import imageTop from "../../../assets/images/BG-Topo-NWB.png"
import Button1 from '../../../components/Button1'

function Home() {

  return (
    <Container>
        <Content>
            <div className="slogan">
                <motion.h1
                    animate={{ y: [120, 0], opacity: [0, 1] }}
                    transition={{ ease: [.75, 0, .25, 1], duration: 1.2, delay: 2.6 }}
                >
                    O Maior centro
                </motion.h1>
                <motion.h1
                    animate={{ y: [120, 0], opacity: [0, 1] }}
                    transition={{ ease: [.75, 0, .25, 1], duration: 1.2, delay: 2.7 }}
                >
                    de desenvolvimento
                </motion.h1>
                <motion.h1
                    animate={{ y: [120, 0], opacity: [0, 1] }}
                    transition={{ ease: [.75, 0, .25, 1], duration: 1.2, delay: 2.8 }}
                >
                    Empresarial do Brasil.
                </motion.h1>
            </div>

            <div className="text-and-button">
                <motion.h2
                        animate={{ y: [120, 0], opacity: [0, 1] }}
                        transition={{ ease: [.75, 0, .25, 1], duration: 1.2, delay: 3 }}
                    >
                    Somos um guia que resolve o todo. Sabemos cada passo que você precisar dar, pois existe uma trilha a ser seguida. Independente do seu tamanho, os problemas são os mesmos, só mudam de escala.
                </motion.h2>

                <Button1 link='/' text='Conheça a nossa trilha empresarial' />
            </div>
        </Content>
        <BGTop>
            <motion.img src={imageTop} alt="BackgrounD Top" 
                animate={{ y: [120, 0], opacity: [0, 1] }}
                transition={{ ease: [.75, 0, .25, 1], duration: 1.5, delay: 2.8 }}
            />
        </BGTop>
    </Container>
  )
}

export default Home