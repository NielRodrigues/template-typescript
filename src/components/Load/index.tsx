import React, { useEffect, useRef } from 'react'
import { Container } from './style'
import gsap, { Expo, Power4 } from 'gsap'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

function Load() {

    const container = useRef(null)
    const bar1 = useRef(null)
    const bar2 = useRef(null)
    const bar3 = useRef(null)
    const logo = useRef(null)

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

        gsap.fromTo(logo.current, 
            {
                y: 160,
                opacity: 0,
            }, 
            {
                y: 0,
                delay: 0.8,
                duration: 0.8,
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
    
            gsap.fromTo(logo.current, 
                {
                    y: 0,
                    opacity: 1,
        
                }, 
                {
                    y: -160,
                    delay: 0.7,
                    duration: 0.8,
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
            <div ref={bar2} className="bar" />
            <Logo ref={logo} />
            <div ref={bar3} className="bar" />
        </Container>
    )
}

export default Load