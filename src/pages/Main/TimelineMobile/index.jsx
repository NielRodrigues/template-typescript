import React, { useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Container, Content, Scroll } from './style'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
import { MouseContext } from '../../../contexts/MouseHoverContext';

import 'swiper/css';
import 'swiper/css/bundle';

function TimelineMobile() {

  const container = useRef(null)
  const scrollRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  const { setClick } = useContext(MouseContext)

  const [slides, setSlides] = useState(window.innerWidth / (380))

  useEffect(() => {
    function handleSize () {
      const calc = window.innerWidth / (380)
      setSlides(calc)
    }

    window.addEventListener("resize", handleSize)

    return (() => {
      window.removeEventListener("resize", handleSize)
    })

  }, [])

  return (
    <Container ref={container}>
        <Scroll ref={scrollRef}>
            <div className="title">Trilha Empresarial da NWB</div>
            <Button to="/"
                onMouseEnter={() => setClick(true)}
                onMouseLeave={() => setClick(false)}
            >
                <span>Conheça os nossos produtos da trilha empresarial</span>
            </Button>

            <Swiper
                className='content'
                slidesPerView={slides}
                spaceBetween={0}
                autoplay={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='slider'>
                    <span className='text'>Operacional</span>
                    <div className="line" style={{ left: "24px"}} />
                    <div className="square" />
                    <div className="text">
                        <h5>Ano 0</h5>
                        <h2>Abertura <br />dos olhos</h2>
                        <h4>O que o empresário entende como verdade começa a se desfazer</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='slider'>
                    <span className='text'>Tático</span>
                    <div className="line" style={{ left: "0px"}} />
                    <div className="ball" />
                    <div className="text">
                        <h5>Ano 1</h5>
                        <h2>Sombra na Parede</h2>
                        <h4>Os primeiros passos para colocar o empresário na trilha certa</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='slider'>
                    <div className="line" style={{ left: "0px"}} />
                    <div className="text">
                        <h5>Ano 2</h5>
                        <h2>Quebra das correntes</h2>
                        <h4>A trilha se torna subida e as possibilidades de vista se multiplicam</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='slider'>
                    <div className="line" style={{ left: "0px"}} />
                    <div className="text">
                        <h5>Ano 3</h5>
                        <h2>Saída da Caverna</h2>
                        <h4>Evolução pessoal que se traduz em evolução empresarial</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='slider'>
                    <span className='text' style={{ left: "0px"}}>Estratégico</span>
                    <div className="line" style={{ left: "0px"}} />
                    <div className="ball" style={{ left: "0px"}} />
                    <div className="text">
                        <h5>Ano 4</h5>
                        <h2>Mundo<br /> Real</h2>
                        <h4>Ultrapassa as camadas da superficiais, chega-se ao próximo nível</h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='slider'>
                    <div className="line" style={{ left: "0px", width: "calc(100% - 24px)"}} />
                    <div className="end" />
                    <div className="text">
                        <h5>Ano 5</h5>
                        <h2>Palavra Espalhada</h2>
                        <h4>Quem é liberto não pode ser mais preso. A liberdade empresarial se consiga</h4>
                    </div>
                </SwiperSlide>
            </Swiper>
        </Scroll>
    </Container>
  )
}

export default TimelineMobile