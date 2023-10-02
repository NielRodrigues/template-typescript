import React, { useEffect, useRef } from 'react'
import { Container } from './style'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import gsap, { Power4 } from 'gsap'
import Menu from './Menu'

function Header() {

    const logo = useRef(null)

    useEffect(() => {
        gsap.fromTo(logo.current, { 
            opacity: 0,
            y: 80,
        }, {
            delay: 2.9,
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: Power4.easeInOut,
        })
    }, [])

  return (
    <Container>
        <Logo ref={logo} className='logo' />
        <Menu />
    </Container>
  )
}

export default Header