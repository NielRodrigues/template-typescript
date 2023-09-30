import React, { useEffect, useRef } from 'react'
import { Container } from './style'
import gsap from 'gsap'

function Load() {

    const container = useRef(null)
    const bar1 = useRef(null)
    const bar2 = useRef(null)
    const bar3 = useRef(null)

    useEffect(() => {
        gsap.fromTo(bar1.current, 
            {
                y: "100vh",
            }, 
            {
                y: 0,
                delay: 0.5,
                duration: 0.5,
                ease: "ease-out"
            }
        )

        gsap.fromTo(bar2.current, 
            {
                y: "100vh"
            }, 
            {
                y: 0,
                delay: 0.7,
                duration: 0.5,
                ease: "ease-out"
            }
        )

        gsap.fromTo(bar3.current, 
            {
                y: "100vh"
            }, 
            {
                y: 0,
                delay: 0.9,
                duration: 0.5,
                ease: "ease-out"
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
                    duration: 0.5,
                    ease: "ease-out"
                }
            )
    
            gsap.fromTo(bar2.current, 
                {
                    y: 0,
        
                }, 
                {
                    y: "-100vh",
                    delay: 0.7,
                    duration: 0.5,
                    ease: "ease-out"
                }
            )
    
            gsap.fromTo(bar3.current, 
                {
                    y: 0,
                    
                }, 
                {
                    y: "-100vh",
                    delay: 0.9,
                    duration: 0.5,
                    ease: "ease-out"
                }
            )
        }, 2000)
    }, [])

    return (
        <Container ref={container}>
            <div ref={bar1} className="bar" />
            <div ref={bar2} className="bar" />
            <div ref={bar3} className="bar" />
        </Container>
    )
}

export default Load