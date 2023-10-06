import React, { useRef, useEffect } from 'react'
import { Col, Col2, Container, Line1, Line2 } from './style'

import gsap, { Expo, Power0 } from 'gsap'
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type'
import Button1 from '../../../components/Button1';

import { ReactComponent as Logo } from "../../../assets/images/logo.svg"

function Section2() {

  const title1col1 = useRef(null)
  const logo = useRef(null)

  const title1 = useRef(null)
  const title2 = useRef(null)
  const title3 = useRef(null)

  const line2 = useRef(null)
  const line21 = useRef(null)
  const line22 = useRef(null)
  
  const col1 = useRef(null)
  const col2 = useRef(null)
  const col3 = useRef(null)



  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    if(title1.current && title2.current && title3.current && title1col1.current){
        SplitType.create(title1.current, { types: "words, chars", charClass: "char-counter" })
        SplitType.create(title2.current, { types: "words, chars", wordClass: "words3" })
        SplitType.create(title3.current, { types: "words, chars", wordClass: "words4" })
        SplitType.create(title1col1.current, { types: "words, chars", wordClass: "words5" })

        gsap.fromTo(".char-counter", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 3,
            stagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: title1.current,
                start: "top 80%",
                end: "top 80%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }
        })

        gsap.fromTo(".words3", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 3,
            stagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: title2.current,
                start: "top 80%",
                end: "top 80%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }
        })

        gsap.fromTo(".words4", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 2,
            stagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: title3.current,
                start: "top 80%",
                end: "top 80%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }
        })

        gsap.fromTo(".words5", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 2,
            stagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: title1col1.current,
                start: "top 80%",
                end: "top 80%",
                scrub: false,
                toggleActions: "restart none none reverse"
            }
        })
    }

    gsap.fromTo(".col", {
        y: "102%",
    }, {
        y: 0,
        opacity: 1,
        ease: Expo.easeOut,
        delay: 0.2,
        duration: 2,
        stagger: {
            amount: 1.2,
            from: "end",
        },
        scrollTrigger: {
            trigger: line22.current,
            start: "-100% 75%",
            end: "-100% 75%",
            scrub: false,
            toggleActions: "restart none none reverse"
        }
    })

    gsap.fromTo(logo.current, {
        y: "100%",
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        duration: 3,
        delay: 0.2,
        ease: Expo.easeOut,
        scrollTrigger: {
            trigger: line22.current,
            start: "top 75%",
            end: "top 75%",
            scrub: false,
            toggleActions: "restart none none reverse"
        }
    })

    
  }, [])

  return (
    <Container>
        <Col>
            <h1 ref={title1col1}>Uma marca que revela as correntes do empresário, ensina o caminho para quebra-las e incentiva os novos passos.</h1>
            <Button1 text='Saiba mais' link='/' />
            <Logo className='logo' ref={logo} />
        </Col>

        <Col2>
            <Line1>
                <h2 ref={title1} className="counter">+28Mil</h2>
                <h4 ref={title2}>empresários treinados presencialmente pela NWB</h4>
            </Line1>

            <Line2 ref={line2}>
                <div ref={line21} className="line-2-1">
                    <div ref={title3} className="col-1-line-2-1">
                        <h3>
                            Somos especialistas em dar luz aos problemas do empresário. Mostramos o quanto esses desajustes podem ser correntes: prendem a pessoa em uma empresa que já não compreende, fazendo sacrificar os momentos da vida pessoal.
                        </h3>
                    </div>

                    <div ref={col1} className="col-2-line-2-1 col">
                        <h2>+500 Mil empresários impactados em 7 países</h2>
                    </div>
                </div>

                <div ref={line22} className="line-2-2">
                    <div ref={col2} className="col-1-line-2-2 col">
                        <h2>+ 2.000 empresários mentorados</h2>
                    </div>

                    <div ref={col3} className="col-2-line-2-2 col">
                        <h2>+ 10.000 sessões estratégicas empresariais</h2>
                    </div>
                </div>
            </Line2>
        </Col2>
    </Container>
  )
}

export default Section2