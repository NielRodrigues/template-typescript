import React, { useContext, useEffect, useRef, useState } from 'react'
import { Button, Container, Scroll } from './style'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import { MouseContext } from '../../../contexts/MouseHoverContext';

function Timeline() {

  const container = useRef(null)
  const scrollRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  const [percentage, setPercentage] = useState<number>(0)

  const { setClick } = useContext(MouseContext)

  useEffect(() => {
    const panel = gsap.context(() => {
        gsap.to(scrollRef.current, {
            x: "-53%",
            ease: "none",
            scrollTrigger: {
                trigger: scrollRef.current,
                start: "top 128",
                end: "2000 128",
                scrub: 4,
                pin: true,
                onUpdate: (animation) => {
                    const currentX: number = animation.progress * 100; 
                    setPercentage(currentX)
                },
            },
        })
    })

    return () => panel.revert()
  }, [])

  return (
    <Container ref={container}>
        <Scroll ref={scrollRef}>
            <div className="title" style={{ left: `96px)`}}>Trilha Empresarial da NWB</div>
            <span className="text">Operacional</span>
            <span className="text" style={{left: "12.5%"}}>Tático</span>
            <span className="text" style={{left: "62.5%"}}>Estratégico</span>

            <div className="line" />
            <div className="line-active" style={{ width: `${percentage}%`}} />
            <div className={percentage > 0.2 ? "square active" : "square"} />
            <div className={percentage > 10.95 ? "ball active" : "ball"} style={{left: "12.5%"}} />
            <div className={percentage >= 62 ? "ball active" : "ball"} style={{left: "62.5%"}} />
            <div className={percentage >= 100 ? "end active" : "end"} />

            <Button to="/"
                onMouseEnter={() => setClick(true)}
                onMouseLeave={() => setClick(false)}
                style={{ left: `96px)`}}
            >
                <span>Conheça os nossos produtos da trilha empresarial</span>
            </Button>

            <div className="text">
                <h5>Ano 0</h5>
                <h2>Abertura <br />dos olhos</h2>
                <h4>O que o empresário entende como verdade começa a se desfazer</h4>
            </div>

            <div className="text">
                <h5>Ano 1</h5>
                <h2>Sombra na Parede</h2>
                <h4>Os primeiros passos para colocar o empresário na trilha certa</h4>
            </div>

            <div className="text">
                <h5>Ano 2</h5>
                <h2>Quebra das correntes</h2>
                <h4>A trilha se torna subida e as possibilidades de vista se multiplicam</h4>
            </div>

            <div className="text">
                <h5>Ano 3</h5>
                <h2>Saída da Caverna</h2>
                <h4>Evolução pessoal que se traduz em evolução empresarial</h4>
            </div>

            <div className="text">
                <h5>Ano 4</h5>
                <h2>Mundo<br /> Real</h2>
                <h4>Ultrapassa as camadas da superficiais, chega-se ao próximo nível</h4>
            </div>

            <div className="text">
                <h5>Ano 5</h5>
                <h2>Palavra Espalhada</h2>
                <h4>Quem é liberto não pode ser mais preso. A liberdade empresarial se consiga</h4>
            </div>
        </Scroll>
    </Container>
  )
}

export default Timeline