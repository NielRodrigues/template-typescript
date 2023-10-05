import React, { useEffect, useRef, useState } from 'react'
import { Container, Scroll } from './style'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";

function Timeline() {

  const container = useRef(null)
  const scrollRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  const [percentage, setPercentage] = useState<number>(0)

  useEffect(() => {
    const panel = gsap.context(() => {
        gsap.to(scrollRef.current, {
            x: "-50%",
            ease: "none",
            scrollTrigger: {
                trigger: scrollRef.current,
                start: "top center",
                end: "2000 center",
                scrub: 4, 
                markers: true,
                pin: true,
                onUpdate: (animation) => {
                    // Acesse a posição atual de "x" no elemento animado
                    const currentX: number = animation.progress * 100; // O valor da propriedade "x" é multiplicado por 100 para obter um valor percentual
                    console.log("Posição atual de x:", currentX);
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
            <div className="line" />
            <div className="line-active" style={{ width: `${percentage}%`}} />
            <div className={percentage > 0.2 ? "square active" : "square"} />
            <div className={percentage > 10.95 ? "ball active" : "ball"} style={{left: "30vw"}} />
            <div className={percentage > 63.5 ? "ball active" : "ball"} style={{left: "135vw"}} />
            <div className={percentage >= 100 ? "end active" : "end"} />
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