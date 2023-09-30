import { Container } from './styles'
import { useState } from 'react';
import logo from "../../assets/images/logo.png"
import "animate.css"
import CursorMask from '../../components/CursorMask';
import Load from '../../components/Load';
import Header from '../../components/Header';
import Home from './Home';

export default function Main() {

  return (
    <Container>
      <Load />
      <CursorMask />
      
      <Header />
      <Home />
    </Container>
  )
}
