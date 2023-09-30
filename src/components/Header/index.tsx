import React, { useEffect, useRef } from 'react'
import { Container } from './style'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import gsap, { Power1 } from 'gsap'

function Header() {

    const logo = useRef(null)

    useEffect(() => {
        gsap.fromTo(logo.current, 
            {
                opacity: 0,
                y: 20,
            },
            {
                delay: 2.8,
                duration: 0.8,
                y: 0,
                opacity: 1,
                ease: Power1.easeOut,
            }
        )  
    }, [])

  return (
    <Container>
        <Logo ref={logo} className='logo' />
    </Container>
  )
}

export default Header