import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Container, LinkMenu, MenuBurger, Navigation } from './style'

import { ReactComponent as CrossIcon } from '../../../assets/icons/cross.svg'

function Menu() {

  const [open, setOpen] = useState(false)

  const menuRef = useRef(null)

  const line1 = useRef(null)
  const line2 = useRef(null)
  const line3 = useRef(null)

  const mouseEnter = (event) => {

    const { clientX, clientY } = event;
    const { top, left } = menuRef.current.getBoundingClientRect()


    const x = clientX - ( left + 32 / 2)
    const y = clientY - ( top + 32 / 2)

    gsap.to(menuRef.current, {x: x})
    gsap.to(menuRef.current, {y: y})

    gsap.to(line1.current, { marginRight: -44, duration: 0.4,})
    gsap.to(line2.current, { marginRight: -44, duration: 0.4, delay: 0.2})
    gsap.to(line3.current, { marginRight: -44, duration: 0.4, delay: 0.4})
  }

  const mouseLeave = (event) => {

    gsap.to(menuRef.current, {x: 0})
    gsap.to(menuRef.current, {y: 0})

    gsap.to(line1.current, { marginRight: 0, duration: 0.4,})
    gsap.to(line2.current, { marginRight: 0, duration: 0.4, delay: 0.2})
    gsap.to(line3.current, { marginRight: 0, duration: 0.4, delay: 0.4})

  }

  return (
    <Container 
      
    >
        <MenuBurger
          onMouseMove={mouseEnter}
          onMouseLeave={mouseLeave}
          ref={menuRef}
          onClick={() => setOpen(!open)}
        >
          <div ref={line1} className="line">
            <div className="line-2" />
            <div className="line-2" />
          </div>

          <div ref={line2} className="line">
            <div className="line-2" />
            <div className="line-2" />
          </div>

          <div ref={line3} className="line">
            <div className="line-2" />
            <div className="line-2" />
          </div>
        </MenuBurger>

        <Navigation
          style={open ? {width: "312px", padding: "32px", height: "236px"} : { height: "0px", width: "0px", padding: "0px" }}
        >
            <div className='line-header-menu'>
              <span>Menu</span>
              <CrossIcon onClick={() => setOpen(false)} />
            </div>

            <LinkMenu to="/">
              <span>Lorem</span>
            </LinkMenu>

            <LinkMenu to="/">
              <span>Lorem</span>
            </LinkMenu>

            <LinkMenu to="/">
              <span>Lorem</span>
            </LinkMenu>

            <LinkMenu to="/">
              <span>Lorem</span>
            </LinkMenu>
        </Navigation>
    </Container>
  )
}

export default Menu