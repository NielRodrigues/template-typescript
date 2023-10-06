import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Content, Div2, Scroll, Title } from './style'
import gsap, { Power4, Expo } from 'gsap'
import { ScrollTrigger } from "gsap/all";
import SplitType from 'split-type'

import Button2 from '../../../components/Button2';
import Card from '../../../components/Card';

import 'swiper/css';
import 'swiper/css/bundle';

function SolutionsMobile() {

  const [slides, setSlides] = useState(window.innerWidth / (380 + 24))

  useEffect(() => {
    function handleSize () {
      const calc = window.innerWidth / (380 + 24)
      setSlides(calc)
    }

    window.addEventListener("resize", handleSize)

    return (() => {
      window.removeEventListener("resize", handleSize)
    })

  }, [])

  const titleRef = useRef(null)
  const titleRef2 = useRef(null)
  const titleRef3 = useRef(null)
  const divRef = useRef(null)
  const section = useRef(null)
  const sectionScroller = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    if(titleRef.current && titleRef2.current && titleRef3.current) {
        SplitType.create(titleRef.current, { types: "words, chars", charClass: "char2" })
        SplitType.create(titleRef2.current, { types: "words, chars", charClass: "char3" })
        SplitType.create(titleRef3.current, { types: "words", wordClass: "words2" })

        gsap.fromTo(".char2", {
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
                trigger: section.current,
                start: "top 80%",
                end: "top 80%",
                scrub: false,
                toggleActions: "restart none none none"
            }
        })

        gsap.fromTo(".char3", {
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
                trigger: section.current,
                start: "top 80%",
                end: "top 80%",
                scrub: false,
                toggleActions: "restart none none none"
            }
        })

        gsap.fromTo(".words2", {
            y: 64,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut,
            delay: 0.2,
            duration: 2,
            stagger: {
                amount: 0.5,
            },
            scrollTrigger: {
                trigger: section.current,
                start: "top 80%",
                end: "top 80%",
                scrub: false,
                toggleActions: "restart none none none",
            }
        })
    }

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
            pin: true,
        }
    })

    gsap.fromTo(sectionScroller.current, {
        y: 40,
        opacity: 0,
    }, {
        y: 0,
        opacity: 1,
        ease: Power4.easeInOut,
        duration: 0.4,
        scrollTrigger: {
            trigger: sectionScroller.current,
            start: "top 80%",
            end: "top 80%",
            scrub: 4,
            pin: true,
        }
    })
  }, [])

  return (
    <Container>
        <Content ref={section}>
            <Title ref={titleRef}>Nossas<br />soluções</Title>
            <Div2>
                <h1 ref={titleRef2}>Pré, durante <br />& pós.</h1>
                <h2 ref={titleRef3}>Os Superprodutos é a nossa forma de entregar a solução você antes ou em qualquer momento da Trilha Empresarial.</h2>

                <Button2 link='/' text='Conheça a nossa trilha empresarial' />
            </Div2>
            <Swiper
                className='content'
                slidesPerView={slides}
                spaceBetween={24}
                autoplay={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='slider'>
                    <Card />
                </SwiperSlide>

                <SwiperSlide className='slider'>
                    <Card />
                </SwiperSlide>

                <SwiperSlide className='slider'>
                    <Card />
                </SwiperSlide>

                <SwiperSlide className='slider'>
                    <Card />
                </SwiperSlide>

                <SwiperSlide className='slider'>
                    <Card />
                </SwiperSlide>
            </Swiper>
        </Content>
    </Container>
  )
}

export default SolutionsMobile