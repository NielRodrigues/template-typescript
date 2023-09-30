import { Container } from './styles'
import { useState } from 'react';
import logo from "../../assets/images/logo.png"
import "animate.css"
import CursorMask from '../../components/CursorMask';
import Load from '../../components/Load';

export default function Main() {
  const array = new Array(20).fill(0).map((_, index) => index);

  const [hovered, setHovered] = useState(false)

  return (
    <Container>
      <Load />
      <CursorMask />
      
    </Container>
  )
}
