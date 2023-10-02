import React, { useState, useContext } from 'react'
import PropTypes from "prop-types"
import CursorMask from '../CursorMask'
import { Button } from './style'
import { MouseContext } from '../../contexts/MouseHoverContext'


function Button2({ text, link }) {
  const { setClick } = useContext(MouseContext)
  

  return (
    <Button 
        to={link}
        onMouseEnter={() => setClick(true)}
        onMouseLeave={() => setClick(false)}
    >
        <span>{text}</span>
    </Button>
  )
}

Button2.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}


export default Button2