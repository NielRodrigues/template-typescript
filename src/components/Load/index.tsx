import React, { useEffect, useRef, useState } from 'react'
import { Container } from './style'
import gsap, { Expo, Power4 } from 'gsap'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

function Load() {

    const [saudation, setSaudation] = useState<string[]>(["Maravilhoso", "dia"])
    const date = new Date()

    useEffect(() => {
        const hours = date.getHours()

        if(hours >= 6 && hours < 12) {
            setSaudation(["Maravilhoso", "dia"])
        } else if(hours >= 12 && hours < 19) {
            setSaudation(["Maravilhosa", "tarde"])
        } else {
            setSaudation(["Maravilhosa", "noite"])
        }
    }, [])

    const container = useRef(null)
    const bar1 = useRef(null)
    const bar2 = useRef(null)
    const bar3 = useRef(null)
    const logo = useRef(null)

    const span1 = useRef(null)
    const span2 = useRef(null)

    useEffect(() => {
        gsap.fromTo(bar1.current, 
            {
                y: "100vh",
            }, 
            {
                y: 0,
                delay: 0.5,
                duration: 1,
                ease: Power4.easeInOut,
            }
        )

        gsap.fromTo(bar2.current, 
            {
                y: "100vh"
            }, 
            {
                y: 0,
                delay: 0.6,
                duration: 1,
                ease: Power4.easeInOut,
            }
        )

        gsap.fromTo(span1.current, 
            {
                x: 80,
                opacity: 0,
            }, 
            {
                x: 0,
                delay: 0.8,
                duration: 1.2,
                opacity: 1,
                ease: Power4.easeInOut,
            }
        )
        gsap.fromTo(span2.current, 
            {
                x: 80,
                opacity: 0,
            }, 
            {
                x: 0,
                delay: 1,
                duration: 1.2,
                opacity: 1,
                ease: Power4.easeInOut,
            }
        )

        gsap.fromTo(bar3.current, 
            {
                y: "100vh"
            }, 
            {
                y: 0,
                delay: 0.7,
                duration: 1,
                ease: Power4.easeInOut,
            }
        )

        gsap.to(container.current, 
            {
                backgroundColor: "transparent",
                delay: 1.5,
            }
        )

        setTimeout(() => {
            gsap.fromTo(bar1.current, 
                {
                    y: 0,
                }, 
                {
                    y: "-100vh",
                    delay: 0.5,
                    duration: 1,
                    ease: Power4.easeInOut,
                }
            )
    
            gsap.fromTo(span1.current, 
                {
                    x: 0,
                    opacity: 1,
                }, 
                {
                    x: -80,
                    delay: 0.1,
                    duration: 1.2,
                    opacity: 0,
                    ease: Power4.easeInOut,
                }
            )
            
            gsap.fromTo(span2.current, 
                {
                    x: 0,
                    opacity: 1,
                }, 
                {
                    x: -80,
                    delay: 0.3,
                    duration: 1.2,
                    opacity: 0,
                    ease: Power4.easeInOut,
                }
            )

            gsap.fromTo(bar2.current, 
                {
                    y: 0,
        
                }, 
                {
                    y: "-100vh",
                    delay: 0.6,
                    duration: 1,
                    ease: Power4.easeInOut,
                }
            )
    
            gsap.fromTo(bar3.current, 
                {
                    y: 0,
                    
                }, 
                {
                    y: "-100vh",
                    delay: 0.7,
                    duration: 1,
                    ease: Power4.easeInOut,
                }
            )

            gsap.to(container.current, 
                {
                    display: "none",
                    delay: 1.5,
                }
            )
        }, 2000)
    }, [])

    return (
        <Container ref={container}>
            <div ref={bar1} className="bar" />
            <div ref={bar2} className="bar">
                <span ref={span1}>{saudation[0]}</span> 
                <span ref={span2}>{saudation[1]}</span>
            </div>
            <div ref={bar3} className="bar" />
        </Container>
    )
}

export default Load