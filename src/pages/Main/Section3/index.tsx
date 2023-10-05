import React, { useContext, useEffect, useRef } from 'react'
import { Button, Col, Col2, Col3, Container } from './style'
import Image from "../../../assets/images/Andre-Menezes.jpg"
import { MouseContext } from '../../../contexts/MouseHoverContext'

import gsap, { Expo, Power0 } from 'gsap'
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type'

function Section3() {
  const text1 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)
  const text4 = useRef(null)
  const text5 = useRef(null)

  const image = useRef(null)

  const div1 = useRef(null)
  const div2 = useRef(null)

  const { setClick } = useContext(MouseContext)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    if(text1.current && text2.current && text3.current && text4.current && text5.current) {
        SplitType.create(text1.current, { types: "words, chars", charClass: "char6"})
        SplitType.create(text2.current, { types: "words, chars", charClass: "char7"})
        SplitType.create(text3.current, { types: "words, chars", charClass: "char8"})
        SplitType.create(text4.current, { types: "words", wordClass: "words7"})
        SplitType.create(text5.current, { types: "words", wordClass: "words8"})

        gsap.fromTo(".char6", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            ease: Expo.easeOut,
            opacity: 1,
            delay: 0.2,
            duration: 3,
            sstagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: text1.current,
                start: "top 75%",
                end: "top 75%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }, 
        })

        gsap.fromTo(".char7", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 3,
            sstagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: text2.current,
                start: "top 75%",
                end: "top 75%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }, 
        })

        gsap.fromTo(".char8", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 3,
            sstagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: text2.current,
                start: "top 75%",
                end: "top 75%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }, 
        })

        gsap.fromTo(".words7", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 3,
            sstagger: {
                amount: 0.5,
                each: 1,
            },
            scrollTrigger: {
                trigger: text4.current,
                start: "top 75%",
                end: "top 75%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }, 
        })

        gsap.fromTo(".words8", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 3,
            sstagger: {
                amount: 0.5,
                each: 1,
            },
            scrollTrigger: {
                trigger: text5.current,
                start: "top 75%",
                end: "top 75%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }, 
        })
    }

    gsap.fromTo(image.current, {
        y: "100%",
        opacity: 0,
    }, {
        delay: 0.2,
        y: 0,
        opacity: 1,
        duration: 3,
        ease: Expo.easeOut,
        scrollTrigger: {
            trigger: image.current,
            start: "-100% 75%",
            end: "-100% 75%",
            scrub: false,
            toggleActions: "restart none none reverse"
        }, 
    })

    gsap.fromTo(".col2", {
        y: "100%",
        opacity: 0,
    }, {
        delay: 0.2,
        y: 0,
        opacity: 1,
        duration: 3,
        ease: Expo.easeOut,
        stagger: {
            amount: 1.2,
            each: 1.2,
            from: "end",
        },
        scrollTrigger: {
            trigger: div2.current,
            start: "-100% 75%",
            end: "-100% 75%",
            scrub: false,
            toggleActions: "restart none none reverse"
        }, 
    })
  }, [])

  return (
    <Container>
        <Col>
            <h3 ref={text1} className="title">
                Nossas <br/>Soluções
            </h3>
            <div className="contact-and-image">
                <h4 ref={text3}>@andremenezes</h4>
                <img ref={image} src={Image} alt="Foto André" />
            </div>
        </Col>

        <Col2>
            <h2 ref={text2}>Fundador <br/>da NWB</h2>

            <div className="text">
                <h5 ref={text4}>Empresário há mais de 20 anos, André Menezes começou sua jornada empreendedora como vendedor de bananas na feira aos 12 anos e hoje, é CEO e Fundador do Imperium Group, um ecossistema de soluções empresariais de educação, gestão e tecnologia.</h5>
                <h5 ref={text5}>Autor do livro “Chega de ser Empresidiário”, André é conselheiro em 32 empresas e criador da maior imersão de desenvolvimento empresarial do Brasil, além de já ter treinado mais de 28.000 empresários presencialmente.</h5>
            </div>
        </Col2>

        <Col3>
            <div ref={div1} className="buy-div col2">
                <Button to="/"
                    onMouseEnter={() => setClick(true)}
                    onMouseLeave={() => setClick(false)}
                >
                    <span>Comprar</span>
                </Button>
            </div>
            <div ref={div2} className="desc col2">
                <h3>Autor do best seller do livro: Chega de Ser Empresidiário, com + 6000 livros vendidos no seu pré-lançamento.</h3>
            </div>
        </Col3>
    </Container>
  )
}

export default Section3