import React, { useEffect, useRef } from 'react'
import { Container } from './style'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import gsap, { Power4 } from 'gsap'
import Menu from './Menu'

function Header() {

    const logo = useRef(null)

    useEffect(() => {
        gsap.fromTo(logo.current, { 
            delay: 0.8,
            opacity: 0,
            y: 120,
            position: "fixed",
            top: "calc(50vh - 13px)",
            left: "calc(50vw - 45.36px)",
        }, {
            delay: 1.2,
            opacity: 1,
            y: 0,
        })
        setTimeout(() => {
            gsap.to(logo.current,
                {
                    delay: 1.8,
                    duration: 1,
                    y: 0,
                    opacity: 1,
                    ease: Power4.easeInOut,
                    top: "calc(56px - 13px)",
                    left: "2.5%",
                }
            )  
            gsap.to(logo.current, { delay: 3.8, position: "static"})
        }, 1000)
    }, [])

  return (
    <Container>
        <Logo ref={logo} className='logo' />
        <Menu />
    </Container>
  )
}

export default Header