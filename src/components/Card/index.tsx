import React, { useContext } from 'react'
import { Container, More } from './style'
import { ReactComponent as Icon } from "../../assets/icons/play.svg"
import { ReactComponent as Plus } from "../../assets/icons/plus.svg"
import { MouseContext } from '../../contexts/MouseHoverContext'

function Card() {

  const { setClick } = useContext(MouseContext)  

  return (
    <Container>
        <Icon className='icon' />
        <h2>Sessão estratégica</h2>
        <h3>Reunião exclusiva para donos e donas  de empresas onde revelamos como ter um time de alta performance e deixar  de ser refém das pessoas.</h3>
    
        <More 
            to="/"
            onMouseEnter={() => setClick(true)}
            onMouseLeave={() => setClick(false)}
        >
            <span>Saiba mais</span>
            <div className="icon-2">
                <Plus className='icon-more' />
            </div>
        </More>
    </Container>
  )
}

export default Card